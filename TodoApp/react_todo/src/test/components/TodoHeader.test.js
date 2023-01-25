import { render, screen } from '@testing-library/react';
import TodoHeader from '../../components/TodoHeader';

// or you can write "test" like which in App.test.js

describe('Todo Header is rendered correctly', () => {
  it('header is in the document withregular props', () => {
    const todoHeaderContent = 'This is a test';
    const todoHeaderTestId = 'todo-header-test1';
    render(<TodoHeader todoHeaderContent={todoHeaderContent} />);
    // two methods
    expect(screen.getByText(todoHeaderContent)).toBeInTheDocument(); // 找到相应的东西,在document中出现
    expect(screen.getByTestId(todoHeaderTestId)).toBeInTheDocument();
  });

  it('header is in the document with empty props', () => {
    render(<TodoHeader />);
    expect(screen.getByText('Todo List')).toBeInTheDocument(); // 找到相应的东西,在document中出现
  });
});
