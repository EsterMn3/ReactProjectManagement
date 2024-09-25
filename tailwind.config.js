/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Media query for max-width: 400px
        xs: { max: "400px" }, // Applies only to screens <= 400px
      },
    },
  },
  plugins: [],
};
