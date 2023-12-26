import React from 'react'
import Cards from './components/Cards'
import InputArea from './components/InputArea'
import Form from 'react-bootstrap/Form';


function App() {
  let data = [
    {
      title : "task 1",
      description : "Project 1"
    },
    {
      title : "task 2",
      description : "Project 2"
    },
    {
      title : "task 3",
      description : "Project 3"
    }
  ]

  return <>
    <div className="container my-5">
      <div className="row">
        <InputArea/>
        <hr />
        <div className="outputHeader col-12 d-flex justify-content-between align-items-center mb-4">
          <h5 className='left mb-4col-6 '>My Todos</h5>
          <div className="right col-6 d-flex justify-content-around  align-items-center">
            <h5 className='col-3'>Status : </h5>
            <Form.Select>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not-Completed">Not-Completed</option>
            </Form.Select>
          </div>
        </div>
        {
          data.map((e)=>{
            return <Cards data={e} />
          })
        }
        
      </div>
    </div>
  </>
}

export default App