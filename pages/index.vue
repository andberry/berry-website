
<template>
    <div class="md:flex md:items-center w-full">
        <article class="container mx-auto lg:flex lg:items-center lg:justify-between text-center lg:text-left pt-8 md:pt-0">
            <div id="hero" class="intro w-full lg:w-7/12 lg:pr-4 lg:flex items-start">
                <div class="intro__image w-full lg:w-3/12 lg:pr-4">
                    <img :src="images.intro.src" :alt="images.intro.alt" class="inline-block rounded-full w-1/3 md:w-3/12 lg:w-4/5 mb-4 lg:mb-0  lg:mx-auto lg:block">
                </div>

                <div class="intro__text">
                    <h1 class="intro__title hero--berry text-huge lg:text-hero3 overflow-hidden pb-4 relative">
                        <span class="relative z-30">Hello!</span>
                        <br>
                        <span class="relative z-30">I'm </span><span class="relative z-30 text-violet">Berry</span><span class="relative z-30">.</span>

                        <div class="intro__text__mask absolute inset-0 bg-lime z-20 transform -translate-x-full"></div>
                        <div class="intro__text__mask--2 absolute bottom-0 left-0 h-0 w-3 bg-violet z-30"></div>
                    </h1>
                    <div class="intro__description mt-8">
                        <p>I'm <span class="text-violet">Andrea Berardi</span>,
                            <br>a <span class="text-lime">Web Developer</span> located in Halifax, Nova Scotia (Canada).</p>
                        <p>
                            My main focus is <span class="text-lime">Front-end Development</span>,<br>with strong experience structuring and building websites with <span class="text-lime">CMS</span>.
                        </p>
                        <p>Fallen in love with <span class="text-lime">Component-base development</span>,
                            <br>
                            <span class="text-lime">Vue.js</span> and <span class="text-lime">Nuxt.js</span> enthusiast.
                        </p>
                    </div>
                </div>
            </div>

            <div id="skills" class="skills hidden lg:grid w-5/12 xl:w-4/12 mt-16 lg:mt-0 grid-cols-4 grid-rows-10 gap-3 lg:pl-4">
                <span class="skill skill__1 col-start-1 col-end-2 row-start-2 row-end-3">HTML</span>
                <span class="skill skill__1 col-start-2 col-end-3 row-start-3 row-end-4">CSS<br>Sass/SCSS</span>
                <span class="skill skill__2 col-start-3 col-end-4 row-start-1 row-end-2">Javascript<br>ES6+</span>
                <span class="skill skill__2 col-start-2 col-end-3 row-start-4 row-end-5">BEM,<br>ITCSS</span>
                <span class="skill skill__2 col-start-3 col-end-4 row-start-5 row-end-6">Tailwind<br>CSS</span>
                <span class="skill skill__2 col-start-3 col-end-4 row-start-6 row-end-7">Foundation<br>Bootstrap</span>
                <span class="skill skill__1 col-start-3 col-end-4 row-start-2 row-end-3">Vue.js</span>
                <span class="skill skill__2 col-start-4 col-end-5 row-start-3 row-end-4">Nuxt.js</span>
                <span class="skill skill__1 col-start-4 col-end-5 row-start-5 row-end-6">GSAP</span>
                <span class="skill skill__2 col-start-2 col-end-3 row-start-8 row-end-9">Drupal</span>
                <span class="skill skill__2 col-start-2 col-end-3 row-start-9 row-end-10">WordPress</span>
                <span class="skill skill__2 col-start-1 col-end-2 row-start-7 row-end-8">PHP</span>
                <span class="skill skill__1 col-start-2 col-end-2 row-start-7 row-end-8">Twig</span>
                <span class="skill skill__1 col-start-4 col-end-5 row-start-8 row-end-9">Python</span>
                <span class="skill skill__2 col-start-4 col-end-5 row-start-9 row-end-10">Django</span>
                <span class="skill skill__1 col-start-1 col-end-2 row-start-4 row-end-5">Component-base<br>Dev</span>
            </div>
        </article>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import data from '~/assets/data/data.json'

export default {
    data () {
        return {
            images: {
                intro: {
                    src: require('~/assets/images/berry_twitter.jpg'),
                    alt: 'Berry'
                }
            }

        }
    },

    head: {
        title: data.seo.baseTitle,
        meta: [
            {
                name: 'description',
                hid: 'description',
                content: 'Hello, I\'m Andrea Berardi, a Web Developer located in Brescia (Italy). My main focus is Frontend development, with strong experience structuring and building websites with CMS, like WordPress. Fallen in love with Vue.js, Nuxt.js enthusiast.'
            }
        ]
    },

    mounted () {
        const tlIntro = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: 'power4.out' } })
        const tlSKills = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 4, yoyo: true, defaults: { duration: 0.6, ease: 'power4.out' } })
        const skillsEls = document.querySelectorAll('#skills .skill')
        const titleMaskEl = document.querySelector('.intro__text__mask')
        const titleMaskEl2 = document.querySelector('.intro__text__mask--2')
        const titleEl = document.querySelector('.intro__title')
        const imageEl = document.querySelector('.intro__image')
        const introDescriptionEl = document.querySelector('.intro__description')

        // Prepare skills animation in loop
        tlSKills.fromTo(
            skillsEls,
            { opacity: 0, x: 15, scale: 1.2 },
            { opacity: 1, x: 0, scale: 1, stagger: { amount: 0.5, from: 'random' }, ease: 'back.out(5s)' }
        )

        // Animate hero mask
        tlIntro
        .fromTo(titleEl, { filter: 'grayscale(1) ' }, { filter: 'grayscale(0)', duration: 1.8, ease: 'power4.in' })
        .to(titleMaskEl, { x: '100%' }, '>0.3')
        .to(titleMaskEl, { x: '-100%' }, '>-0.3')

        .to(titleMaskEl, { width: '0.75rem', x: '0px' }, '>-0.2')
        .to(titleEl, { paddingLeft: '24px' }, '>-0.45')

        .to(imageEl, { opacity: 1 }, '<')

        .to(titleMaskEl2, { height: '100%', duration: 2.4 }, '>-0.6')
        .to(introDescriptionEl, { opacity: 1, duration: 2.4 }, '>-2.4')

        // Animate skills
        tlIntro.add(tlSKills, '<+0.9')
        tlSKills.play()

        tlIntro.play()
    }
}
</script>

<style scoped>
    .skill,
    .intro__image,
    .intro__description{
        opacity: 0;
    }

    /*
    article{
        filter: grayscale(1);
    }
    */

    .intro__title{
        filter: grayscale(1);
    }
</style>
