import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';
import { withSidebar } from '../../stories/decorators/vscode';

const TestTable = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Header 1</TableCell>
                <TableCell>Header 2</TableCell>
                <TableCell>Header 3</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Data 1</TableCell>
                <TableCell>Data 2</TableCell>
                <TableCell>Data 3</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Data 4</TableCell>
                <TableCell>Data 5</TableCell>
                <TableCell>Data 6</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

const meta  = {
    title: 'Data/Table',
    component: TestTable,
    decorators: [withSidebar],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};