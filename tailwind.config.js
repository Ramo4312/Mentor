/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			zIndex: {
				1: 1,
				'-1': '-1',
				2: 2,
				'-2': '-2',
			},
			colors: {
				'light-gray': 'rgb(72,81,116,0.7)',
				paragraph: '#2D334A',
				accent: '#FFD803',
				secondary: '#E3F6F5',
				tertiary: '#BAE8E8',
				'little-text': '#485174',
				title: '#272343',
				active: '#C9FFFF',
			},
		},
	},
	plugins: [],
}
