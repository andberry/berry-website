export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'static',
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;800;900&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto+Slab:wght@300&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;500;600;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        'highlight.js/styles/atom-one-dark.css'
    ],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt/content
        '@nuxt/content',
        '@nuxtjs/svg'
    ],
    /*
    ** Content module configuration
    ** See https://content.nuxtjs.org/configuration
    */
    content: {
        markdown: {
            prism: {
                theme: false
            }
        }
    },
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
        postcss: {
            plugins: {
                autoprefixer: {}
            },

            preset: {
                autoprefixer: {
                    grid: true
                }
            }
        }
    },

    pageTransition: {
        name: 'fade-in-up',
        mode: 'out-in'
    }
    /*
    layoutTransition: {
        name: 'fade-in-up',
        mode: 'out-in'
    }
    */
}
