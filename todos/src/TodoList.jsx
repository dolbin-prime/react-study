import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    const {todos} = props;

    return (
        <ul>
            {todos.map((t) => <TodoItem key={t.id} todo={t}/>)}
        </ul>
    );
}

export default TodoList;