/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#26747e",
        "dark-gold": "#e18a29",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
