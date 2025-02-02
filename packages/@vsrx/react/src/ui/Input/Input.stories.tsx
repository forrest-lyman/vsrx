import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { withSidebar } from '../../stories/decorators/vscode';



const meta  = {
    title: 'Form/Input',
    component: Input,
    decorators: [withSidebar],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type something',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Type something',
        disabled: true,
    },
};

export const Textarea: Story = {
    args: {
        placeholder: 'Type something',
        rows: 4,
    },
};

export const Autogrow: Story = {
    args: {
        placeholder: 'Type something',
        autogrow: true,
    },
};