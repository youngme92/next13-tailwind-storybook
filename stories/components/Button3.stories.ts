import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button3 } from '#/ui/Button3';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button3> = {
  title: 'Component/Button/Button3',
  component: Button3,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
    kind: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button3>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    borderless: false,
    label: 'Button',
    kind: 'default',
  },
};
export const Error: Story = {
  args: {
    borderless: false,
    label: 'Button',
    kind: 'error',
  },
};

// export const Secondary: Story = {
//   // args: {
//   //   label: 'Button',
//   // },
// };

// export const Large: Story = {
//   // args: {
//   //   size: 'large',
//   //   label: 'Button',
//   // },
// };

// export const Small: Story = {
//   // args: {
//   //   size: 'small',
//   //   label: 'Button',
//   // },
// };
