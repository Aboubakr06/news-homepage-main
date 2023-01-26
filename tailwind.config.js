/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'soft-orange' : 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',

        'off-white': 'hsl(36, 100%, 99%)',
        'blue': 'hsl(233, 8%, 79%)',
        'dark-blue': 'hsl(236, 13%, 42%)',
        'bold-blue': 'hsl(240, 100%, 5%)',

          },

          fontFamily: {
            'Inter': ['Inter', 'sans-serif'],
          },
    },
  },
  plugins: [],
}
