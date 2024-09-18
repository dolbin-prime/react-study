import React, {useState} from "react";

/**
 * The component for adding a new todo item to the todo list.
 * @param {*} props Props for the component.
 * @returns The adder component.
 */
function TodoAdder(props){
    const {todos, setTodos, currentId, setCurrentId} = props;
    const [textInput, setTextInput] = useState('');
    
    /**
     * Add new item to the todo list.
     */
    function handleAdd(){
        if (textInput === '') return;

        const newTodo = {
            id: currentId,
            text: textInput
        };
        setTodos([...todos, newTodo]);
        setCurrentId(currentId+ 1);

        setTextInput('');
    }

    /**
     * Handle the input event to set the current text input.
     * @param {*} event 
     */
    function handleTextInput(event){
        setTextInput(event.target.value);
    }
    
    /**
     * Handle the key event to detect `Enter` key press in input for new name.
     */
    function handleKeyUp(event){
        if(event.key === 'Enter') handleAdd();
    }

    return (<div>
        <input type="text" placeholder="What needs to be done?" value={textInput} onInput={handleTextInput} onKeyUp={handleKeyUp}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>);
}

export default TodoAdder;