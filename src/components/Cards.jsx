import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Cards({ele,i,task,setTask}) {
  //find index of tasks
  const findIndex = (id) =>{
    for(let i=0; i< task.length; i++){
      if(id === task[i].id)
        return i;
    }
  }

  //handling delete button
  const handleDelete = (id) => {
    let index = findIndex(id);
    // console.log(index);
    let newArrayTask = [...task]    //using deep copy
    newArrayTask.splice(index,1)    //modifying the array
    setTask(newArrayTask)
    // console.log(newArrayTask);
  }

  //handling Edit btn
  const handleEdit = () => {
    let index = findIndex(id);
  }

    return <>
        <Card className='mb-5 me-4' style={{ width: '19rem'}} >
          <Card.Body>
            <Card.Title>Id : {i+1}</Card.Title>
            <Card.Title>Name : {ele.title}</Card.Title>
            <Card.Text>Description : {ele.description}</Card.Text>
            <Card.Text>
                Status : <Form.Select aria-label="Default select example">
              <option value="Completed">Completed</option>
              <option value="Not-Completed">Not-Completed</option>
            </Form.Select>
            </Card.Text>
            <Row>
              <Col><Button variant="secondary" onClick={()=>{handleEdit()}}>Edit</Button></Col>
              <Col><Button variant="danger" onClick={()=>handleDelete(ele.id)}>Delete</Button></Col>
            </Row>

          </Card.Body>
        </Card>
  </>
}

export default Cards