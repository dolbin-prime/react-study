import React from "react";
import Todo from "./Todo";

function TodoItem(props){
    const {todo, handleChange} = props;

    return (
        <li>
            <input 
                type="checkbox" 
                checked={todo.isDone} 
                onChange={(e)=>
                    handleChange(new Todo(
                        todo.id,
                        todo.text,
                        e.target.checked
                    ))
                }/>
            {todo.text}
        </li>
    );
}

export default TodoItem;