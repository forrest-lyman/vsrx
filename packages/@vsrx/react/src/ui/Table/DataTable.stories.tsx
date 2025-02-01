import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';
import { withSidebar } from '../../stories/decorators/vscode';

const data = [
    {
        name: 'John Doe',
        age: 25,
        email: 'john@email.com',
    },
    {
        name: 'Jane Smith',
        age: 30,
        email: 'jane@email.com',
    },
    {
        name: 'Alice Johnson',
        age: 28,
        email: 'alice@email.com',
    },
    {
        name: 'Bob Brown',
        age: 35,
        email: 'bob@email.com',
    },
    {
        name: 'Charlie Davis',
        age: 22,
        email: 'charlie@email.com',
    }
]

const meta  = {
    title: 'UI/DataTable',
    component: Table,
    decorators: [withSidebar],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data
    },
};