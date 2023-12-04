import type { Meta, StoryObj } from '@storybook/react';
import QuestionOption from '.';

const meta = {
  title: 'UI Library/QuestionOption',
  component: QuestionOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    isSelected: true,
  },
};

export const Correct: Story = {
  args: {
    isCorrect: true,
  },
};

export const Incorrect: Story = {
  args: {
    isWrong: true,
  },
};
