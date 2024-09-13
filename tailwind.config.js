/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			gridTemplateColumns: {
				20: 'repeat(20, minmax(0, 1fr))',
			},
			boxShadow: {
				'custom-s': '-5px 5px 0 0 rgba(0, 0, 0, .9)',
				'custom-hover': '-2px 2px 0 0 rgba(0, 0, 0, .9)',
			},
		},
	},
	plugins: [],
}
