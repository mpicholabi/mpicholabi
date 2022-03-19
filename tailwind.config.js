const { guessProductionMode } = require('@ngneat/tailwind');

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
          210: '#EBEBEB',
          220: '#BABABA',
          250: '#D0D0D0',
          260: '#D5D5D5',
          275: '#808080',
          350: '#999999',
          375: '#CCCCCC',
          450: '#707070',
          550: '#848484',
        },
        cyan: {
          450: '#00C1D4',
          550: '#2C8B9E',
        },
        blue: {
          350: '#95E5ED',
          750: '#003865',
        },
        yellow: {
          logo: '#f4bb48',
        },
        red: {
          350: '#FF7272',
        },
      },
      fontSize: {
        '14px': '0.875rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '19px': '1.188rem',
        '20px': '1.25rem',
        '22px': '1.375rem',
        '24px': '1.5rem',
        '28px': '1.75rem',
        '32px': '2rem',
        '34px': '2.125rem',
        '35px': '2.188rem',
        '42px': '2.625rem',
        '45px': '2.813rem',
        '75px': [
          '4.688rem',
          {
            lineHeight: '85px',
          },
        ],
      },
      width: {
        '50px': '3.125rem',
        '59px': '3.688rem',
        '72px': '4.5rem',
        '83px': '5.188rem',
        '236px': '14.75rem',
        '283px': '17.75rem',
        '167px': '10.438rem',
        '138px': '8.625rem',
        '111px': '6.938rem',
        '199px': '12.438rem',
        '226px': '14.125rem',
        '310px': '19.375rem',
        '379px': '23.688rem',
        '412px': '25.75rem',
        '500px': '31.25rem',
        '516px': '32.25rem',
        '522px': '32.625rem',
        '700px': '43.75rem',
        '710px': '44.375rem',
        '110%': 'calc(100% + 13px)',
      },
      maxHeight: {
        '90vh': '90vh',
      },
      height: {
        '5px': '0.313rem',
        '35px': '2.188rem',
        '50px': '3.125rem',
        '70px': '4.375rem',
        '71px': '4.438rem',
        '191px': '11.938rem',
        '136px': '8.5rem',
        '313px': '19.563rem',
        '443px': '27.688rem',
        '700px': '43.75rem',
        '90vh': '90vh',
      },
      minHeight: {
        '443px': '27.688rem',
        '523px': '32.688rem',
        '550px': '34.375rem',
        '700px': '43.75rem',
        '900px': '56.25rem',
        '1000px': '62.5rem',
      },
      maxWidth: {
        '1436px': '89.75rem',
        '1194px': '74.625rem',
        '1245px': '77.813rem',
        '1360px': '85rem',
        '90vw': '90vw',
      },
      screens: {
        xs: { min: '300px', max: '640px' },
      },
      spacing: {
        '2px': '0.125rem',
        '5px': '0.313rem',
        '6px': '0.375rem',
        '15px': '0.938rem',
        '70px': '4.375rem',
        '79px': '4.938rem',
        '100px': '6.25rem',
        '153px': '9.563rem',
        '952px': '59.5rem',
        '10%': '10%',
      },
      boxShadow: {
        card: '0px 3px 52px #9999992E',
        cardRequirement: '0px 3px 32px #9999991F',
      },
      borderRadius: {
        '3px': '0.188rem',
        '5px': '0.313rem',
        '18px': '1.125rem',
        '35px': '2.188rem',
      },
      padding: {
        '44px': '2.75rem',
        '37px': '2.313rem',
        '120px': '7.5rem',
        '300px': '18.75rem',
        '260px': '16.25rem',
        '498px': '31.125rem',
      },
      margin: {
        '51px': '3.188rem',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      zIndex: {
        1: 1,
        2: 2,
      },
      backgroundImage: {
        'banner-header': 'url(/assets/image/bi-banner-home.jpeg)',
      },
      lineHeight: {
        '85px': '6.313rem',
      },
      keyframes: {
        shake: {
          '0%, 40%, 80%': {
            transform: 'translateX(-20px)',
          },
          '20%, 60%, 100%': {
            transform: 'translateX(10px)',
          },
        },
      },
      animation: {
        shake: 'shake 700ms ease-in-out',
      },
    },
  },
  plugins: [],
};
