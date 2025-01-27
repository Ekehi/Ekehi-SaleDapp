/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [    
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '6.4px',
    },
    extend: {
      display: {
        'contents': 'contents',
      },
      fontSize: {
        'custom-40': '40px', // Custom font size
      },
      boxShadow: {
        'custom-light': '2px 2px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': '4px 4px 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
