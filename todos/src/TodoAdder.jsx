import React, {useState} from "react";

function TodoAdder(props){
    const {todos, setTodos, currentId, setCurrentId} = props;
    const [textInput, setTextInput] = useState('');
    
    function handleAdd(){
        const newTodo = {
            id: currentId,
            text: textInput
        };
        setTodos([...todos, newTodo]);
        setCurrentId(currentId+ 1);

        setTextInput('');
    }

    function handleTextInput(event){
        setTextInput(event.target.value);
    }
    
    function handleKeyUp(event){
        if(event.key === 'Enter') handleAdd();
    }

    return (<div>
        <input type="text" placeholder="What needs to be done?" value={textInput} onInput={handleTextInput} onKeyUp={handleKeyUp}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>);
}

export default TodoAdder;