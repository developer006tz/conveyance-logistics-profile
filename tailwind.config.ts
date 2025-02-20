import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00a6be',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#153c54',
          foreground: '#ffffff',
        },
        background: '#ffffff',
        foreground: '#153c54',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;