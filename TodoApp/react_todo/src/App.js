import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ErrorModal from './components/ErrorModal';
import { initTodo } from './actions/index';
import './App.css';

//data structure of todo => [{todoContent: "dafdafa", isCompleted: false}]

//user input todo content => update todos  => pass todos to todoList component for rendering

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initTodo(dispatch)();
  }, [dispatch]);

  return (
    <>
      <TodoHeader todoHeaderContent={'Todo App'} />
      <TodoInput />
      <hr />
      <TodoList />
      <ErrorModal />
    </>
  );
}

export default App;
