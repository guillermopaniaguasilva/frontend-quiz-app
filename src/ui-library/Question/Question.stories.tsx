import type { Meta, StoryObj } from '@storybook/react';
import Question from '.';

const meta = {
  title: 'UI Library/Question',
  component: Question,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Question>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subject: 'HTML',
    data: {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Trainer Marking Language',
        'Hyper Text Marketing Language',
        'Hyper Text Markup Language',
        'Hyper Text Markup Leveler',
      ],
      answer: 'Hyper Text Markup Language',
    },
  },
};
