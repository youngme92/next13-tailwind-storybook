import type { Meta, StoryObj } from '@storybook/react';
import { Button3 } from '../ui/Button3';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button3> = {
  title: 'Example/Button3',
  component: Button3,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof Button3>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  // args: {
  //   primary: true,
  //   label: 'Button',
  // },
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
