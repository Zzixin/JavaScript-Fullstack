import { useState } from "react";
const TodoInput = ({ setTodos }) => {
  // local state => user input => create a todo object => add the todo object to array of todos
  const [userInput, setUserInput] = useState("");
  const addTodo = () => {
    // to see if the input is valid
    if (!userInput.trim()) {
      setUserInput("");
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { todoContent: userInput, isCompleted: false }];
    });
    setUserInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
