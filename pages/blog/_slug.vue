<template>
    <article class="container mx-auto max-w-screen-md pt-8 md:pt-16">
        <h1 class="title--berry text-5xl lg:text-hero2 mb-4">
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
    .nuxt-content h2,
    .nuxt-content h3{
        @apply mt-16 mb-4;
    }

    .nuxt-content h2{
        @apply text-4xl;
    }

    .nuxt-content h3{
        @apply text-3xl;
    }
</style>
