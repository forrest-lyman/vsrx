import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button is disabled', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
});
test('renders button with primary variant', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveStyle('background-color: rgb(0, 69, 120)');
    expect(button).toHaveStyle('color: white');
});

test('renders button with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveStyle('background-color: rgb(160, 160, 160)');
    expect(button).toHaveStyle('color: #333');
});

test('renders button with link variant', () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByText('Link');
    expect(button).toHaveStyle('background: none');
    expect(button).toHaveStyle('color: rgb(0, 69, 120)');
});

test('renders button with icon variant', () => {
    render(<Button variant="icon">Icon</Button>);
    const button = screen.getByText('Icon');
    expect(button).toHaveStyle('background: none');
    expect(button).toHaveStyle('color: #007acc');
});

test('renders button with outline variant', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText('Outline');
    expect(button).toHaveStyle('background: none');
    expect(button).toHaveStyle('border: 1px solid #007acc');
    expect(button).toHaveStyle('color: #007acc');
});

test('renders button with small size', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByText('Small');
    expect(button).toHaveStyle('padding: 4px 8px');
    expect(button).toHaveStyle('font-size: 12px');
});

test('renders button with medium size', () => {
    render(<Button size="medium">Medium</Button>);
    const button = screen.getByText('Medium');
    expect(button).toHaveStyle('padding: 8px 16px');
    expect(button).toHaveStyle('font-size: 14px');
});

test('renders button with large size', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByText('Large');
    expect(button).toHaveStyle('padding: 12px 24px');
    expect(button).toHaveStyle('font-size: 16px');
});