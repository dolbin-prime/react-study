import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';
import Todo from './Todo';

const initialTodos =[
    new Todo(0, 'Turn on the computer'),
    new Todo(1, 'Open VS code'),
    new Todo(2, 'Build a React app'),
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