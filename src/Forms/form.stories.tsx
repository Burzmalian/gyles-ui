import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    type: 'text',
    'aria-label': 'yo',
  },
} satisfies Story;

// TODO: more stories
// cleanup button types/classes
