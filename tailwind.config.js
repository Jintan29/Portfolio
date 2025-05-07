/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#04e39b",
        primaryDark:"#00e5bf",
        bgDark:"#1f1f1f"
      }

    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html': { scrollBehavior: 'smooth' },
      })
    },
  ],
}

