const colors = require('tailwindcss/colors')
const path = require('path');


module.exports = {
    mode: 'jit',
    purge: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: { 
            'xs': '.65rem', 
            'sm': '.75rem', 
            'tiny': '.75rem',
            'base': '.875rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem', 
            '3xl': '1.875rem', 
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem', 
            '7xl': '5rem',
        },
        colors: {
            primary: colors.blue,
            secondary: colors.coolGray,
            success: colors.green,
            warning: colors.orange,
            danger: colors.red,
            gray: colors.gray,
            blue: colors.blue,
            orange: colors.orange,
            warmGray: colors.warmGray,
            pink: colors.pink,
            purple: colors.purple,
            green: colors.emerald,
            black: colors.black,
            white: colors.white,
            indigo: colors.indigo,
            red: colors.red,
            yellow: colors.yellow,

        },
        extend: {
            colors: {
                'litepie-primary': colors.blue, // color system for light mode
            },
            fontFamily: {
                body: ['Montserrat']
            },
            width: {
                'fixed': 'calc(100% - 240px)'
            }
        },
    },
    variants: {
        extend: {
            zIndex: ["responsive", "hover"],
            position: ["responsive", "hover"],
            padding: ["responsive", "last"],
            margin: ["responsive", "last"],
            borderWidth: ["responsive", "last"],
            backgroundColor: ["last", "first", "odd", "responsive", "hover", "dark"],
            borderColor: ["last", "first", "odd", "responsive", "hover", "dark"],
            textColor: ["last", "first", "odd", "responsive", "hover", "dark"],
            boxShadow: ["last", "first", "odd", "responsive", "hover", "dark"],
            borderOpacity: ["last", "first", "odd", "responsive", "hover", "dark"],
            backgroundOpacity: ["last", "first", "odd", "responsive", "hover", "dark"]
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}