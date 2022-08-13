import { sveltekit } from '@sveltejs/kit/vite';
import svelteSVG from 'vite-plugin-svelte-svg';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		svelteSVG({
			svgoConfig: {},
			requireSuffix: false
		})
	]
};

export default config;
