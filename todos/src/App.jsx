import React, { useState, useCallback, useReducer } from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';
import Todo from './Todo';
import todoReducer from './todoReducer';

/**
 * Initially added {@link Todo}s to the app.
 */
const initialTodos = [
  new Todo(0, 'Turn on the computer', false),
  new Todo(1, 'Open VS code', false),
  new Todo(2, 'Build a React app', false),
];

/**
 * The component for the entire app for a todo list.
 * @returns The todo app component.
 */
function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [currentId, setCurrentId] = useState(initialTodos.length);

  /**
   * Change an item of the {@link TodoList}.
   */
  const handleChange = useCallback((changedTodo) =>
    dispatch({
      type: 'Change',
      changedTodo,
    }),
  );

  // JSX props should not use functions
  // function handleChange(changedTodo) {
  //   dispatch({
  //     type: 'Change',
  //     changedTodo,
  //   });
  // }

  /**
   * Delete an item of the {@link TodoList}.
   */
  const handleDelete = useCallback((deletedTodo) =>
    dispatch({
      type: 'Delete',
      deletedTodo,
    }),
  );

  /**
   * Add an item to the {@link TodoList}.
   */
  const handleAdd = useCallback((newTodo) =>
    dispatch({ type: 'Add', newTodo }),
  );

  return (
    <div>
      <h1>Todo list</h1>
      <TodoAdder
        handleAdd={handleAdd}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <TodoList
        todos={todos}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <p>
        {todos.filter((todo) => todo.isDone).length} of {todos.length} todo(s)
        completed!
      </p>
    </div>
  );
}

export default TodoApp;
