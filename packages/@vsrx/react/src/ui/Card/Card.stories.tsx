import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSidebar } from '../../stories/decorators/vscode';

import { Card, CardProps } from './Card';

const meta  = {
    title: 'UI/Card',
    component: Card,
    decorators: [withSidebar],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        header: 'Card header',
        body: 'Card body',
        footer: 'Card footer',
    },
};

export const WithActions: Story = {
    args: {
        header: 'Confirm',
        body: 'Are you sure you want to do this?',
        actions: [
            { label: 'Cancel', onClick: () => alert('Cancelled') },
            { label: 'Confirm', onClick: () => alert('Confirmed') },
        ]
    },
};