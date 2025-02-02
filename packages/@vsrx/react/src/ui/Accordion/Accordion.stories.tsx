import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion, ExpansionPanel } from './Accordion';
import { withSidebar } from '../../stories/decorators/vscode';

const AccordionExample = (props: any) => (
    <Accordion {...props}>
        <ExpansionPanel title="Title 1">Content 1</ExpansionPanel>
        <ExpansionPanel title="Title 2">Content 2</ExpansionPanel>
        <ExpansionPanel title="Title 3">Content 3</ExpansionPanel>
    </Accordion>
);

const meta  = {
    title: 'Surface/Accordion',
    component: AccordionExample,
    decorators: [(Story, context) => withSidebar(Story, context)],
} satisfies Meta<typeof AccordionExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
        noPadding: true,
    },
};

export const Multi: Story = {
    args: {
        multi: true,
        noPadding: true,
    },
};