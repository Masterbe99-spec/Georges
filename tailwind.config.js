export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        champagne: '#F3E5AB',
        gold: '#D4AF37',
        'deep-gold': '#9B7D3A',
        blush: '#F5E6E0',
        cream: '#FEF9F3',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        elegant: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      }
    }
  },
  plugins: []
}
