import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState(0)
  
    // fetch('http://localhost:3000/todos').then(async function (res) {
    //   const json = await res.json();
    //   setTodos(json.todos)
    //   console.log(json.todos);
    // })

  return (
    <>
     <div>
        <CreateTodo />
        <Todos todos={[{
          title:"go somewhere",
          description:"i am going"
        }]} ></Todos>
      </div> 
      
    </>
  )
}

export default App
