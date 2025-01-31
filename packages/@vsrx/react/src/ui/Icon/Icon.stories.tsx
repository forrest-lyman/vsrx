import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon,  IconProps } from './Icon';
import { withSidebar } from '../../stories/decorators/vscode';

const meta: Meta<IconProps> = {
  title: 'UI/Icon',
  component: Icon,
  decorators: [withSidebar],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddIcon: Story = {
  args: {
    iconName: 'add',
    size: 24,
  },
};

export const EditIcon: Story = {
  args: {
    iconName: 'edit',
    size: 24,
  },
};

export const DeleteIcon: Story = {
  args: {
    iconName: 'trash',
    size: 24,
  },
};

export const LargeIcon: Story = {
  args: {
    iconName: 'add',
    size: 48,
  },
};

export const SmallIcon: Story = {
  args: {
    iconName: 'add',
    size: 12,
  },
};