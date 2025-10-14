/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'yellow-rise': {
          '0%': { transform: 'translateY(100%)', borderRadius: '50%', opacity: '1' },
          '60%': { transform: 'translateY(-10%) scale(1.2)', borderRadius: '0%', opacity: '1' },
          '100%': { transform: 'translateY(0)', borderRadius: '0%', opacity: '1' },
        },
        'wave-ring': {
          '0%': { transform: 'scale(0.3)', opacity: '0.6' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
      },
      animation: {
        'yellow-rise': 'yellow-rise 1.5s ease-in-out forwards',
        'wave-ring': 'wave-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
