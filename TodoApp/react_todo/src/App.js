import "./App.css";
import { useState } from "react";
import TodoHeader from "./Components/TodoHeader";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoHeader todoHeaderContent={"TO-DO List"} />
      <TodoInput setTodos={setTodos} />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
