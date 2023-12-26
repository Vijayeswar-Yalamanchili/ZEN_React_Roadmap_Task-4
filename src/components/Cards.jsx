import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Cards({ele}) {
    return <>
        <Card className='mb-5 me-4' style={{ width: '19rem'}} >
          <Card.Body>
            <Card.Title>Name : {ele.title}</Card.Title>
            <Card.Text>Description : {ele.description}</Card.Text>
            <Card.Text>
                Status : <Form.Select aria-label="Default select example">
              <option value="Completed">Completed</option>
              <option value="Not-Completed">Not-Completed</option>
            </Form.Select>
            </Card.Text>
            <Row>
              <Col><Button variant="secondary">Edit</Button></Col>
              <Col><Button variant="danger">Delete</Button></Col>
            </Row>

          </Card.Body>
        </Card>
  </>
}

export default Cards