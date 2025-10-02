import React from "react";

export default function ToDoItem(toDo,removeTask){
    return(
        <li style={styles.item}>
            {toDo.date} ----- {toDo.hora} ----- {toDo.text}
            <button style={styles.button}onClick={()=>removeTask(toDo.id)}> Deletar</button>
        </li>
    )
}

const styles = {
    item : {
        padding: '10px',
        border: '1px solid #ccc',
        background: 'red',
        borderRadius: '15px',
        display: 'Flex',
        justifycontent: 'space-between',
        alignItens:'center',
    },
    button: {
        background: 'red',
        color: 'white',
        border: 'none',
        padding: '5px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
}
