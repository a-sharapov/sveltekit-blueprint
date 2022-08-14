import { sveltekit } from '@sveltejs/kit/vite';
import svelteSVG from 'vite-plugin-svelte-svg';
import { VitePWA } from 'vite-plugin-pwa';
import { pwaConfiguration } from './pwa-config.js';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		watch: {
			usePolling: true
		}
	},
	plugins: [
		sveltekit(),
		VitePWA(pwaConfiguration),
		svelteSVG({
			svgoConfig: {},
			requireSuffix: false
		})
	],
	test: {
		globals: true,
		environment: 'jsdom'
	}
};

export default config;
