
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          gold: "#D9B98E",
          dark: "#222222",
          light: "#F8F9FB",
        },
        primary: "#001F33",
        "primary-light": "#002A46",
        accent: "#D9B98E",
        "text-primary": "#F9FAFB",
        "text-secondary": "#C7D3E3",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #001F33 0%, #002A46 100%)",
      },
    },
  },
  plugins: [],
};
