/**
 * A todo that will be listed as an item of the todo list.
 * @param {*} id The id for a todo.
 * @param {*} text The displayed text of a todo.
 * @param {*} isDone Whether a todo is done.
 */
export default function Todo(id, text, isDone) {
  this.id = id;
  this.text = text;
  this.isDone = isDone;
}
