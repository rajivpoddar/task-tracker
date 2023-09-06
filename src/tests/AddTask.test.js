import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTask from '../components/AddTask';

describe('AddTask', () => {
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(<AddTask onAdd={onAdd} />);
    expect(getByText('Save Task')).toBeInTheDocument();
  });

  it('calls onAdd when add button is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<AddTask onAdd={onAdd} />);
    fireEvent.change(getByPlaceholderText('Add Task'), { target: { value: 'Test Task' } });
    fireEvent.click(getByText('Save Task'));
    expect(onAdd).toHaveBeenCalled();
  });
});