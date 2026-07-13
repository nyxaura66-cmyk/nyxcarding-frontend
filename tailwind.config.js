/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nyx: {
          dark: "#0a0b0d",
          gray: "#12141c",
          lightGray: "#1f2232",
          blue: "#00d2ff",
          electric: "#0066ff"
        }
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 210, 255, 0.25)',
        'glow-electric': '0 0 30px rgba(0, 102, 255, 0.4)',
      }
    },
  },
  plugins: [],
  }
