import React, { useState} from 'react';





function App() {

  //Set up To-Do list
  const [toDoList, setToDoList] = useState([]);

  //Set up Input value
  const [value, setValue] = useState('');

  //Handle the submit of the form
  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addNewToDo(value);
    setValue('');
  };

  //Add To-Do
  const addNewToDo = (text) => {
    const updatedToDoList = [...toDoList, {text}];
    setToDoList(updatedToDoList);
  };


  //Delete To-Do
  const handleDelete = (todo) => {
    const filteredToDoList = toDoList.filter(currentToDoListValue => (currentToDoListValue !== todo));
    setToDoList(filteredToDoList);
  };


  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="container">
        {
          toDoList.map((todo, index) => (
            <div key={index}>
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </div>
          ))
        }
        <div className="formInput">  
          <form onSubmit={handleSubmit}>
            <input placeholder="Type To-Do Here" value={value} onChange={keyboardStroke => setValue(keyboardStroke.target.value)}></input>
            <button type="submit">Add To-Do</button>
          </form>
        </div>  
      </div>
    </div>
  );
}

export default App;
