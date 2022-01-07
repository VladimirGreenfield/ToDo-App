import React, { useState} from 'react';





function App() {

  const [toDoList, setToDoList] = useState([]);

  const [value, setValue] = useState('');



  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="toDoInput">
        <form>
          <input></input>
        </form>
        <button>Add To-Do</button>
      </div>
    </div>
  );
}

export default App;
