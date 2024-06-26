/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "primary-foreground": "#FFFFFF",
        "gauth-primary":"#557fc6"
      },
      screens: {
        "xxs": "375px",
        "xs":"480px"
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|green|blue|gray)-(100|200|300|400)/,
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /text-(red|green|blue|gray)-(100|200|300|400)/,
    }
  ],
}

