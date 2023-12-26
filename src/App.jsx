import React,{useState} from 'react'
import Cards from './components/Cards'
import InputArea from './components/InputArea'
import OutputArea from './components/OutputArea'


function App() {
const [task, setTask] = useState([
  {
    id : 1,
    title : "task 1",
    description : "Project 1"
  },
  {
    id : 2,
    title : "task 2",
    description : "Project 2"
  },
  {
    id : 3,
    title : "task 3",
    description : "Project 3"
  },
  {
    id : 4,
    title : "task 4",
    description : "Project 4"
  }
])

  return <>
    <div className="container my-5">
      <div className="row">
        <InputArea task={task} setTask={setTask}/>
        <hr />        
        <OutputArea task={task} setTask={setTask}/>
      </div>
    </div>
  </>
}

export default App