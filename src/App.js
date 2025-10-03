import React, { useState } from "react";
import ToDoList from "./components/ToDoList";

export default function App(){
  const [toDos, setToDos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dataDia, setDataDia] = useState("");
  const [hora, setHora] = useState("");
  const [visivel, setVisivel] = useState(true);

  const addTask = () => {
    if(newTask.trim() === "") return;
    const newToDo = {
      id: Date.now(),
      text: newTask,
      date: dataDia,
      time: hora
    };
    setToDos([...toDos, newToDo]);
    setNewTask("");
    setDataDia("");
    setHora("");
  };
  
  const removeTask = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return(
    <div>
      <h1>Minha ToDo List</h1>
      <div style={styles.container}>
        <input 
          type="date" 
          placeholder="Entre com uma data" 
          value={dataDia}
          onChange={(e) => setDataDia(e.target.value)}
          style={styles.inputdh}
        />
        <input 
          type="time" 
          placeholder="Entre com a hora!" 
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style={styles.inputdh}
        />
        <input 
          type="text" 
          placeholder="Digite uma nova tarefa!" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Adicionar
        </button>
        <button onClick={() => setVisivel(!visivel)} style={styles.button}>
          {visivel ? "Ocultar" : "Mostrar"}
        </button>
        <div>
          {visivel && <ToDoList toDos={toDos} removeTask={removeTask}/>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px', 
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'  
  },
  inputdh: {
    padding: '10px',
    width: '49%',
    marginRight: '5px',
    borderRadius: '10px',
    border: '1px solid #ccc'
  },
  input: {
    padding: '10px',
    width: '70%',
    marginRight: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginRight: '5px'
  }
};