<template>
    <article class="container mx-auto max-w-screen-md pt-8 md:pt-16">
        <h1 class="title--berry text-5xl lg:text-hero2 mb-16 lg:mb-32">
            Berry's Articles
        </h1>

        <div class="articles-lists">
            <div v-for="(post, key) in articles" :key="key" class="post mb-24 lg:mb-32">
                <h2 class="post__title title--berry text-4xl mb-2">
                    <nuxt-link :to="post.path" class="hover:text-lime block">
                        {{ post.title }}
                    </nuxt-link>
                </h2>
                <h3 class="post__createdat mb-4 text-sm">
                    {{ post.createdAtDisplay }}
                </h3>
                <p class="post__abstract mb-0">
                    {{ post.abstract }}
                </p>

                <div class="post__bottom flex justify-between items-center mt-4">

                    <div class="post__tags flex">
                        <div
                            v-for="(tag, index) in post.tags"
                            :key="index"
                            class="post-tag mr-2 text-xs leading-tight text-center bg-violet text-white px-2 py-1 rounded-sm"
                        >
                            {{ tag }}
                        </div>
                    </div>

                    <nuxt-link :to="post.path" class="text-sm link--styled">
                        Read the Article
                    </nuxt-link>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import { gsap } from 'gsap'
import data from '~/assets/data/data.json'

export default {
    async asyncData ({ $content }) {
        return {
            articles: await $content('articles')
                .only(['title', 'abstract', 'createdAtDisplay', 'slug', 'path', 'tags'])
                .where({ published: true })
                .sortBy('createdAt', 'desc')
                .fetch()
        }
    },

    head: {
        title: 'Articles | ' + data.seo.baseTitle,
        meta: [
            {
                name: 'description',
                hid: 'description',
                content: 'Andrea Berard Web Developer tech articles'
            }
        ]
    },

    mounted () {
        const postsEls = document.querySelectorAll('.post')
        const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: 'power4.out' } })
        tl.fromTo(
            postsEls,
            { opacity: 0, x: 15 },
            { opacity: 1, x: 0, stagger: 0.1 },
            '<+0.1'
        )
        tl.play()
    }
}

</script>
