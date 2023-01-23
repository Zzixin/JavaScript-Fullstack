import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
   const todos = useSelector((state) => state);
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
