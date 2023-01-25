import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
   // state: error state and todos state
   const todos = useSelector((state) => state.todos);
   console.log(todos); // contain both todos and error message
   return (
      <ul>
         {todos.map((todo, index) => {
            return (
               <TodoItem
                  todo={todo}
                  index={index}
                  key={`${todo.content}-${index}`}
               />
            );
         })}
      </ul>
   );
};

export default TodoList;
