import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { withSidebar } from '../../stories/decorators/vscode';



const meta  = {
    title: 'UI/ProgressBar',
    component: ProgressBar,
    decorators: [withSidebar],
} satisfies Meta<typeof ProgressBar>;

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
        indeterminate: true,
    },
};