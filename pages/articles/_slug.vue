
<template>
    <article class="article container mx-auto max-w-screen-md pt-8 md:pt-16">
        <h1 class="article__title title--berry text-5xl lg:text-hero2 mb-4">
            {{ article.title }}
        </h1>

        <h3 class="article__createdat mb-16 text-sm">
            {{ article.createdAtDisplay }}
        </h3>

        <nuxt-content :document="article" class="article__content" />

        <div class="article__bottom flex justify-end mt-16 mb-16">
            <nuxt-link to="/articles" class="text-sm link--styled">Back to articles list</nuxt-link>
        </div>

        <footer>
            <Disqus />
        </footer>
    </article>
</template>

<script>
import hljs from 'highlight.js'
import data from '~/assets/data/data.json'

export default {
    async asyncData ({ params, $content }) {
        return {
            article: await $content('articles', params.slug).fetch()
        }
    },

    head () {
        return {
            title: this.article.title + ' | ' + data.seo.baseTitle,
            meta: [
                {
                    name: 'description',
                    hid: 'description',
                    content: this.article.abstract
                }
            ]
        }
    },

    mounted () {
        for (const item of Array.from(document.querySelectorAll('pre code'))) {
            hljs.highlightBlock(item)
        }
    }
}
</script>

<style scoped>
    .nuxt-content h2,
    .nuxt-content h3{
        @apply mt-16 mb-4;
    }

    .nuxt-content h2{
        @apply text-5xl;
    }

    .nuxt-content h3{
        @apply text-2xl;
    }

    .article__content {
        @apply font-exo2;
    }

    .article__createdat {
        @apply text-fuchsia400;
        margin-top: 0px;
    }
</style>
