<template>
    <footer id="page__footer" :class="[{ fixed: isSticky, 'bottom-0': isSticky, 'left-0': isSticky}, 'w-full', 'h-10', 'px-4' ,'flex', 'items-center', 'bg-black2', 'text-white', 'text-xs', 'flex-shrink-0']">
        <p class="mb-0">
            Designed and built by Andrea Berardi with <a :href="data.footerLinks.nuxt" target="_blank">Nuxt.js</a> and <a :href="data.footerLinks.tailwind" target="_blank">TailwindCSS</a>.
        </p>
    </footer>
</template>

<script>
import data from '~/assets/data/data.json'

export default {
    props: {
        isSticky: { type: Boolean, default: false }
    },

    data () {
        return {
            data
        }
    }
}
</script>
