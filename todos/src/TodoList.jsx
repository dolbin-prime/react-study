import React, {useState} from "react";

const initialTodos =[
    {
        id : 0,
        text: 'Turn on the computer'
    },
    {
        id : 1,
        text: 'Open VS code'
    },
    {
        id : 2,
        text: 'Build a React app'
    }
];

function TodoList(){
    const [ todos ] = useState(initialTodos);

    return (
        <ul>
            {todos.map((t) => <li key={t.id}>{t.text}</li>)}
        </ul>
    );
}

export default TodoList;