import React from 'react';
import {Typography} from './Typography';
import { Meta, StoryObj } from '@storybook/react';
import { Icon,  IconProps } from '../Icon/Icon';
import { withSidebar } from '../../stories/decorators/vscode';

const meta: Meta<IconProps> = {
  title: 'Core/Typography',
  component: Icon,
  decorators: [withSidebar],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyVariants: Story = {
    render: () => (
        <div>
            <Typography variant="h1">Font Levels</Typography>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="body">Body</Typography>

            <Typography variant="h1">Font Styles</Typography>
            <Typography style="normal">Normal</Typography>
            <Typography style="italic">Italic</Typography>
            <Typography style="bold">Bold</Typography>

            <Typography variant="h1">Font Colors</Typography>
            <Typography color="normal">Normal</Typography>
            <Typography color="warning">Warning</Typography>
            <Typography color="danger">Danger</Typography>
            <Typography color="info">Info</Typography>
            <Typography color="success">Success</Typography>
            <Typography color="muted">Muted</Typography>
        </div>
    ),
};