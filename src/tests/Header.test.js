import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Header onAdd={onAdd} showAdd={false} />);
    expect(getByText('Task Tracker')).toBeInTheDocument();
  });

  it('calls onAdd when add button is clicked', () => {
    const { getByText } = render(<Header onAdd={onAdd} showAdd={false} />);
    fireEvent.click(getByText('Add'));
    expect(onAdd).toHaveBeenCalled();
  });
});