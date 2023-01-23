const TodoItem = ({ todo, index, setTodos }) => {
  const { todoContent, isCompleted } = todo;
  // do the delete job
  const delTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos.slice(0, index), ...prevTodos.slice(index + 1)];
    });
  };

  return (
    <li>
      <span>{todoContent}</span>
      <button onClick={delTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
