// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            'lil-e': path.resolve(__dirname, './src/lil-e'), // Adjust the path accordingly
        },
    },
});