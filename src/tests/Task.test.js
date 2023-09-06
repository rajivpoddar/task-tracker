import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from '../components/Task';

describe('Task', () => {
  let task, onDelete, onToggle;

  beforeEach(() => {
    task = { id: 1, text: 'Test Task', day: 'Feb 5th at 2:30pm', reminder: false };
    onDelete = jest.fn();
    onToggle = jest.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Task task={task} onDelete={onDelete} onToggle={onToggle} />);
    expect(getByText('Test Task')).toBeInTheDocument();
    expect(getByText('Feb 5th at 2:30pm')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const { getByText } = render(<Task task={task} onDelete={onDelete} onToggle={onToggle} />);
    fireEvent.click(getByText('X'));
    expect(onDelete).toHaveBeenCalledWith(task.id);
  });

  it('calls onToggle when task is double clicked', () => {
    const { getByText } = render(<Task task={task} onDelete={onDelete} onToggle={onToggle} />);
    fireEvent.doubleClick(getByText('Test Task'));
    expect(onToggle).toHaveBeenCalledWith(task.id);
  });
});