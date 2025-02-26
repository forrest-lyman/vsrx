import React from 'react';
import { Checkbox } from './Checkbox';
import { withSidebar } from '../../stories/decorators/vscode';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [withSidebar],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => <Checkbox {...args} />;

export const Checked: Story = {
  args: {
  checked: true,
  label: 'Checked Checkbox',
  onChange: () => {},
  }
};

export const Unchecked: Story = {
  args: {
  checked: false,
  label: 'Unchecked Checkbox',
  onChange: () => {},
}
};

export const Disabled: Story = {
  args: {
  checked: false,
  label: 'Disabled Checkbox',
  onChange: () => {},
  disabled: true,
}
};