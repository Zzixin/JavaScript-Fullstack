import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo, idx) => {
        return (
          <TodoItem
            todo={todo}
            index={idx}
            setTodos={setTodos}
            key={`${todo.todoContent}-${idx}`}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
