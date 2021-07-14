module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{js,jsx,css}', './public/*.html'],
		options: {
			keyframes: true,
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	corePlugins: {
		float: false
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
