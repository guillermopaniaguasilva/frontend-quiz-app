import type { Meta, StoryObj } from '@storybook/react';
import jsIcon from 'assets/icon-js.svg';
import Slot from '.';

const meta = {
  title: 'UI Library/Slot',
  component: Slot,
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
} satisfies Meta<typeof Slot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLetter: Story = {
  args: {
    backgroundColor: '#F4F6FA',
    text: <p className="mb-0">This is a slot</p>,
    label: 'test',
    iconText: 'A',
    value: 'test',
  },
};

export const WithIcon: Story = {
  args: {
    backgroundColor: '#EBF0FF',
    iconSource: jsIcon,
    label: 'JavaScriptIcon',
    text: <p className="mb-0">JavaScript</p>,
    value: 'test',
  },
};
