import { useEffect, useState } from 'react'
import './App.css'
import SQLinkAPI, { StringOrNumber } from './server/apis';
import TododItem from './components/todo/TododItem';
import AppHeader from './components/header/AppHeader';
import {TodoInput} from './components/todo/TodoInput';


export interface ITaskItem {
  task_id: number
  task_title: string
  task_description: string
  task_status: string
  created_at:string | Date
  updated_at: string | Date
}



function App() {

  const [tasksList,setTasksList] = useState<ITaskItem[]>([]);

  const [taskInput,setTaskInput] = useState({
    task_title:'',
    task_description: ''
  })

  const fetchTasks = async() => {
    let res = await SQLinkAPI.getDataFromSQL("Todos",`$select=task_id,task_title,task_description,task_status,created_at`)
    setTasksList(res.data)
  }

  useEffect(() => {
    fetchTasks()
  },[]);

  const handleSubmitTask = async(data:Record<string,any>) => {
    await SQLinkAPI.insertDataToSQL("Todos",data)
    await fetchTasks()
  }

  const handleDelete = async(key:StringOrNumber,value:StringOrNumber) => {
    await SQLinkAPI.deleteDataToSQL("Todos",key,value)
    await fetchTasks()
  }

  const handleUpdate = async(key:StringOrNumber,value:StringOrNumber) => {
    await SQLinkAPI.updateDataToSQL("Todos",{task_description: Date.now().toString()},key,value)
    await fetchTasks()
  }
  const handleOnClose = async() => {
    await fetchTasks();
  }

  const handleStatusChange = async (status:string) => {
    if(status != "all"){
      let res = await SQLinkAPI.getDataFromSQL("Todos",`$select=task_id,task_title,task_description,task_status,created_at&$filter=task_status eq '${status}'`)
      setTasksList(res.data)
    }else{
      await fetchTasks();
    }
  }
  return (
    <>
      <AppHeader/>
      <TodoInput onClose={handleOnClose} onTaskSubmit={handleSubmitTask} onStatusChange={handleStatusChange}/>
      {
        tasksList.map((item) => {
          return (
            // <div style={{display:'flex',gap:'40px'}}>
            //   <p>{item.task_title}</p>
            //   <p>{item.task_description}</p>
            //   <a onClick={() => handleUpdate('task_id',item.task_id)}>Update</a>
            //   <a onClick={() => handleDelete('task_id',item.task_id)}>Delete</a>

            // </div>
            <TododItem data={item}/>
          )
        })
      }
    </>
  )
}

export default App
