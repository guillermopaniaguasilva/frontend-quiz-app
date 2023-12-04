import type { Meta, StoryObj } from '@storybook/react';
import jsIcon from 'assets/icon-js.svg';
import Badge from '.';

const meta = {
  title: 'UI Library/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLetter: Story = {
  args: {
    backgroundColor: '#F4F6FA',
    label: 'A',
  },
};

export const WithIcon: Story = {
  args: {
    backgroundColor: '#EBF0FF',
    source: jsIcon,
    alt: 'JavaScriptIcon',
  },
};
