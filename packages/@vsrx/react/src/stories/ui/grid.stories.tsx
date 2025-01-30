import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Grid, GridProps } from '../../ui/grid';
import { withSidebar } from '../decorators/vscode';
import styled from 'styled-components';

const GridLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    background-color: #333333;
    color: white;
    border-radius: 4px;
`;

const TestGrid = () => {
    return (
        <Grid container spacing={8}>
            <Grid size={12}>
            <GridLabel>Size: 12</GridLabel>
            </Grid>
            <Grid size={6}>
            <GridLabel>Size: 6</GridLabel>
            </Grid>
            <Grid size={6}>
            <GridLabel>Size: 6</GridLabel>
            </Grid>
            <Grid size={3}>
            <GridLabel>Size: 3</GridLabel>
            </Grid>
            <Grid size={6}>
            <GridLabel>Size: 6</GridLabel>
            </Grid>
            <Grid size={3}>
            <GridLabel>Size: 3</GridLabel>
            </Grid>
        </Grid>
    )
}

const meta: Meta<GridProps> = {
  title: 'UI/Grid',
  component: TestGrid,
  decorators: [withSidebar],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
  },
};
