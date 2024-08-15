import { useEffect, useState } from 'react'
import './App.css'
import SQLinkAPI, { StringOrNumber } from './server/apis';
import TododItem from './components/todo/TododItem';
import AppHeader from './components/header/AppHeader';
import {TodoInput} from './components/todo/TodoInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastOptions: any = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: true,
  theme: "light",
  closeOnClick: false,
  closeButton: false,
}

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
  const sucessMessage = (message:string) => toast.success(message,toastOptions)

  const [editData,setEditData] = useState<any>({})

  const fetchTasks = async() => {
    let res = await SQLinkAPI.getDataFromSQL("Todos",`$select=task_id,task_title,task_description,task_status,created_at`)
    setTasksList(res.data)
  }

  useEffect(() => {
    fetchTasks()
  },[]);

  const handleSubmitTask = async(data:Record<string,any>) => {
    if(Object.keys(editData).length != 0){
      await SQLinkAPI.updateDataToSQL("Todos",data,'task_id',data.task_id)
      await sucessMessage("Task updated Successfully!!")
      await fetchTasks();
      setEditData({})
    }else{
      await SQLinkAPI.insertDataToSQL("Todos",data)
      await sucessMessage("Task created Successfully!!")
      await fetchTasks()
    }
  }

  const handleDelete = async(data:ITaskItem) => {
    await SQLinkAPI.deleteDataToSQL("Todos",'task_id',data.task_id)
    await sucessMessage("Task Deleted Successfully!!")
    await fetchTasks()
  }

  const onUpdateClick = (item:ITaskItem) => {
    let {task_title,task_description,task_id} = item
    setEditData({task_title,task_description,task_id})
  }
  const handleOnClose = async() => {
    await fetchTasks();
    setEditData({});
  }

  const handleStatusChange = async (status:string) => {
    if(status != "all"){
      let res = await SQLinkAPI.getDataFromSQL("Todos",`$select=task_id,task_title,task_description,task_status,created_at&$filter=task_status eq '${status}'`)
      setTasksList(res.data)
    }else{
      await fetchTasks();
    }
  }

  const toggleStatus = async(data:ITaskItem) => {
    let updated_status = data.task_status == "pending" ? "completed" : "pending"
    await SQLinkAPI.updateDataToSQL("Todos",{task_status:updated_status},'task_id',data.task_id)
    await sucessMessage("Task updated Successfully!!")
    await fetchTasks();
  }

  return (
    <>
      <AppHeader/>
      <TodoInput editData={editData} onClose={handleOnClose} onTaskSubmit={handleSubmitTask} onStatusChange={handleStatusChange}/>
      {
        tasksList.map((item) => {
          return (
            <TododItem data={item} onDeleteItem={handleDelete} onUpdateItem={onUpdateClick} handleToggleStatus={toggleStatus}/>
          )
        })
      }
    </>
  )
}

export default App
