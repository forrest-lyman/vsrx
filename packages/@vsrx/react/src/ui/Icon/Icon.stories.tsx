import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon,  IconProps } from './Icon';
import { withSidebar } from '../../stories/decorators/vscode';

const meta: Meta<IconProps> = {
  title: 'Core/Icon',
  component: Icon,
  decorators: [withSidebar],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddIcon: Story = {
  args: {
    name: 'add',
    size: 24,
  },
};

export const EditIcon: Story = {
  args: {
    name: 'edit',
    size: 24,
  },
};

export const DeleteIcon: Story = {
  args: {
    name: 'trash',
    size: 24,
  },
};

export const LargeIcon: Story = {
  args: {
    name: 'add',
    size: 48,
  },
};

export const SmallIcon: Story = {
  args: {
    name: 'add',
    size: 12,
  },
};