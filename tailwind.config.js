
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#00C853",
        secondary:"#D8C8A9",
        text:"#1E1E1E",
        fond:"#F7E7DC",

      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};