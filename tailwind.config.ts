import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xl: { max: "1535px" },
			lg: { max: "1279px" },
			md: { max: "991px" },
			sm: { max: "767px" },
			xs: { max: "539px" },
		},
		extend: {
			backgroundImage: {},
			fontFamily: {
				impact: "Impact",
				rubik: "Rubik, sans-serif",
				numans: "Numans, sans-serif",
				norwester: "Norwester",
				roboto: "Roboto, sans-serif",
			},
		},
	},
	plugins: [],
};
export default config;
