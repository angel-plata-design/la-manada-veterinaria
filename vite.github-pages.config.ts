import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/la-manada-veterinaria';
const normalizedBasePath =
  rawBasePath === '/' ? '' : rawBasePath.replace(/\/$/, '');
const githubPagesAssetPaths = [
  '/hero-perro-gato.webp',
  '/hero-perro-chico.webp',
  '/hero-perro.webp',
  '/hero-gato.webp',
  '/la-manada-isotipo.png',
  '/la-manada-logo-solo.png',
];

function githubPagesPublicAssetBase(): Plugin {
  return {
    name: 'github-pages-public-asset-base',
    enforce: 'pre',
    transform(code, id) {
      if (!id.replace(/\\/g, '/').endsWith('/app/page.tsx') || !normalizedBasePath) {
        return null;
      }

      let transformedCode = code;
      for (const assetPath of githubPagesAssetPaths) {
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
  root: 'github-pages',
  base: `${normalizedBasePath}/`,
  publicDir: '../public',
  define: {
    __ASSET_BASE_PATH__: JSON.stringify(normalizedBasePath),
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [githubPagesPublicAssetBase(), react()],
  build: {
    outDir: '../out',
    emptyOutDir: true,
  },
});
