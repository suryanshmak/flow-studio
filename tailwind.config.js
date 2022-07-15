module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sm: 'repeat(auto-fit, minmax(200px, 1fr))',
        default: 'repeat(auto-fit, minmax(120px, 1fr))',
      },
      gridTemplateRows: {
        sm: 'repeat(auto-fit, minmax(200px, 1fr))',
        default: 'repeat(auto-fit, minmax(120px, 1fr))',
      },
    },
  },
  plugins: [],
}
