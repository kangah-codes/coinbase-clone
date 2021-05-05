module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				coinbase: {
					DEFAULT: "#2068FF",
					green: "#05B169",
				},
			},
		},
		fontFamily: {
			display: ["Graphik", "system-ui"],
			sans: [
				"Graphik",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: [
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif",
			],
			mono: [
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace",
			],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
