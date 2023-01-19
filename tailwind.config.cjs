/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0ea5e9',

					secondary: '#9ca3af',

					accent: '#22c55e',

					neutral: '#191D24',

					'base-100': '#e5e7eb',

					info: '#3ABFF8',

					success: '#4ade80',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	}
};
