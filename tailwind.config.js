/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				/* hind: ["Hind", "sans-serif"], */
				/* alkatra: ["Alkatra", "cursive"], */
				heebo: ["Heebo", "sans-serif"],
			},
		},
	},
	plugins: [],
};
