/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F97316",
          secondary: "#1b1b1b",
          accent: "#f4f5f7",
          neutral: "#f4f4f4",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
