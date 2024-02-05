/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand']
      },
      colors: {
        'primary': '#1269db',
        'secondary': '#f16c00',
        'base-text': '#333333',
        'card': '#f5f5f5',
      },
      boxShadow: {
        button: '4px 4px 10px 0 rgb(0 0 0 / 10%), 4px 4px 15px -5px rgb(21 114 232 / 40%)',
        content: '2px 6px 15px 0 rgb(69 65 78 / 10%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        slideIn: {
          '0%': { top: "-62px" },
          '100%': { top: 0 }
        },
        slideOut: {
          '0%': { top: 0 },
          '100%': { top: "-62px" }
        }
      },
      animation: {
        fadeIn: 'fadeIn 500ms forwards',
        fadeOut: 'fadeOut 500ms forwards',
        slideIn: 'slideIn 500ms forwards',
        slideOut: 'slideOut 500ms forwards',
      },
    },
  },
  plugins: [],
}
