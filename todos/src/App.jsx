import React, {useState, useCallback} from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';
import Todo from './Todo';

/**
 * Initially added {@link Todo}s to the app.
 */
const initialTodos =[
    new Todo(0, 'Turn on the computer', false),
    new Todo(1, 'Open VS code', false),
    new Todo(2, 'Build a React app', false),
];

/**
 * The component for the entire app for a todo list.
 * @returns The todo app component.
 */
function TodoApp (){
    const [ todos, setTodos ] = useState(initialTodos);
    const [currentId, setCurrentId] = useState(initialTodos.length);

    /**
     * Change an item of the {@link TodoList} to a new {@link Todo}
     */
    const handleChange = useCallback((newTodo)=>setTodos(
        todos.map((todo)=>{
            if (todo.id === newTodo.id) {
                return newTodo;
            }
            
            return todo;
        })
    ));

    // JSX props should not use functions
    // function handleChange(newTodo){
    //     todos.map((todo)=>{
    //         if (todo.id === newTodo.id) {
    //             return newTodo;
    //         }
            
    //         return todo;
    //     })
    // };

    

  return <div>
    <h1>Todo list</h1>
    <TodoAdder todos={todos} setTodos={setTodos} currentId={currentId} setCurrentId={setCurrentId}/>
    <TodoList todos={todos} handleChange={handleChange}/>
  </div>;
};

export default TodoApp;