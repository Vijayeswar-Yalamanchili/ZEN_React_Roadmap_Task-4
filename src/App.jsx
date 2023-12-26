import React,{useState} from 'react'
import Cards from './components/Cards'
import InputArea from './components/InputArea'
import OutputArea from './components/OutputArea'


function App() {
const [task, setTask] = useState([
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
  },
  {
    title : "task 4",
    description : "Project 4"
  }
])

  // let data = [
  //   {
  //     title : "task 1",
  //     description : "Project 1"
  //   },
  //   {
  //     title : "task 2",
  //     description : "Project 2"
  //   },
  //   {
  //     title : "task 3",
  //     description : "Project 3"
  //   }
  // ]

  return <>
    <div className="container my-5">
      <div className="row">
        <InputArea/>
        <hr />        
        <OutputArea task={task} setTask={setTask}/>
        {/* {
          data.map((e,i)=>{
            return <Cards data={e} key={i}/>
          })
        } */}
        
      </div>
    </div>
  </>
}

export default App