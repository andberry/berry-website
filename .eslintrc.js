module.exports = {
    root: true,

    env: {
        browser: true,
        node: true
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],

    plugins: [
    ],

    // add your custom rules here
    rules: {
        indent: [1, 4],
        'vue/html-indent': [1, 4, {}]
    }
}
