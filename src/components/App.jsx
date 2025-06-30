import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [inputItem, setInputItem] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setInputItem((prevItem) => {
      return [...prevItem, item];
    });

    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputItem.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
