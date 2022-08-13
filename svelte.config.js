// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),
		appDir: 'internal',
		prerender: { default: true },
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
