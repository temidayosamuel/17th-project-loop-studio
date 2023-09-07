/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
        darkgray: "hsl(0, 0%, 55%)",
        verydarkgray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
