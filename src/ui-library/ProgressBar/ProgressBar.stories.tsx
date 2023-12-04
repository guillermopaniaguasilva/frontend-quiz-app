import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ProgressBar from '.';

const ProgressBarStory: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <div style={{ backgroundColor: '#F4F6FA' }}>
        <ProgressBar percentage={percentage} />
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        <button
          className="btn btn-primary"
          onClick={() => setPercentage((prevPercentage) => prevPercentage + 10)}
        >
          Make Progress
        </button>
        <button className="btn btn-primary" onClick={() => setPercentage(0)}>
          Reset
        </button>
      </div>
    </>
  );
};

const meta = {
  title: 'UI Library/ProgressBar',
  component: ProgressBarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 0,
  },
};
