<template>
    <article class="container mx-auto max-w-screen-md">
        <h1 class="page-title mb-16 lg:mb-32">
            Berry's Blog
        </h1>
        <div class="posts-lists">
            <div v-for="(post, key) in posts" :key="key" class="post mb-16 lg:mb-24">
                <h2 class="post__title berry-title text-4xl mb-2">
                    {{ post.title }}
                </h2>
                <h3 class="post__createdat mb-4">
                    {{ post.createdAtDisplay }}
                </h3>
                <p class="post__abstract">
                    {{ post.abstract }}
                </p>
                <nuxt-link :to="post.path">
                    Read Post
                </nuxt-link>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    async asyncData ({ $content }) {
        return {
            posts: await $content('blog')
                .only(['title', 'abstract', 'createdAtDisplay', 'slug', 'path'])
                .sortBy('createdAt')
                .fetch()
        }
    }
}

</script>
