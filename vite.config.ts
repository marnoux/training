/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		exclude: ['./e2e', './node_modules', './dist'],
		coverage: { provider: 'v8' },
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest-setup.ts'],
		globalSetup: ['./vitest-setup.ts'],
	},
});
