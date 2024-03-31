import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    color: 'dark',
    children: 'gyles',
  },
} satisfies Story;

// TODO: more stories
// cleanup button types/classes
