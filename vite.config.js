import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig(({mode}) => ({
  base: mode === 'github' ? '/hgms/' : '/',
  plugins: [react(), tailwindcss(), {
    name: 'local-demo-network-policy', apply: 'build',
    transformIndexHtml() { return [{tag:'meta',attrs:{'http-equiv':'Content-Security-Policy',content:"connect-src 'none'; form-action 'self'; object-src 'none'"},injectTo:'head'}]; }
  }],
  css: { lightningcss: { errorRecovery: true } },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: { sourcemap: mode !== 'github', outDir: mode === 'github' ? 'docs' : 'dist' },
}));
