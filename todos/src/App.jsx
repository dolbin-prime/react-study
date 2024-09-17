import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';

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

function TodoApp (){
    const [ todos, setTodos ] = useState(initialTodos);
    const [currentId, setCurrentId] = useState(initialTodos.length);

  return <div>
    <h1>Todo list</h1>
    <TodoAdder todos={todos} setTodos={setTodos} currentId={currentId} setCurrentId={setCurrentId}/>
    <TodoList todos={todos}/>
  </div>;
};

export default TodoApp;