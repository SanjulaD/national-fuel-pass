const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    colors: {
      ...colors,
      yellow: {
        100: '#FFF4DC',
      },
      red: {
        100: '#8D153A',
      },
      orange: {
        100: '#EB7400',
        200: '#F19B47',
      },
    },
  },
  plugins: [],
};
