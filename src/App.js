import React, { use } from "react";
import { useState } from "react";
import ToDoList from "./components/ToDoList";

export default function App(){
  //estado para guardar lista
  const [toDos,setToDos] = useState([])

  const [newTask, setNewTask] = useState("")

  const addTask = () =>{
    if(newTask.trim()=== "")return
    const newToDo = {id:Date.now(), Text: newTask}
    
    setToDos([...toDos,newToDo])

    setNewTask("")
  }
  // função que remove uma tarefa pelo id
  const removeTask = (id) =>{
    setToDos(toDos.filter((toDo)=> toDo.id !== id))
  }
  return(
    <div>
      <h1>Minha ToDo List</h1>
      <div>
        <input 
        type="text" 
        placeholder="Digite uma nova tarefa!" 
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Adicionar
        </button>
        <div>
          <ToDoList toDos={toDos} removeTask={removeTask}/>
        </div>
      </div>
    </div>
  )
}
const styles = {
  container:{
    maxWidth:"600px", 
    margin:"50px",
    textAlign:"center",
    fontFamily:"Arial, sans-serif"  
  },
inputdh:{
  padding:"10px",
  width:"49%",
  marginRight:"5px",
  borderRadius:"10px"
},
input:{
  padding:"10px",
  width:"70%",
  marginRight:"5px"
},
button:{
  padding:"10px",
  cursor:"pointer"
}
}
