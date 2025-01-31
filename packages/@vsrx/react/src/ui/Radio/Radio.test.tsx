import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio, RadioGroup } from './Radio';

describe('Radio Component', () => {
    test('renders Radio component with label', () => {
        render(<Radio label="Test Label" value="test" />);
        expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    test('calls onChange when clicked', () => {
        const handleChange = jest.fn();
        render(<Radio label="Test Label" value="test" onChange={handleChange} />);
        fireEvent.click(screen.getByLabelText('Test Label'));
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('renders RadioGroup with children', () => {
        render(
            <RadioGroup selectedValue="1" onChange={() => {}}>
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
            </RadioGroup>
        );
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    test('RadioGroup handles change correctly', () => {
        const handleChange = jest.fn();
        render(
            <RadioGroup selectedValue="1" onChange={handleChange}>
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
            </RadioGroup>
        );
        fireEvent.click(screen.getByLabelText('Option 2'));
        expect(handleChange).toHaveBeenCalledWith('2');
    });

    test('RadioGroup sets the correct radio as checked', () => {
        render(
            <RadioGroup selectedValue="2" onChange={() => {}}>
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
            </RadioGroup>
        );
        expect(screen.getByLabelText('Option 2')).toBeChecked();
    });

    test('renders Radio component with correct aria-labelledby', () => {
        render(<Radio label="Test Label" value="test" />);
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    test('renders RadioGroup with correct aria-labelledby', () => {
        render(
            <RadioGroup selectedValue="1" onChange={() => {}}>
                <Radio label="Option 1" value="1" />
                <Radio label="Option 2" value="2" />
            </RadioGroup>
        );
        expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
        expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    });
});