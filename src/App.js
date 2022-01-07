import React, { useState} from 'react';





function App() {

  //Set up To-Do list
  const [toDoList, setToDoList] = useState([
    {text: "Work on my resume"},
    {text: "Apply for jobs"},
    {text: "Clean the house"}
  ]);

  //Set up Input value
  const [value, setValue] = useState('');

  //Add To-Do



  //Delete To-Do

  //Handle the submit of the form



  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="container">
        {
          toDoList.map((todo, index) => (
            <div key={index}>
              <span>{todo.text}</span>
              <button>Delete</button>
            </div>
          ))
        }
        <div className="formInput">  
          <form placeholder="Type To-Do Here" value={value} onChange={keyboardStroke => setValue(keyboardStroke.target.value)}>
            <input></input>
          </form>
          <button>Add To-Do</button>
        </div>  
      </div>
    </div>
  );
}

export default App;
