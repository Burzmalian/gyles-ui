import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'gyles-ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwindcss',
        '@headlessui/react',
        'clsx',
        '@heroicons/react',
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        format: 'es',
        entryFileNames: '[name].js',
        dir: 'dist',
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
