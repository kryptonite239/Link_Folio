/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      text: "#FEFBF6",
      border: "#A6D1E6",
      main: "#C3ACD0",
      sec: "#3D3C42",
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
      title: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
