/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter var', 'ui-sans-serif', 'system-ui'],
			},
			animation: {
				'fade-in': 'fade-in 0.2s ease-in-out forwards',
				'ekg': 'ekg 10s linear forwards',
			},
			keyframes: {
				'fade-in': {
					'0%': { 'transform': 'translateX(-2rem)', 'opacity': 0 },
					'100%': { 'transform': 'translateX(0)', 'opacity': 1 },
				},
				'ekg': {
					'to': { 'stroke-dashoffset': 0, 'opacity': 0.2 },
				}
			},
		},
	},
	plugins: [],
}
