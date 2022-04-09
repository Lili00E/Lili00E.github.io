const { white } = require('tailwindcss/colors');

/* eslint-disable global-require */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {

        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {

            fontFamily: {
                logo: 'Montserrat',
            },

            transparent: {
                DEFAULT: '#00FFFFFF',
            },
            purple: {
                bg: '#fbf7ff',
                light: '#C39EFD',
                DEFAULT: '#AD9DFB',
                dark: '#9365DB',
            },
            lineHeight: {
                hero: '4.5rem',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
