import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('./src/assets/auth-bg.jpg')"
      },
      colors: {
        'dark': '#1e1e1e',
        'dark-gradient': '#00000080'
      }
    },
  },
  plugins: [],
})