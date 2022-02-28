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
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '22px': '1.375rem',
        '24px': '1.5rem',
        '28px': '1.75rem',
        '32px': '2rem',
        '45px': '2.813rem'
      },
      borderRadius: {
        '5px': '0.313rem',
      },
      width: {
        '50px': '3.125rem',
        '59px': '3.688rem',
        '72px': '4.5rem',
        '83px': '5.188rem',
        '283px': '17.75rem',
        '167px': '10.438rem',
        '138px': '8.625rem',
        '111px': '6.938rem',
        '199px': '12.438rem',
        '310px': '19.375rem',
        '379px': '23.688rem',
        '500px': '31.25rem'
      },
      height:{
        '35px': '2.188rem',
        '70px': '4.375rem',
        '71px': '4.438rem',
        '191px': '11.938rem',
        '136px': '8.5rem',
        '313px': '19.563rem'
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
        '260px': '16.25rem'
      },
      margin:{
        '51px': '3.188rem'
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
