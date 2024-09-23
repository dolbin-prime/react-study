/**
 * The reducer function for the todo list.
 * @param {*} todos The current state of todos.
 * @param {*} action The action performed by a user to set the new state.
 * @returns The next state of todos.
 */
export default function todoReducer(todos, action) {
  switch (action.type) {
    case 'Add':
      return [...todos, action.newTodo];
    case 'Change':
      return todos.map((todo) => {
        if (todo.id === action.changedTodo.id) {
          return action.changedTodo;
        }

        return todo;
      });
    case 'Delete':
      return todos.filter((todo) => todo.id !== action.deletedTodo.id);
    default:
      return [...todos];
  }
}
