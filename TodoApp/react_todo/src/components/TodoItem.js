import { useDispatch } from "react-redux";
import { modTodo, delTodo } from "../actions/index";

const TodoItem = ({ todo, index }) => {
   const dispatch = useDispatch();
   const { content, isCompleted } = todo;

   return (
      <li>
         <span
            onDoubleClick={() => modTodo(dispatch)(index)}
            className={!isCompleted ? "todo-regular" : "todo-completed"}
         >
            {content}
         </span>
         <button onClick={() => delTodo(dispatch)(index)}>Delete</button>
      </li>
   );
};

export default TodoItem;
