import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
      // We are using a glob to create entry points for every component
      // https://rollupjs.org/configuration-options/#input
      input: Object.fromEntries(
        globSync('src/**/*.{ts,tsx}', { ignore: 'src/**/*.stories.tsx' }).map(file => [
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true, exclude: ['src/**/*.stories.tsx'] })],
  copyPublicDir: false,
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
