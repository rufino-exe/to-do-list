import React from "react";

export default function ToDoItem({ toDo, removeTask }) {
  return(
    <li style={styles.item}>
      {toDo.date} ----- {toDo.time} ----- {toDo.text}
      <button style={styles.button} onClick={() => removeTask(toDo.id)}>
        Deletar
      </button>
    </li>
  );
}

const styles = {
  item: {
    padding: '15px',
    border: '1px solid #ccc',
    background: '#f9f9f9',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',              
    marginBottom: '10px'
  },
  button: {
    background: '#f44336',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};