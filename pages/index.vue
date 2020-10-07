<template>
    <article class="container mx-auto lg:flex lg:items-center lg:justify-between text-center lg:text-left">
        <div class="intro w-full lg:w-8/12 lg:pr-4 lg:flex items-start">
            <div class="intro__image w-full lg:w-2/12 lg:pr-4">
                <img :src="images.intro.src" :alt="images.intro.alt" class="inline-block rounded-full w-1/3 mb-4 lg:mb-0 lg:w-full">
            </div>

            <div class="intro__text">
                <h1 class="berry-hero text-huge lg:text-hero3">
                    Hello!
                    <br>
                    I'm <span class="text-violet">Berry</span>.
                    <div class="mask"></div>
                </h1>
                <div class="mt-3">
                    <p>I'm a <span class="text-violet">Web Developer</span> located in Brescia (Italy).</p>
                    <p>
                        My main focus is <span class="text-lime">Frontend development</span>,<br>with strong experience structuring and building websites with <span class="text-lime">CMS</span> like WordPress.
                    </p>
                    <p>Fallen in love with <span class="text-lime">Vue.js</span>, <span class="text-lime">Nuxt.js</span> enthusiast.</p>
                </div>
            </div>
        </div>

        <div id="skills" class="skills hidden lg:grid w-4/12 mt-16 lg:mt-0 grid-cols-4 grid-rows-8 gap-3 lg:pl-4">
            <span class="skill skill__3 col-start-1 col-end-2 row-start-1 row-end-2">HTML</span>
            <span class="skill skill__1 col-start-2 col-end-3 row-start-2 row-end-3">CSS<br>Sass/SCSS</span>
            <span class="skill skill__2 col-start-2 col-end-3 row-start-3 row-end-4">BEM,<br>SMACSS, ITCSS</span>
            <span class="skill skill__1 col-start-1 col-end-2 row-start-4 row-end-5">Tailwind<br>CSS</span>
            <span class="skill skill__2 col-start-3 col-end-4 row-start-1 row-end-2">Javascript<br>ES6+</span>
            <span class="skill skill__3 col-start-3 col-end-4 row-start-5 row-end-6">Foundation<br>Bootstrap</span>
            <span class="skill skill__1 col-start-4 col-end-5 row-start-3 row-end-4">Vue.js</span>
            <span class="skill skill__2 col-start-4 col-end-5 row-start-4 row-end-5">Nuxt.js</span>
            <span class="skill skill__2 col-start-2 col-end-3 row-start-7 row-end-8">WordPress</span>
            <span class="skill skill__3 col-start-2 col-end-3 row-start-6 row-end-7">PHP</span>
            <span class="skill skill__3 col-start-1 col-end-2 row-start-6 row-end-7">Twig</span>
            <span class="skill skill__1 col-start-4 col-end-5 row-start-6 row-end-7">Python</span>
            <span class="skill skill__2 col-start-4 col-end-5 row-start-7 row-end-8">Django</span>
        </div>
    </article>
</template>

<script>
import { gsap } from 'gsap'
export default {
    layout: 'fixed',

    data () {
        return {
            images: {
                intro: {
                    src: require('~/assets/images/berry_twitter.jpg'),
                    alt: 'Berry Image'
                }
            }

        }
    },

    mounted () {
        const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: 'power4.out' } })
        const skillsEls = document.querySelectorAll('#skills .skill')
        const titleMaskEl = document.querySelectorAll('.mask')

        tl.fromTo(
            skillsEls,
            { opacity: 0, x: 15, scale: 1.2, ease: 'back.out(5)' },
            { opacity: 1, x: 0, scale: 1, stagger: { amount: 0.8, from: 'random' }, ease: 'back.out(5)' }
        )

        tl.to(titleMaskEl, { height: '100%' }, '>-0.6')
        tl.to(titleMaskEl, { width: '100%', duration: 0.3 }, '>')
        tl.to(titleMaskEl, { left: 'auto', right: 0, duration: 0 }, '>')
        tl.to(titleMaskEl, { width: '12px', duration: 0.3 }, '>')
        tl.to(titleMaskEl, { height: '0px', right: '26%', bottom: '35px' }, '>')
        tl.to(titleMaskEl, { height: '60px', backgroundColor: '#b0ed60', ease: 'back.out(5)' }, '>')

        tl.play()
    }
}
</script>

<style scoped>
    .skill{
        opacity: 0;
    }

    .berry-hero{
        position: relative;
    }

    .berry-hero span{
        position: relative;
        z-index: 10;
    }

    .berry-hero .mask{
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0px;
        height: 0px;
        background: theme('colors.white');
        z-index: 1;
    }
</style>
