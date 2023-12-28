import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditArea() {
    // const [taskName, setTaskName] = useState("")
    // const [taskText, setTaskText] = useState("")

    // const handleCreate = () => {
    //     let id = task.length? task[task.length -1].id + 1: 1 ;     //using task.length,fetching the last index of tasks if its true orelse it will assign id as 1 for false
    //     let newArrayCreate = [...task];
    //     newArrayCreate.push({
    //         id,
    //         taskName,
    //         taskText
    //     })
    //     setTask(newArrayCreate)
    //     // console.log(newArrayCreate);
    // }

    return <>
        <h4 className='text-center'>My Todo</h4>
        <Form className='my-5'>
            <Form.Group className="mb-3">
                <Form.Label>Todo</Form.Label>
                <Form.Control type="text" placeholder="Todo Name" onChange={(ele)=>{setTaskName(ele.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Todo Description' onChange={(ele)=>{setTaskText(ele.target.value)}}/>
            </Form.Group>
            <Button variant='primary' onClick={()=>handleCreate()}>Add Todo</Button>
        </Form>
    </>
}

export default EditArea