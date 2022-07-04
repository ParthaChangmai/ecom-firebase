/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				cart: '-5px 0px 10px 0px #aaaaaa;',
			},
		},
	},
	plugins: [],
};
