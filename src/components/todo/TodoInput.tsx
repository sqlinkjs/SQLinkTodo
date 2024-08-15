import { useEffect, useState } from 'react'
import SQLinkTodoButton from '../ui/buttons/SQLinkTodoButton'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Stack,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react';



export function TodoInput({ onClose, onTaskSubmit, onStatusChange, editData }: any) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("all")
    const [taskInput, setTaskInput] = useState({
        task_title: '',
        task_description: ''
    });

    useEffect(() => {
        if(Object.keys(editData).length != 0){
            setTaskInput(editData);
            setIsModalOpen(true)
        }
    },[editData])

    const onFormSubmit = () => {
        onTaskSubmit(taskInput);
        handleModalClose()
    }

    const handleModalClose = () => {
        setTaskInput(() => ({
            task_description: '',
            task_title: ''
        }))
        setIsModalOpen(false);
        onClose();
    }
    useEffect(() => {
        onStatusChange(status)
    },[status])

    return (
        <div style={{ margin: "10px" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <SQLinkTodoButton onClick={() => setIsModalOpen(true)} text='Create Task' />
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <Stack spacing={4} direction='row' align='center'>
                        <Button
                            onClick={() => setStatus("all")}
                            variant={status == "all" ? "ghost" : ""}
                            colorScheme={status == "all" ? "teal" : ""} size='xs'>
                            All
                        </Button>
                        <Button
                            onClick={() => setStatus("completed")}
                            variant={status == "completed" ? "ghost" : ""}
                            colorScheme={status == "completed" ? "teal" : ""} size='xs'>
                            Completed
                        </Button>
                        <Button
                            onClick={() => setStatus("pending")}
                            variant={status == "pending" ? "ghost" : ""}
                            colorScheme={status == "pending" ? "teal" : ""} size='xs'>
                            Pending
                        </Button>
                    </Stack>
                </div>
            </div>
            {
                isModalOpen &&
                <>
                    <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{Object.keys(editData).length != 0 ? "Edit Task" : "Add Task"}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack gap={5}>
                                    <div>
                                        <FormLabel>Task title</FormLabel>
                                        <Input
                                            placeholder='Enter task title'
                                            value={taskInput.task_title}
                                            type='text'
                                            onChange={(e) => {
                                                setTaskInput((c) => ({
                                                    ...c,
                                                    task_title: e.target.value
                                                }))
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <FormLabel>Task Description</FormLabel>
                                        <Textarea
                                            value={taskInput.task_description}
                                            placeholder='Enter task description'
                                            onChange={(e) => {
                                                setTaskInput((c) => ({
                                                    ...c,
                                                    task_description: e.target.value
                                                }))
                                            }}
                                        />
                                    </div>
                                </Stack>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant='text' mr={3} onClick={handleModalClose}>
                                    Close
                                </Button>
                                <Button onClick={onFormSubmit} variant={"solid"}>Save</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            }
        </div>
    )
}

