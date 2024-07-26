/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        default: "#fcf3eb",
      },
      padding: {
        "default-x": "12rem",
        // "default-y": "1rem",
      },
    },
  },
  plugins: [],
};
