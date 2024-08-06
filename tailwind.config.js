/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"slide-up": {
					"0%": { transform: "translate(-50%, 100%)" },
					"100%": { transform: "translate(-50%, 0)" },
				},
			},
			animation: {
				"slide-up": "slide-up 1s ease-out",
			},
		},
	},
	plugins: [],
};
