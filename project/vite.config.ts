import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/socket.io": {
        target: "https://skillswap-znrx.onrender.com",
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
