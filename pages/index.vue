
<template>
        <article class="container mx-auto text-center lg:text-left pt-8 md:pt-0">

            <section id="home-hero" class="intro w-full lg:grid lg:grid-cols-6 lg:gap-8 lg:py-40 relative">
                <BgPatternDots class="invisible lg:visible" />
                <div class="intro__image w-full lg:col-start-1 lg:col-span-1">
                    <img :src="images.intro.src" :alt="images.intro.alt" class="inline-block rounded-full w-1/3 md:w-3/12 lg:w-4/5 mb-4 lg:mb-0  lg:mx-auto lg:block">
                </div>

                <div class="intro__text lg:col-start-2 lg:col-span-5">
                    <h1 class="intro__title hero--berry text-huge lg:text-hero3 overflow-hidden pb-4 relative">
                        <span class="relative z-30">Hello,</span>
                        <br>
                        <span class="relative z-30">I'm </span><span class="text-bg-gradient relative z-30 text-fuchsia400 font-black">Berry</span><span class="relative z-30 text-lime300"></span>,
                        <br>
                        and I love building <span class="text-bg-gradient">websites</span>.

                        <div class="intro__text__mask absolute inset-0 bg-lime z-20 transform -translate-x-full"></div>
                        <div class="intro__text__mask--2 absolute bottom-0 left-0 h-0 w-3 bg-lime300 z-30"></div>
                    </h1>
                    <div class="intro__description mt-8"></div>
                </div>
            </section>

            <!--
            <section class="lg:grid lg:grid-cols-12 lg:gap-4 lg:py-20">
                <div id="skills" class="skills hidden lg:col-start-6 lg:col-span-5 lg:grid mt-16 lg:mt-0 grid-cols-4 grid-rows-10 gap-3 lg:pl-4">
                        <span class="skill skill__2 col-start-1 col-end-2 row-start-2 row-end-3">HTML</span>
                        <span class="skill skill__1 col-start-2 col-end-3 row-start-3 row-end-4">CSS<br>Sass/SCSS</span>
                        <span class="skill skill__2 col-start-3 col-end-4 row-start-1 row-end-2">Javascript<br>ES6+</span>
                        <span class="skill skill__1 col-start-2 col-end-3 row-start-4 row-end-5">BEM</span>
                        <span class="skill skill__1 col-start-2 col-end-3 row-start-5 row-end-6">ITCSS</span>
                        <span class="skill skill__1 col-start-3 col-end-4 row-start-4 row-end-5">UIkit</span>
                        <span class="skill skill__2 col-start-3 col-end-4 row-start-5 row-end-6">Foundation</span>
                        <span class="skill skill__2 col-start-3 col-end-4 row-start-6 row-end-7">Bootstrap</span>
                        <span class="skill skill__2 col-start-3 col-end-4 row-start-7 row-end-8">Tailwind<br>CSS</span>
                        <span class="skill skill__1 col-start-3 col-end-4 row-start-2 row-end-3">Vue.js</span>
                        <span class="skill skill__2 col-start-4 col-end-5 row-start-3 row-end-4">Nuxt.js</span>
                        <span class="skill skill__2 col-start-4 col-end-5 row-start-5 row-end-6">GSAP</span>
                        <span class="skill skill__1 col-start-2 col-end-3 row-start-8 row-end-9">Drupal</span>
                        <span class="skill skill__2 col-start-2 col-end-3 row-start-9 row-end-10">Craft CMS</span>
                        <span class="skill skill__2 col-start-2 col-end-3 row-start-10 row-end-11">WordPress</span>
                        <span class="skill skill__2 col-start-1 col-end-2 row-start-7 row-end-8">PHP</span>
                        <span class="skill skill__2 col-start-2 col-end-2 row-start-7 row-end-8">Twig</span>
                        <span class="skill skill__2 col-start-4 col-end-5 row-start-8 row-end-9">Python</span>
                        <span class="skill skill__2 col-start-4 col-end-5 row-start-9 row-end-10">Django</span>
                        <span class="skill skill__1 col-start-1 col-end-2 row-start-4 row-end-5">Component<br>Based</span>
                    </div>
            </section>
            -->

            <section id="home-intro" class="lg:grid lg:grid-cols-6 lg:gap-8 md:py-24 relative">
                <BgPatternWrite class="invisible lg:visible" />
                <div class="intro__text lg:col-start-3 lg:col-span-3">
                    <p>I'm <span class="text-violet800 font-bold">Andrea Berardi</span>,
                        <br>an italian 🇮🇹 <span class="text-violet800 font-bold">Web Developer</span> with 10+ years of experience, currently located in Halifax, NS, Canada 🇨🇦
                    </p>

                    <p><span class="text-violet800 font-bold">I build websites</span>,
                        <br> and my main focus and experience is <span class="text-violet800">frontend development</span>.
                    </p>
                </div>
            </section>

            <section id="home-tech" class="lg:grid lg:grid-cols-6 lg:gap-8 lg:pt-24 md:pb-24 relative">
                <BgPatternPick class="invisible lg:visible" />
                <div class="lg:col-start-2 lg:col-span-3">
                    <p>Fallen in love with <span class="text-violet800">Component-Based development</span>, I work with <span class="text-violet800 font-bold">CMS</span> like <span class="text-violet800">Drupal, Statamic</span>, WordPress, CraftCMS, SSG like Eleventy (11ty), and frontend frameworks like Next.js and Nuxt.js.
                    </p>

                    <p>Content structure, semantic markup, implementing pixel perfect <span class="text-violet800">responsive layouts</span> mastering <span class="text-violet800">CSS</span>, and a sweet sprinkling of <span class="text-violet800">JavaScript (ES6+)</span> are my daily bread and butter.</p>

                    <p>Attention to details, and UI usability and technical SEO best practices are good additions to my hard skills set.
                    </p>
                </div>
            </section>

            <section id="home-next-steps" class="lg:grid lg:grid-cols-6 lg:gap-8 lg:py-24 relative">
                <BgPatternDots class="invisible lg:visible" />
                <div class="intro__text lg:col-start-3 lg:col-span-3">
                    <p><span class="text-violet800 font-bold">What am I doing right now?</span>
                        <br>
                        Currently having fun with Statamic, Eleventy and Next.js
                    </p>

                    <p><span class="text-violet800 font-bold">Plans for the future?</span>
                        <br>
                        Rocket hands-on experience with Jamstack ecostystem, data visualization with Chart.js, and deep dive into technical SEO are on the way.
                    </p>
                </div>
            </section>
        </article>

</template>

<script>
import { gsap } from 'gsap'
import data from '~/assets/data/data.json'
import BgPatternDots from '~/assets/images/bg/pattern6.svg?inline'
import BgPatternPick from '~/assets/images/bg/pattern1.svg?inline'
import BgPatternWrite from '~/assets/images/bg/pattern4.svg?inline'

export default {
    components: {
        BgPatternDots,
        BgPatternPick,
        BgPatternWrite
    },

    data () {
        return {
            images: {
                intro: {
                    src: require('~/assets/images/berry.jpg'),
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
                content: 'Hello, I\'m Andrea Berardi, a Web Developer located in Halifax, Nova Scotia (Canada).. My main focus is Frontend development, with strong experience structuring and building websites with CMS.'
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
        .fromTo(titleEl, { filter: 'grayscale(1) ' }, { filter: 'grayscale(0)', duration: 1.2, ease: 'power4.in' })
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

    article{
        font-size: 24px;
        @apply text-home;
    }

    .intro__title{
        filter: grayscale(1);
    }

    #home-hero svg {
        position: absolute;
        top: 25%;
        left: 75%;
        width: 55vw;
        max-width: none;
        z-index: -2;
    }

    #home-intro svg {
        position: absolute;
        top: -35%;
        left: -25%;
        width: 55vw;
        max-width: none;
        z-index: -2;
        opacity: 0.6;
    }

    #home-tech svg {
        position: absolute;
        top: -10%;
        right: -35%;
        width: 60vw;
        max-width: none;
        z-index: -2;
        opacity: 0.6;
        transform: rotate(30deg);
    }

    #home-next-steps svg {
        position: absolute;
        top: -35%;
        left: -25%;
        width: 55vw;
        max-width: none;
        z-index: -2;
    }

    #home-tech svg path {
        fill: rgb(91 33 182);
    }
</style>
