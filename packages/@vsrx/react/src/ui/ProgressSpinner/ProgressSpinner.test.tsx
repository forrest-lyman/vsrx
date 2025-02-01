import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressSpinner from './ProgressSpinner';

describe('ProgressSpinner', () => {
    it('renders without crashing', () => {
        const { container } = render(<ProgressSpinner />);
        expect(container).toBeInTheDocument();
    });

    it('displays the correct message', () => {
        const message = 'Loading...';
        const { getByText } = render(<ProgressSpinner message={message} />);
        expect(getByText(message)).toBeInTheDocument();
    });

    it('renders with the correct size', () => {
        const { container } = render(<ProgressSpinner size="large" />);
        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('width', '96');
        expect(svg).toHaveAttribute('height', '96');
    });

    it('renders with the correct value', () => {
        const { container } = render(<ProgressSpinner value={50} />);
        const circle = container.querySelector('circle:nth-child(2)');
        expect(circle).toHaveAttribute('stroke-dashoffset', '50');
    });

    it('renders in indeterminate mode', () => {
        const { container } = render(<ProgressSpinner indeterminate />);
        const circle = container.querySelector('circle:nth-child(2)');
        expect(circle).toHaveStyle('animation: 2s linear infinite');
    });
});