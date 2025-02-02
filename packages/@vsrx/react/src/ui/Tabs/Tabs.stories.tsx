import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabPanel } from './Tabs'; // Import Tabs component
import { withSidebar } from '../../stories/decorators/vscode';

const TabsExample = (props: any) => (
    <Tabs {...props}>
        <TabPanel title="Tab 1">Content 1</TabPanel>
        <TabPanel title="Tab 2">Content 2</TabPanel>
        <TabPanel title="Tab 3">Content 3</TabPanel>
    </Tabs>
);

const meta = {
    title: 'Surface/Tabs',
    component: TabsExample,
    decorators: [(Story, context) => withSidebar(Story, context)],
} satisfies Meta<typeof TabsExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        noPadding: true,
    },
};