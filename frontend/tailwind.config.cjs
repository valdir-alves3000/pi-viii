/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        virus: "url('virus_mask.jpg')",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        blue: {
          500: "#001542",
          900: "#000E35",
        },
      },
    },
  },
  plugins: [],
};
