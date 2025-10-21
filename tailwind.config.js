module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softOrange: "hsl(20, 100%, 64%)",
        softie: "#E09341",
        softie2: "#552C17",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
        heroo: "url('../images/co-workers-corridor.jpg')",
      }),
    },
  },
  plugins: [],
};
