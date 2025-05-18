/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      colors: {
        'lanca-gold': '#D4AF37',
        'lanca-black': '#111111',
        'lanca-white': '#FFFFFF',
        'lanca-gray': '#F5F5F5',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F2DC9C 50%, #D4AF37 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

