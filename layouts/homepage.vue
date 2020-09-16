<template>
    <div id="page">
        <header id="page__header" class="fixed top-0 left-0 w-full h:8 lg:h-16 px-4 py-2 lg:py-0 flex items-center justify-between bg-violet text-white text-sm">
            <div class="header__logo">
                <img src="~/assets/images/berry_twitter.jpg" alt="Berry Image" class="rounded-full w-10 lg:w-12">
            </div>

            <div id="page-header-socials" class="header__socials flex">
                <div class="social social--twitter w-6 mr-4">
                    <a href="https://twitter.com/andreaberardi82" target="_blank"><twitterIcon /></a>
                </div>

                <div class="social social--linkedin w-6">
                    <a href="https://www.linkedin.com/in/andrea-berardi/" target="_blank"><linkedinIcon /></a>
                </div>
            </div>
        </header>

        <main id="main" class="lg:h-screen min-h-screen lg:min-h-0 flex items-center bg-black text-white">
            <!-- <div class="main__overlay absolute top-0 left-0 w-full h-full z-0"></div> -->
            <Nuxt />
        </main>

        <footer id="page__footer" class="fixed bottom-0 left-0 w-full h-10 px-4 flex items-center bg-black2 text-gray text-xs">
            <p class="mb-0">
                Proudly built with <a href="https://www.nuxtjs.org/" target="_blank">Nuxt.js</a> and <a href="https://tailwindcss.com/">TailwindCSS</a>
            </p>
        </footer>
    </div>
</template>

<script>
import twitterIcon from '~/assets/images/twitter.svg?inline'
import linkedinIcon from '~/assets/images/linkedin.svg?inline'

export default {
    components: {
        twitterIcon,
        linkedinIcon
    }
}
</script>
