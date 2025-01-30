import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../../ui/button';

const meta  = {
    title: 'UI/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Click me',
        variant: 'secondary',
    },
};

export const Link: Story = {
    args: {
        children: 'Click me',
        variant: 'link',
    },
};

export const Icon: Story = {
    args: {
        children: '🔍',
        variant: 'icon',
    },
};

export const Small: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
        size: 'large',
    },
};