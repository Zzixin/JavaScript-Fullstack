import { useDispatch } from 'react-redux';
import { modTodo, delTodo } from '../actions/index.js';

const TodoItem = ({ todo, id }) => {
  const dispatch = useDispatch();
  const { content, isCompleted } = todo;

  return (
    <li data-testid={id}>
      <span
        onDoubleClick={() => modTodo(dispatch)(id)}
        className={!isCompleted ? 'todo-regular' : 'todo-completed'}
      >
        {content}
      </span>
      <button onClick={() => delTodo(dispatch)(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
