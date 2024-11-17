
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
      },
    },
  },
  plugins: [require('daisyui')],
};
