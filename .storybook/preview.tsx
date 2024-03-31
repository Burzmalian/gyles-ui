import React from 'react';
import { Preview, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import './globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
     themes: {
       light: '',
       dark: 'dark',
       },
      defaultTheme: 'light',
     }),
   ]
};

export default preview;
