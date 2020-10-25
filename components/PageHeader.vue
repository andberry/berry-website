
<template>
    <header id="page__header" class="fixed top-0 left-0 w-full h-16 px-4 py-2 lg:py-0 flex items-center justify-between bg-purple text-white text-sm z-40">
        <div class="flex items-center">

            <div class="header__logo lg:mr-4 relative z-40 w-10 lg:w-12">
                <nuxt-link to="/">
                    <img src="~/assets/images/berry_twitter.jpg" alt="Berry Image" class="rounded-full">
                </nuxt-link>
            </div>

            <nav id="main-menu" class="header__nav fixed inset-0 lg:static flex items-center bg-black lg:bg-transparent z-40">
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

            <div class="block w-8 lg:hidden">
                <div class="mobile-menu-toggle">
                    <button v-on:click="toggleMobileMenu" class="block">
                        <div id="hamb-menu" class="hamb w-8 h-6 flex flex-col justify-between overflow-hidden">
                            <div class="hamb__item bg-white"></div>
                            <div class="hamb__item bg-white"></div>
                            <div class="hamb__item bg-white"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { gsap } from 'gsap'
// import twResolveConfig from 'tailwindcss/resolveConfig'
// import twConfigFile from '../tailwind.config.js'
import data from '~/assets/data/data.json'
import twitterIcon from '~/assets/images/twitter1.svg?inline'
import linkedinIcon from '~/assets/images/linkedin.svg?inline'
import githubIcon from '~/assets/images/github.svg?inline'

export default {
    components: {
        twitterIcon,
        linkedinIcon,
        githubIcon
    },

    data () {
        return {
            data,
            isMobileMenuOpen: false,
            mobileMenuAnimation: {},
            openMobileMenu: {},
            closeMobileMenu: {}
        }
    },

    methods: {
        toggleMobileMenu () {
            if (!this.isMobileMenuOpen) {
                this.openMobileMenu.restart()
            } else {
                this.closeMobileMenu.restart()
            }
            this.isMobileMenuOpen = !this.isMobileMenuOpen
        }
    },

    mounted () {
        // const twConfig = twResolveConfig(twConfigFile)

        // Setup open mobile menu animation
        const vw = document.documentElement.clientWidth
        if (vw < 1024) {
            const menuEl = document.getElementById('main-menu')
            const menuItemsEls = document.querySelectorAll('#main-menu li')
            const hambMenuItems = document.querySelectorAll('.hamb__item')
            const hambMenuItem1 = document.querySelector('.hamb__item:nth-child(1)')
            const hambMenuItem2 = document.querySelector('.hamb__item:nth-child(2)')
            const hambMenuItem3 = document.querySelector('.hamb__item:nth-child(3)')
            const openMobileMenuTl = gsap.timeline({ paused: true, defaults: { duration: 0.4, ease: 'power4.out' } })

            openMobileMenuTl.to(hambMenuItem1, { x: 8 })
            openMobileMenuTl.to(hambMenuItem2, { x: 12 }, '<+0.05')
            openMobileMenuTl.to(hambMenuItem3, { x: 16 }, '<+0.05')
            openMobileMenuTl.to(menuEl, { autoAlpha: 1, duration: 0.2, ease: 'none' }, '>-0.4')
            openMobileMenuTl.fromTo(
                menuItemsEls,
                { opacity: 0, x: -15 },
                { opacity: 1, x: 0, stagger: 0.1 },
                '>-0.1'
            )
            this.openMobileMenu = openMobileMenuTl

            // Setup close mobile menu animation
            const closeMobileMenuTl = gsap.timeline({ paused: true, defaults: { duration: 0.4, ease: 'power4.in' } })

            closeMobileMenuTl.to(menuItemsEls, { opacity: 0, x: 30, stagger: 0.1 })
            closeMobileMenuTl.to(menuEl, { autoAlpha: 0, duration: 0.2, ease: 'none' }, '>-0.1')
            closeMobileMenuTl.to(hambMenuItems, { x: 0, stagger: 0.05 }, '>-0.5')
            this.closeMobileMenu = closeMobileMenuTl

            // Close mobile-menu after using a link in the menu
            const menuLinksEls = document.querySelectorAll('#main-menu a')
            for (const item of Array.from(menuLinksEls)) {
                item.addEventListener('click', () => {
                    this.closeMobileMenu.restart()
                    this.isMobileMenuOpen = false
                })
            }
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
        opacity: 0;
        visibility: hidden;
    }

    @screen lg {
        #main-menu{
            opacity: 1;
            visibility: visible;
        }
    }

    .hamb__item{
        height: 2px;
    }
</style>
