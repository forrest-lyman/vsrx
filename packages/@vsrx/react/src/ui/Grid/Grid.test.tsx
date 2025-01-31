import {Grid} from './Grid';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Grid Component', () => {
    test('renders container with children', () => {
        render(
            <Grid container>
                <div data-testid="child">Child</div>
            </Grid>
        );
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    test('renders item with correct size and spacing', () => {
        render(
            <Grid container spacing={8}>
                <Grid size={6}>
                    <div data-testid="child">Child</div>
                </Grid>
            </Grid>
        );
        const item = screen.getByTestId('child').parentElement;
        expect(item).toHaveStyle('flex: 0 0 50%');
        expect(item).toHaveStyle('max-width: 50%');
        expect(item).toHaveStyle('padding: 4px');
    });

    test('renders container with spacing', () => {
        render(
            <Grid container spacing={16}>
                <div data-testid="child">Child</div>
            </Grid>
        );
        const container = screen.getByTestId('child').parentElement;
        expect(container).toHaveStyle('display: flex');
        expect(container).toHaveStyle('flex-wrap: wrap');
    });
});
