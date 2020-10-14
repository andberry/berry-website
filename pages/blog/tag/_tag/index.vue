<template>
    <article class="container mx-auto max-w-screen-md">
        <h1 class="page-title mb-16 lg:mb-32">
            Berry's Blog
            <br>
            "{{ tag }}" posts
        </h1>

        <div class="posts-lists">
            <div v-for="(post, key) in posts" :key="key" class="post mb-16 lg:mb-32">
                <h2 class="post__title berry-title text-4xl mb-2">
                    <nuxt-link :to="post.path" class="hover:text-lime block">
                        {{ post.title }}
                    </nuxt-link>
                </h2>
                <h3 class="post__createdat mb-4 text-sm">
                    {{ post.createdAtDisplayMaomao }}
                </h3>
                <p class="post__abstract mb-0">
                    {{ post.abstract }}
                </p>

                <div class="post__bottom flex justify-between items-center">
                    <div class="post__tags flex">
                        <nuxt-link
                            v-for="(tag, index) in post.tags"
                            :key="index"
                            class="post-tag mr-2 text-xs leading-tight text-center bg-violet text-white px-2 py-1 rounded-sm"
                            :to="{ name: 'blog-tag-tag', params: { tag } }">
                                {{ tag }}
                        </nuxt-link>
                    </div>
                    <nuxt-link :to="post.path" class="text-sm link--styled">
                        Read Post
                    </nuxt-link>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    async asyncData ({ params, $content }) {
        return {
            posts: await $content('blog')
                .only(['title', 'abstract', 'createdAtDisplay', 'slug', 'path', 'tags'])
                .where({ tags: { $contains: params.tag }, published: true })
                .sortBy('createdAt', 'desc')
                .fetch(),
            tag: params.tag
        }
    }
}
</script>
