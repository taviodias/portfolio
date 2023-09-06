/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans'],
				sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
			  },
			  backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			  },
		},
	},
	plugins: [],
}
