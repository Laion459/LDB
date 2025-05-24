/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orange': {
          50: '#F2F4F7',  // Cor bem clara (opcional)
          100: '#E4E7EB', // Cor clara (opcional)
          200: '#2C3149',      // Sua cor original
          300: '#A3A8B8',  // Cor um pouco mais escura (opcional)
          400: '#71778C', // Cor mais escura (opcional)
        },
      },
    },
  },
  plugins: [],
}