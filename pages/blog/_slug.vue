<template>
    <article class="container mx-auto max-w-screen-md">
        <h1 class="page-title mb-16 lg:mb-32">
            {{ post.title }}
        </h1>

        <h3 class="post__createdat mb-4">
            {{ post.createdAtDisplay }}
        </h3>

        <nuxt-content :document="post" />
    </article>
</template>

<script>
import hljs from 'highlight.js'
export default {
    async asyncData ({ params, $content }) {
        return {
            post: await $content('blog', params.slug).fetch()
        }
    },

    mounted () {
        for (const item of Array.from(document.querySelectorAll('pre code'))) {
            hljs.highlightBlock(item)
        }
    }
}
</script>

<style>

</style>
