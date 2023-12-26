import React from 'react'
import Form from 'react-bootstrap/Form';
import Cards from './Cards';

function OutputArea({task,setTask}) {
    // console.log(task,setTask);
  return <>
    <div>
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
    <div className="row">{
        task.map((e,i)=>{
            return <Cards ele={e} i={i} key={i} task={task} setTask={setTask}/>
        })
    }
    </div>
    </div>
    </>
}

export default OutputArea