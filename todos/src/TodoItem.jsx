import React from "react";

function TodoItem(props){
    const {todo} = props;

    return (
        <li>
            {todo.text}
        </li>
    );
}

export default TodoItem;