import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputArea() {
  return <>
    <Form className='my-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task</Form.Label>
        <Form.Control type="email" placeholder="Enter Task" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter Description' />
      </Form.Group>
      <Button variant='primary'>Add Task</Button>
    </Form>
  </>
}

export default InputArea