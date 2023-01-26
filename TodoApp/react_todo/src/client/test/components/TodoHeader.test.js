import { render, screen } from '@testing-library/react';
import TodoHeader from '../../components/TodoHeader';
// or you can write "test" like which in App.test.js

describe('Todo Header is rendered correctly', () => {
  it('header is in the document with regular props', () => {
    const todoHeaderContent = 'This is a test';
    const todoHeaderTestId = 'todo-header-test-id';
    render(<TodoHeader todoHeaderContent={todoHeaderContent} />);
    expect(screen.getByText(todoHeaderContent)).toBeInTheDocument();
    expect(screen.getByTestId(todoHeaderTestId)).toBeInTheDocument();
  });

  it('header is in the document with empty props', () => {
    render(<TodoHeader />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });
});
