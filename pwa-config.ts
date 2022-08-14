import { VitePWAOptions } from 'vite-plugin-pwa';

export const pwaConfiguration: VitePWAOptions = {
	minify: true,
	registerType: 'autoUpdate',
	injectRegister: 'auto',
	includeAssets: ['*.ico', '*.png', 'css/*.*', 'i/*.*'],
	manifest: {
		name: 'PWA + Svektekit',
		short_name: 'PWA',
		description: 'example description',
		theme_color: '#fff',
		orientation: 'portrait',
		display_override: ['window-control-overlay', 'minimal-ui'],
		display: 'standalone',
		scope: '/',
		shortcuts: [
			// {
			//   name: 'Name with short description',
			//   short_name: 'Short',
			//   description: 'Link description',
			//   url: '/link-url',
			//   icons: [{ src: 'icon-192x192.png', sizes: '192x192' }],
			// },
		],
		screenshots: [
			// {
			//   src: '/screenshots/1.png',
			//   type: 'image/png',
			//   sizes: '540x720',
			// },
		],
		icons: [
			{
				src: 'icon-72x72.png',
				sizes: '72x72',
				type: 'image/png'
			},
			{
				src: 'icon-96x96.png',
				sizes: '96x96',
				type: 'image/png'
			},
			{
				src: 'icon-128x128.png',
				sizes: '128x128',
				type: 'image/png'
			},
			{
				src: 'icon-144x144.png',
				sizes: '144x144',
				type: 'image/png'
			},
			{
				src: 'icon-152x152.png',
				sizes: '152x152',
				type: 'image/png'
			},
			{
				src: 'icon-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: 'icon-384x384.png',
				sizes: '384x384',
				type: 'image/png'
			},
			{
				src: 'icon-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	},
	workbox: {
		sourcemap: false,
		globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg}'],
		maximumFileSizeToCacheInBytes: 3000000
	}
};
