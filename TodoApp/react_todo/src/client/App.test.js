import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

// 对App整个进行测试，一定要有redux环境
// redux mock store 可专门测试redux代码

describe('Tesing Todo App', () => {
  const initState = {
    todos: [],
    error: { error: false, message: '' },
  };

  const oneTodoState = {
    todos: [{ content: '111', isCompleted: false, id: '111' }],
    error: { error: false, message: '' },
  };

  const threeTodoState = {
    todos: [
      { content: '111', isCompleted: false, id: '111' },
      { content: '222', isCompleted: false, id: '222' },
      { content: '333', isCompleted: false, id: '333' },
    ],
    error: { error: false, message: '' },
  };

  const mockStore = configureStore();
  let store;
  it('App is rendered correctly with no todo list', () => {
    store = mockStore(initState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Todo App')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-btn')).toBeInTheDocument();
    expect(screen.getByTestId('todo-text-input')).toBeInTheDocument();
  });

  it('App is rendered correctly with one todo', () => {
    store = mockStore(oneTodoState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('111')).toBeInTheDocument();
  });
});

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // linkElement是否存在于document中
  expect(linkElement).toBeInTheDocument();
});
*/
