import React, { useState, useRef } from 'react';
import Todo from './Todo';

/**
 * The component for each item of the todo list.
 * @param {*} props Props for the component.
 * @returns The list item component.
 */
function TodoItem(props) {
  const { todo, handleChange, handleDelete } = props;
  const [newName, setNewName] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  /**
   * Replace the name of the current item with the new name.
   */
  function handleNewName() {
    if (newName === '') return;

    setIsEditing(false);
    handleChange(new Todo(todo.id, newName, todo.isDone));
  }

  /**
   * Handle the button click event to edit the item.
   */
  function handleEdit() {
    setIsEditing(true);

    // 1. does it works the same with useRef?
    // document.getElementId('myElement').focus();

    // 2. inputRef.current is null?
    // inputRef.current.focus();
    setTimeout(() => inputRef.current.focus(), 10);
  }

  /**
   * Handle the key event to detect `Enter` key press in input for new name.
   */
  function handleKeyUp(event) {
    if (event.key === 'Enter') handleNewName();
  }

  /**
   * The content to display on the item.
   * It depends on whether the item name is being editted or not.
   */
  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          ref={inputRef}
          type="text"
          value={newName}
          onInput={(e) => setNewName(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button type="button" onClick={handleNewName}>
          OK
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        {todo.text}
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={() => handleDelete(todo)}>
          Delete
        </button>
      </>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) =>
          handleChange(new Todo(todo.id, todo.text, e.target.checked))
        }
      />
      {itemContent}
    </li>
  );
}

export default TodoItem;
