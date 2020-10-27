import data from './assets/data/data.json'

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
        title: data.seo.baseTitle,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/berry_twitter.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;500;600;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' }
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
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-analytics'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt/content
        '@nuxt/content',
        '@nuxtjs/svg',
        '@nuxtjs/sitemap'
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
        Sitemap module configuration
    */
    sitemap: {
        hostname: 'https://www.andberry.me',
        gzip: true,
        routes: [
            '/blog/javascript-var-let-const',
            '/blog/javascript-var-let-const',
            '/blog/wordpress-code-snippets',
            '/blog/centering-things-css',
            '/blog/welcome-to-berry-blog'
        ]
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

    googleAnalytics: {
        id: 'UA-181253873-1',
        set: [
            { field: 'anonymizeIp', value: true }
        ]
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
