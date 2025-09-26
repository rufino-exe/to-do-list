import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList([toDos, removeTask]){
    return(
        <ul style={styles.list}>
            {toDos.map((toDo)=>(
                <ToDoItem key={toDo.id} elem={toDo} removeTask={removeTask}/>
            ))}
        </ul>
    )
}
const styles = {
    list: {
        listStyle: 'none',
        padding: '0px'
    }
}
