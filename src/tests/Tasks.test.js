import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tasks from '../components/Tasks';

describe('Tasks', () => {
  let tasks, onDelete, onToggle;

  beforeEach(() => {
    tasks = [
      { id: 1, text: 'Test Task 1', day: 'Feb 5th at 2:30pm', reminder: false },
      { id: 2, text: 'Test Task 2', day: 'Feb 6th at 3:30pm', reminder: true }
    ];
    onDelete = jest.fn();
    onToggle = jest.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />);
    expect(getByText('Test Task 1')).toBeInTheDocument();
    expect(getByText('Test Task 2')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const { getAllByText } = render(<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />);
    fireEvent.click(getAllByText('X')[0]);
    expect(onDelete).toHaveBeenCalled();
  });

  it('calls onToggle when task is double clicked', () => {
    const { getByText } = render(<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />);
    fireEvent.doubleClick(getByText('Test Task 1'));
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});