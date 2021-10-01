const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: colors.emerald,
            secondary: colors.sky,
            gray: colors.gray,
            black: colors.black,
            white: colors.white, 
            indigo: colors.indigo,
            red: colors.red,
            yellow: colors.yellow,

        },
        extend: {
            fontFamily: {
                body: ['Montserrat']
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
