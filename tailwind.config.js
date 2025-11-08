
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#001F33',
        'primary-light': '#002A46',
        'accent': '#D9B98E',
        'text-primary': '#F9FAFB',
        'text-secondary': '#C7D3E3',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #001F33 0%, #002A46 100%)',
      },
    }
  },
  plugins: []
};
