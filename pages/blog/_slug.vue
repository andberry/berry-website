<template>
    <article class="container mx-auto max-w-screen-md">
        <h1 class="page-title mb-4">
            {{ post.title }}
        </h1>

        <h3 class="post__createdat mb-16 text-sm">
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
    .nuxt-content h1,
    .nuxt-content h2,
    .nuxt-content h3{
        @apply mt-16 mb-4;
    }
</style>
