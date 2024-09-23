# To-dos app
This is my second react app.
## In this study, I will
1. get used to basic react syntax.
2. learn how to use reducer.
## Questions
- Are props passing down through components appropriate?
- Which is better:
  - `{id: 0, text: '', isDone: false}`
  - `function Todo(id, text, isDone)`
    - cannot use spread operator in `handleChange` of `TodoItem`.
- JSX props should not use functions
  - to prevent recreate the function on every render
  - solution: `useCallback`? (on line 34 of `App.jsx`)
- `useRef` and it's timing issue (on line 36 of `TodoItem.jsx`)
