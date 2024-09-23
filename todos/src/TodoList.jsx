import React from 'react';
import TodoItem from './TodoItem';

/**
 * The component for the list of {@link TodoItem}
 * @param {*} props Props for the component.
 * @returns The todo list component.
 */
function TodoList(props) {
  const { todos, handleChange, handleDelete } = props;

  return (
    <ul style={{ listStyleType: 'none' }}>
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
