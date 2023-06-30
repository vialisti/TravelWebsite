/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,jsx,js,ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '30px',
			screens: {
				sm: '375px',
				md: '728px',
				lg: '1465px',
				xl: '1627px',
				'2xl': '1800px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['General Sans'],
			},
			colors: {
				primary: '#1F2933',
				secondary: '#2E8381',
				small: '#898989',
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(0deg, rgba(0, 76, 165, 0.2),rgba(0, 76, 165, 0.4)), url('/assets/Background.png')",
			},
		},
	},
	plugins: [],
};
