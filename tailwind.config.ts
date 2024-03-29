import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
} satisfies Config;
