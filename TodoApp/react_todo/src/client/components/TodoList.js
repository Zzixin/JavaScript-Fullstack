import { useSelector } from 'react-redux';
import TodoItem from './TodoItem.js';

const TodoList = () => {
  // state: error state and todos state
  const todos = useSelector((state) => state.todos);
  console.log(todos); // contain both todos and error message
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} id={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
