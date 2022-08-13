import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		prerender: { default: true },
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
