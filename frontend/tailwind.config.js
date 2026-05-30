/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#1D9E75',
        accent2: '#0F6E56',
        accentLight: '#E1F5EE',
        bg: '#F4F6F5',
        surface: '#FFFFFF',
        surface2: '#F0F2F1',
        border: '#E2E6E4',
        border2: '#C8D0CC',
        text: '#1A1F1C',
        text2: '#5A6762',
        text3: '#8FA099',
        danger: '#E24B4A',
        amber: '#BA7517',
        blue: '#185FA5',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,.07),0 1px 2px rgba(0,0,0,.04)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

