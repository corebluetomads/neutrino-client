/* eslint-disable no-undef */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				shark: "#212529",
				white: "#FFFFFF",
				dodgerBlue: "#5569FF",
				outerSpace: "#323A41",
				manatee: "#8A9198",
				cinder: "#23282C",
				mirage: "#343A40",
			},

			fontFamily: {
				roboto: ["Roboto"],
			},
		},
	},
	plugins: []
}
