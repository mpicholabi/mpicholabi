const { guessProductionMode } = require('@ngneat/tailwind');
const { banpais } = require('./tailwind/banpais');
const { bancoIndustrial } = require('./tailwind/banco-industrial');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  purge: {
    enabled: guessProductionMode(),
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#009DEB',
        },
        gray: {
          250: '#D0D0D0',
          450: '#707070',
          550: '#848484',
        },
        cyan: {
          450: '#00C1D4'
        },
        blue: {
          750: '#003865',
        },
      },
      fontSize: {
        '28px': '1.75rem',
        '45px': '2.813rem',
        '22px': '1.375rem',
      },
      borderRadius: {
        '5px': '0.313rem',
      },
      width: {
        '50px': '3.125rem',
        '283px': '17.75rem',
        '138px': '8.625rem',
        '111px': '6.938rem',
      },
      maxWidth: {
        '1194px': '74.625rem',
      },
      screens: {
        xs: { min: '300px', max: '640px' },
      },
      spacing: {
        '15px': '0.938rem',
      },
      boxShadow: {
        card: '0px 3px 52px #9999992E',
      },
      borderRadius: {
        '18px': '1.125rem',
      },
      padding: {
        '37px': '2.313rem',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      zIndex: {
        1: 1
      }
    },
  },
  plugins: [],
};
