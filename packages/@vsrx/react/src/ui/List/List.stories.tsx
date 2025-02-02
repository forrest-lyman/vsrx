import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { List, Row } from './List';
import { withSidebar } from '../../stories/decorators/vscode';

const ListExample = (props: any) => (
    <List {...props}>
        <Row startSlot={<span>Start 1</span>} endSlot={<span>End 1`</span>}>
            Item 1
        </Row>
        <Row startSlot={<span>Start 2</span>} endSlot={<span>End 2</span>}>
            Item 2
        </Row>
        <Row startSlot={<span>Start 3</span>} endSlot={<span>End 3</span>}>
            Item 3
        </Row>
    </List>
);

const meta = {
    title: 'Surface/List',
    component: ListExample,
    decorators: [(Story, context) => withSidebar(Story, context)],
} satisfies Meta<typeof ListExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithItems: Story = {
    args: {
        items: [
            { startSlot: <span>Start A</span>, endSlot: <span>End A</span>, children: 'Item A' },
            { startSlot: <span>Start B</span>, endSlot: <span>End B</span>, children: 'Item B' },
            { startSlot: <span>Start C</span>, endSlot: <span>End C</span>, children: 'Item C' },
        ],
    },
};