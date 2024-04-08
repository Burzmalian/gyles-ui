import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), dts({ include: ['src'], exclude: ['src/**/*.stories.tsx'] })],
  copyPublicDir: false,
  lib: {
    entry: resolve(__dirname, 'src/index.ts'),
    formats: ['es'],
  },
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwindcss',
        '@heroicons/react/20/solid/esm',
        '@headlessui/react',
        'clsx',
      ],
      input: Object.fromEntries(
        globSync('src/**/*.{ts,tsx}', { ignore: 'src/**/*.stories.tsx' }).map(file => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
