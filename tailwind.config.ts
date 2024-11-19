import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			body: ['Helvetica', 'Arial', 'sans-serif'],
			heading: ['Times New Roman', 'serif']
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;