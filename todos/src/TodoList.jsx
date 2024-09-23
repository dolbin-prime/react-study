import React from 'react';
import TodoItem from './TodoItem';

/**
 * The component for the list of {@link TodoItem}
 * @param {*} props Props for the component.
 * @returns The todo list component.
 */
function TodoList(props) {
  const { todos, handleChange } = props;

  return (
    <ul style={{ 'list-style-type': 'none' }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} handleChange={handleChange} />
      ))}
    </ul>
  );
}

export default TodoList;
