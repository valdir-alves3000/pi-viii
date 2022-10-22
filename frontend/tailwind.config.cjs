/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    extend: {
      backgroundImage: {
        virus: "url('virus_mask.jpg')",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      colors: {
        blue: {
          300: "#4B80C8",
          400: "#567CAE",
          500: "#001542",
          800: "#1C212C",
          900: "#000E35",
        },
      },
    },
  },
  plugins: [],
};
