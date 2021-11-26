const colors = require('./colors/index');
const path = require('path'); 

const color_theme = colors['macos'];


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
        colors: color_theme,
        extend: {
            colors: {
                'litepie-primary': color_theme.primary, // color system for light mode
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