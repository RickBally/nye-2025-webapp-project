import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Optional, default is 5173
        open: true, // Opens browser on dev start
        proxy: {
        '/api': {
            target: 'http://localhost:5000', // Your backend API
            changeOrigin: true,
            secure: false,
            },
        },
        hmr: {overlay: false},
    }
});