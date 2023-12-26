import React from 'react'
import Cards from './components/Cards'
import InputArea from './components/InputArea'


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
    <div className="container mt-5">
      <div className="row">
        <InputArea/>
        <hr />
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