import { useState } from "react";

export function CreateTodo(props) {
    
    const [title,setTitle]=useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={function (e) {
            let value = e.target.value
            setTitle(value)
        }} />
        <input type="text" placeholder="description" onChange={function (e) {
            let value = e.target.value
            setDescription(value)
        }} />
        <button onClick={()=>{
            fetch('http://localhost:3000/todo',{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })

        }} >Add a todo</button>
    </div>
}