import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Task Tracker')).toBeInTheDocument();
  });

  it('adds a new task when the add task form is submitted', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    fireEvent.click(getByText('Add'));
    fireEvent.change(getByPlaceholderText('Add Task'), { target: { value: 'Test Task' } });
    fireEvent.click(getByText('Save Task'));
    expect(getByText('Test Task')).toBeInTheDocument();
  });

  it('deletes a task when the delete button is clicked', () => {
    const { getByText, getByPlaceholderText, getByTestId, queryByTestId } = render(<App />);
    fireEvent.click(getByText('Add'));
    fireEvent.change(getByPlaceholderText('Add Task'), { target: { value: 'Test Task' } });
    fireEvent.click(getByText('Save Task'));
    fireEvent.click(getByTestId('delete-button'));
    expect(queryByTestId('task')).not.toBeInTheDocument();
  });

  it('toggles the reminder when a task is double clicked', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
    fireEvent.click(getByText('Add'));
    fireEvent.change(getByPlaceholderText('Add Task'), { target: { value: 'Test Task' } });
    fireEvent.click(getByText('Save Task'));
    fireEvent.doubleClick(getByTestId('task'));
    expect(getByTestId('task')).toHaveClass('reminder');
  });
});