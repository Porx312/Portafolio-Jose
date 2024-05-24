import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProduction ? './' : '../',
  outDir: "../Portfolio", // Aquí defines la ruta personalizada
});
