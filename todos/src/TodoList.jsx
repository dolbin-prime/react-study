import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    const {todos, handleChange} = props;

    return (
        <ul style={{"list-style-type":"none"}}>
            {todos.map((t) => <TodoItem key={t.id} todo={t} handleChange={handleChange}/>)}
        </ul>
    );
}

export default TodoList;