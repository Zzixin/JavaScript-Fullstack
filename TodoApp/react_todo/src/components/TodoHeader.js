const TodoHeader = ({ todoHeaderContent = 'Todo List' }) => {
  return <h1 data-testid='todo-header-test1'>{todoHeaderContent}</h1>;
};

export default TodoHeader;
