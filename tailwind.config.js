/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px'
        },
        colors: {
            petrol: '#005F6A',
            lime: '#b0ed60',
            violet: '#7C48FF',
            purple: '#6b46c1',
            purple2: '#44307b',
            white: '#FFFFFF',
            graylight: '#CCCCCC',
            gray: '#858585',

            black: '#272727',
            'black-rgba-75': 'rgba(39, 39, 39, 0.75)',
            black2: '#333',
            red: '#FB0E1A',
            transparent: 'rgba(0,0,0,0)'
        },

        fontFamily: {
            exo2: ['"Exo 2"', 'sans-serif'],
            fontmono: ['"Courier Prime"', 'monospace'],
            ubuntu: ['Ubuntu', 'sans-serif']
            /* comfortaa: ['Comfortaa', 'cursive'], */
        },

        transitionTimingFunction: {
            linear: 'linear',
            def: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)'
        },

        extend: {
            fontSize: {
                hero1: '2vw',
                hero2: '5vw',
                hero3: '6.5vw',
                huge: '14vw'
            },

            lineHeight: {
                berry: 0.95
            },

            gridTemplateRows: {
                10: 'repeat(10, minmax(0, 1fr))'
            },

            gridRowStart: {
                7: '7',
                8: '8',
                9: '9',
                10: '10'
            },

            gridRowEnd: {
                7: '7',
                8: '8',
                9: '9',
                10: '10'
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    }
}
