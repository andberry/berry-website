<template>
    <header id="page__header" class="fixed top-0 left-0 w-full h:8 lg:h-16 px-4 py-2 lg:py-0 flex items-center justify-between bg-purple2 text-white text-sm">
        <div class="flex items-center">
            <div class="header__logo mr-8">
                <img src="~/assets/images/berry_twitter.jpg" alt="Berry Image" class="rounded-full w-10 lg:w-12">
            </div>
            <div class="header__nav">
                <ul class="flex">
                    <li class="px-4">
                        <nuxt-link to="/">
                            Home
                        </nuxt-link>
                    </li>
                    <li class="px-4">
                        <nuxt-link to="/skills">
                            Skills
                        </nuxt-link>
                    </li>
                    <li class="px-4">
                        <nuxt-link to="/styleguide">
                            Style Guide
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <div id="page-header-socials" class="header__socials flex">
            <div class="social social--twitter w-6 mr-4">
                <a :href="data.socialsLinks.twitter" target="_blank"><twitterIcon /></a>
            </div>

            <div class="social social--linkedin w-6">
                <a :href="data.socialsLinks.linkedin" target="_blank"><linkedinIcon /></a>
            </div>
        </div>
    </header>
</template>
<script>
import data from '~/assets/data/data.json'
import twitterIcon from '~/assets/images/twitter.svg?inline'
import linkedinIcon from '~/assets/images/linkedin.svg?inline'

export default {
    components: {
        twitterIcon,
        linkedinIcon
    },

    data () {
        return {
            data
        }
    }
}
</script>
