/**
 * @type {import('tailwindcss').Config}
 */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				newsreader: "Newsreader Variable, system-ui, sans-serif",
			},
		},
	},
	darkMode: "class",
	plugins: [
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
		},
	],
}
