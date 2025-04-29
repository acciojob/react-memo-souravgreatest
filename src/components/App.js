import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState(["New Todo"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters.");
    }
  };

  return (
    <div className="app-container">
      <h2>React.useMemo</h2>

      <section className="todo-section">
        <h3>My Todos</h3>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <button className="btn" onClick={addTodo}>
          Add Todo
        </button>
      </section>

      <section className="counter-section">
        <p>
          Count: <strong>{count}</strong>
        </p>
        <button className="btn" onClick={increment}>
          +
        </button>
      </section>

      <UseMemo />

      <hr />

      <h2>React.memo</h2>
      <div className="custom-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter custom task (min 6 chars)"
        />
        <button className="btn" onClick={handleAddCustomTodo}>
          Submit
        </button>
      </div>

      <ReactMemo todos={todos} />
    </div>
  );
}

export default App;