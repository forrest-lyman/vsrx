import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Typography } from './Typography';

describe('Typography', () => {
    it('renders correctly with default props', () => {
        const { container } = render(<Typography>Default Text</Typography>);
        expect(container.firstChild).toHaveClass('typography-body typography-normal typography-normal');
    });

    it('renders correctly with variant h1', () => {
        const { container } = render(<Typography variant="h1">Heading 1</Typography>);
        expect(container.firstChild).toHaveClass('typography-h1 typography-normal typography-normal');
    });

    it('renders correctly with bold style', () => {
        const { container } = render(<Typography style="bold">Bold Text</Typography>);
        expect(container.firstChild).toHaveClass('typography-body typography-bold typography-normal');
    });

    it('renders correctly with multiple styles', () => {
        const { container } = render(<Typography style={['italic', 'bold']}>Italic and Bold Text</Typography>);
        expect(container.firstChild).toHaveClass('typography-body typography-italic typography-bold typography-normal');
    });

    it('renders correctly with color danger', () => {
        const { container } = render(<Typography color="danger">Danger Text</Typography>);
        expect(container.firstChild).toHaveClass('typography-body typography-normal typography-danger');
    });

    it('renders correctly with variant, style, and color', () => {
        const { container } = render(<Typography variant="h2" style="italic" color="success">Styled Text</Typography>);
        expect(container.firstChild).toHaveClass('typography-h2 typography-italic typography-success');
    });
});