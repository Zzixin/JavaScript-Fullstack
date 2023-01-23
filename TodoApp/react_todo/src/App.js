import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

//data structure of todo => [{todoContent: "dafdafa", isCompleted: false}]

//user input todo content => update todos  => pass todos to todoList component for rendering

function App() {
   return (
      <div>
         <TodoHeader todoHeaderContent={"Todo App"} />
         <TodoInput />
         <hr />
         <TodoList />
      </div>
   );
}

export default App;
