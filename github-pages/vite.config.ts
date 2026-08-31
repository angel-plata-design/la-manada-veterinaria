import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import { fileURLToPath } from 'node:url';

const normalizedBasePath = '/la-manada-veterinaria';
const publicAssetPaths = [
  '/hero-perro-gato.webp',
  '/hero-perro-chico.webp',
  '/hero-perro.webp',
  '/hero-gato.webp',
  '/la-manada-isotipo.png',
  '/la-manada-logo-solo.png',
];
const fromHere = (path: string) => fileURLToPath(new URL(path, import.meta.url));

function githubPagesPublicAssetBase(): Plugin {
  return {
    name: 'github-pages-public-asset-base',
    enforce: 'pre',
    transform(code, id) {
      if (!id.replace(/\\/g, '/').endsWith('/app/page.tsx')) {
        return null;
      }

      let transformedCode = code;
      for (const assetPath of publicAssetPaths) {
        transformedCode = transformedCode.replaceAll(
          assetPath,
          `${normalizedBasePath}${assetPath}`,
        );
      }

      return transformedCode === code ? null : { code: transformedCode, map: null };
    },
  };
}

export default defineConfig({
  base: `${normalizedBasePath}/`,
  publicDir: '../public',
  resolve: {
    alias: [
      {
        find: /^lucide-react$/,
        replacement: fromHere('./node_modules/lucide-react/dist/esm/lucide-react.mjs'),
      },
      {
        find: /^react$/,
        replacement: fromHere('./node_modules/react/index.js'),
      },
      {
        find: /^react\/jsx-runtime$/,
        replacement: fromHere('./node_modules/react/jsx-runtime.js'),
      },
      {
        find: /^react-dom\/client$/,
        replacement: fromHere('./node_modules/react-dom/client.js'),
      },
    ],
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [githubPagesPublicAssetBase(), react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});
