import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'UI Library/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Submit Answer',
  },
};
