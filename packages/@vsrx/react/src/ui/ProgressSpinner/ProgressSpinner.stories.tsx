import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProgressSpinner } from './ProgressSpinner';
import { withSidebar } from '../../stories/decorators/vscode';



const meta  = {
    title: 'UI/ProgressSpinner',
    component: ProgressSpinner,
    decorators: [withSidebar],
} satisfies Meta<typeof ProgressSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        value: 50,
    },
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
    },
};

export const WithMessage: Story = {
    args: {
        message: 'Loading...',
        value: 50,
    },
};