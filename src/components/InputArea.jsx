import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputArea() {
  return <>
    <h4 className='text-center'>My Todo</h4>
    <Form className='my-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Todo</Form.Label>
        <Form.Control type="email" placeholder="Todo Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Todo Description' />
      </Form.Group>
      <Button variant='primary'>Add Todo</Button>
    </Form>
  </>
}

export default InputArea