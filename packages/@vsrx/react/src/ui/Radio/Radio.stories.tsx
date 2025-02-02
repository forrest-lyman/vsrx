import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta = {
  title: 'Form/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    checked: false,
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 2',
    value: 'option2',
    checked: true,
    onChange: () => {},
  },
};

export const RadioGroupExample: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <RadioGroup selectedValue={selectedValue} onChange={setSelectedValue}>
        <Radio label="Option 1" value="option1" />
        <Radio label="Option 2" value="option2" />
        <Radio label="Option 3" value="option3" />
      </RadioGroup>
    );
  },
};