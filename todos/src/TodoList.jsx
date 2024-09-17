import React from "react";


function TodoList(props){
    const {todos} = props;

    return (
        <ul>
            {todos.map((t) => <li key={t.id}>{t.text}</li>)}
        </ul>
    );
}

export default TodoList;