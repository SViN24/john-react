import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@components': resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
})
