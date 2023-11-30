/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xsm: '320px',
			smOne: '375px',
			smTwo: '576px',
			med: '768px',
			lrg: '992px',
			xlrg: '1200px',
			xxlrg: '1400px',
		},
		extend: {},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#E50000',
					secondary: '#FFFFFF',
					accent: '#f26a6a',
					neutral: '#E50000',
					success: '#22c55e',
					error: '#f43f5e',
				},
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#E50000',
					secondary: '#FFFFFF',
					accent: '#f26a6a',
					// neutral: '#f26a6a',
					success: '#22c55e',
					error: '#f43f5e',
				},
			},
			{
				coffee: {
					...require('daisyui/src/theming/themes')['[data-theme=coffee]'],
				},
			},
			'business',
			'night',
		],
	},
	plugins: [require('daisyui')],
};
