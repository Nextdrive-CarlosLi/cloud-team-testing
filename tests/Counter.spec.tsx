import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../src/Counter';

describe('Counter component', () => {
  it('should start from zero', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const countElement = getByText(/Count:/i);
    expect(countElement.textContent).toBe('Count: 0');
  });

  it('should increment when "Increment" button is clicked', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const incrementButton = getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const countElement = getByText(/Count:/i);
    expect(countElement.textContent).toBe('Count: 1');
  });

  it('should decrement when "Decrement" button is clicked', () => {
    const { getByText } = render(<Counter initialValue={1} />);
    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count:/i);
    expect(countElement.textContent).toBe('Count: 0');
  });

  it('should not go below zero', () => {
    const { getByText } = render(<Counter initialValue={0} />);
    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count:/i);
    expect(countElement.textContent).toBe('Count: 0');
  });
});
