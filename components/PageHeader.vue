
<template>
    <header id="page__header" class="fixed top-0 left-0 w-full h:8 lg:h-16 px-4 py-2 lg:py-0 flex items-center justify-between bg-purple text-white text-sm z-40">
        <div class="flex items-center">

            <div class="header__logo lg:mr-4 relative z-40">
                <nuxt-link to="/">
                    <img src="~/assets/images/berry_twitter.jpg" alt="Berry Image" class="rounded-full w-10 lg:w-12">
                </nuxt-link>
            </div>

            <nav id="main-menu" class="header__nav mobile-menu--hidden fixed inset-0 lg:static flex items-center bg-black lg:bg-transparent z-40">
                <ul class="lg:flex w-full text-center lg:text-left text-lg lg:text-base">
                    <li class="py-2 lg:py-0 px-4">
                        <nuxt-link to="/" class="text-3xl md:text-4xl lg:text-base">
                            Home
                        </nuxt-link>
                    </li>
                    <li class="py-2 lg:py-0 px-4">
                        <nuxt-link to="/skills" class="text-3xl md:text-4xl lg:text-base">
                            Skills
                        </nuxt-link>
                    </li>
                    <li class="py-2 lg:py-0 px-4">
                        <nuxt-link to="/blog" class="text-3xl md:text-4xl lg:text-base">
                            Blog
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="flex relative z-40">
            <div id="page-header-socials" class="header__socials hidden lg:flex">
                <div class="social social--twitter w-8 mr-4">
                    <a :href="data.socialsLinks.twitter" target="_blank"><twitterIcon /></a>
                </div>

                <div class="social social--linkedin w-8 mr-4">
                    <a :href="data.socialsLinks.linkedin" target="_blank"><linkedinIcon /></a>
                </div>

                <div class="social social--github w-8">
                    <a :href="data.socialsLinks.github" target="_blank"><githubIcon /></a>
                </div>
            </div>

            <div class="mobile-menu-toggle block lg:hidden">
                <button v-on:click="toggleMobileMenu" class="w-8"><hamburgerIcon /></button>
            </div>
        </div>
    </header>
</template>
<script>
import data from '~/assets/data/data.json'
import twitterIcon from '~/assets/images/twitter1.svg?inline'
import linkedinIcon from '~/assets/images/linkedin.svg?inline'
import githubIcon from '~/assets/images/github.svg?inline'
import hamburgerIcon from '~/assets/images/hamburger.svg?inline'

export default {
    components: {
        twitterIcon,
        linkedinIcon,
        githubIcon,
        hamburgerIcon
    },

    data () {
        return {
            data
        }
    },

    methods: {
        toggleMobileMenu () {
            const menuEl = document.getElementById('main-menu')
            menuEl.classList.toggle('mobile-menu--hidden')
        }
    },

    mounted () {
        // Handle close mobile-menu after using a link in the menu
        const menuEl = document.getElementById('main-menu')
        const menuLinksEls = document.querySelectorAll('#main-menu a')
        for (const item of Array.from(menuLinksEls)) {
            item.addEventListener('click', () => {
                menuEl.classList.add('mobile-menu--hidden')
            })
        }
    }
}
</script>

<style scoped>
    svg{
        fill: theme('colors.white');
        @apply transition-all duration-200 ease-linear;
    }
    svg:hover{
        fill: theme('colors.lime');
    }

    #main-menu{
        @apply transition-all duration-200 ease-linear;

        @screen lg {
            @apply transition-none;
        }
    }

    .mobile-menu--hidden{
        opacity: 0;
        visibility: hidden;

        @screen lg {
            opacity: 1;
            visibility: visible;
        }
    }
</style>
