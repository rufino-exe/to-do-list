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
  }
}
