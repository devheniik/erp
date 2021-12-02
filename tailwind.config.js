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
            primary: {
                '50': '#EDF6FF',
                '100': '#49A1FF',
                '200': '#3797FF',
                '300': '#248EFF',
                '400': '#1285FF',
                '500': '#007AFF',
                '600': '#0072ED',
                '700': '#006ADB',
                '800': '#0061C8',
                '900': '#0058B6',
                '1000': '#004FA4',
            },
            // secondary: colors.coolGray,
            success: {
                '50': '#71E382',
                '100': '#61E074',
                '200': '#51DD66',
                '300': '#41D958',
                '400': '#31D64A',
                '500': '#28CD41',
                '600': '#26BE3C',
                '700': '#23AF38',
                '800': '#20A133',
                '900': '#1D922E',
                '1000': '#1A832A',
            },
            warning: {
                '50': '#FFBB5B',
                '100': '#FFB349',
                '200': '#FFAC37',
                '300': '#FFA424',
                '400': '#FF9C12',
                '500': '#FF9500',
                '600': '#ED8A00',
                '700': '#DB8000',
                '800': '#C87500',
                '900': '#B66A00',
                '1000': '#A46000',
            },
            danger: {
                '50': '#FF7F79',
                '100': '#FF716A',
                '200': '#FF635B',
                '300': '#FF473D',
                '400': '#FF473D',
                '500': '#FF3B30',
                '600': '#FF2418',
                '700': '#FF1003',
                '800': '#EC0C00',
                '900': '#D70B00',
                '1000': '#C10A00',
            },
            blue: '#007aff',
            lightBlue: '#EDF6FF',
            orange: '#ff9500',
            lightOrange: '#FFF7ED',
            pink: '#ff2d55',
            lightPink: '#FFF0F3',
            cyan: '#55bef0',
            purple: '#af52de',
            lightPurple: '#F9F3FD',
            green: '#28cd41',
            lightGreen: '#EFFCF1',
            indigo: '#5856d6',
            red: '#ff3b30',
            lightRed: '#FFF1F0',
            yellow: '#ffcc00',
            lightYellow: '#FFFBED',
            gray: colors.coolGray,
            warmGray: colors.warmGray,
            white: colors.white,
            black: colors.black
        },
        extend: {
            colors: {
                'litepie-primary': {
                    '50': '#5BAAFF',
                    '100': '#49A1FF',
                    '200': '#3797FF',
                    '300': '#248EFF',
                    '400': '#1285FF',
                    '500': '#007AFF',
                    '600': '#0072ED',
                    '700': '#006ADB',
                    '800': '#0061C8',
                    '900': '#0058B6',
                    '1000': '#004FA4',
                }, // color system for light mode
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