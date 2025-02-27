import { Input_container } from "./Componnents/Input_container";
import { Task_container } from "./Componnents/Task_container";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function writetodo(e) {
    setinputValue(e.target.value);
  }
  function addtodo() {
    if (inputValue != "") {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setinputValue("");
    }
  }
  function deltodo(TodoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosindex) => {
        return prevTodosindex != TodoIndex;
      })
    );
  }
  return (
    <main>
      <h1>To Do List</h1>
      <Input_container
        inputValue={inputValue}
        writetodo={writetodo}
        addtodo={addtodo}
      />
      <Task_container todos={todos} deltodo={deltodo} />
    </main>
  );
}

export default App;
