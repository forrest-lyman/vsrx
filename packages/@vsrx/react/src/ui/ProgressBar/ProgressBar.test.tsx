import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';
import '@testing-library/jest-dom';

describe('ProgressBar', () => {
    test('renders with default props', () => {
        const { container } = render(<ProgressBar />);
        const progressBar = container.querySelector('div');
        expect(progressBar).toBeInTheDocument();
    });

    test('renders with a specific value', () => {
        const { getByRole } = render(<ProgressBar value={50} />);
        const progressBarValue = getByRole('progressbar');
        expect(progressBarValue).toHaveStyle('width: 50%');
    });

    test('renders with indeterminate state', () => {
        const { container } = render(<ProgressBar indeterminate />);
        const indeterminateBar = container.querySelector('div');
        expect(indeterminateBar).toHaveStyle('animation: 2s infinite');
    });

    test('renders with a message', () => {
        const { getByText } = render(<ProgressBar message="Loading..." />);
        const message = getByText('Loading...');
        expect(message).toBeInTheDocument();
    });

    test('renders with a message and specific value', () => {
        const { getByText, getByRole } = render(<ProgressBar value={75} message="Almost there..." />);
        const message = getByText('Almost there...');
        const progressBarValue = getByRole('progressbar');
        expect(message).toBeInTheDocument();
        expect(progressBarValue).toHaveStyle('width: 75%');
    });
});