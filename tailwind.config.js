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
    screens: {
      sm: { min: '350px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
    },
  },
  plugins: [],
};
