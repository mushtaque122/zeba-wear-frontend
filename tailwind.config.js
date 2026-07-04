/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2', beige: '#F0E8DC', sand: '#E8D9C4',
        mink: '#C4A882', mocha: '#8B6B4A', espresso: '#4A3228',
        obsidian: '#1A1410', rose: '#D4A09A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      animation: { marquee: 'marquee 60s linear infinite' },
      keyframes: { marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } } },
    },
  },
  plugins: [],
};
