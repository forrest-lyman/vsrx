import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Checkbox} from './Checkbox';

describe('Checkbox Component', () => {
  it('renders correctly with given label', () => {
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" />);
    expect(getByLabelText(/test checkbox/i)).toBeInTheDocument();
  });

  it('is checked when the checked prop is true', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={true} onChange={handleChange} />);
    expect(getByLabelText(/test checkbox/i)).toBeChecked();
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" onChange={handleChange} />);
    
    fireEvent.click(getByLabelText(/test checkbox/i));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});