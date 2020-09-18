/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
        colors: {
            petrol: '#005F6A',
            lime: '#b0ed60',
            violet: '#7C48FF',
            purple: '#6b46c1',
            purple2: '#553c9a',
            white: '#FFFFFF',
            graylight: '#CCCCCC',
            gray: '#858585',

            black: '#272727',
            'black-rgba-75': 'rgba(39, 39, 39, 0.75)',
            black2: '#333',
            red: '#FB0E1A'
        },

        fontFamily: {
            exo2: ['"Exo 2"', 'sans-serif'],
            font1: ['Rubik', 'sans-serif'],
            font2: ['Ubuntu', 'sans-serif'],
            font3: ['Roboto Slab', 'serif'],
            font6: ['Montserrat', 'sans-serif'],
            font7: ['Lato', 'sans-serif'],
            fontmono: ['"Courier Prime"', 'monospace'],

            font10: ['Crimson Text', 'serif'],
            font11: ['Montserrat', 'sans-serif'],
        },

        extend: {
            fontSize: {
                hero1: '2vw',
                hero2: '5vw',
                huge: '14vw'
            },

            lineHeight: {
                berry: 0.95
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
