<template>
    <article class="container mx-auto max-w-screen-xl pt-8 md:pt-16">
        <h1 class="title--berry text-5xl lg:text-hero2 mb-8 lg:mb-16 relative overflow-hidden pb-4">
            My Skills
        </h1>

        <section>
            <div class="flex flex-wrap -mx-4">
                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title border-l-4 border-lime pl-6">
                            Languages
                        </h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3, Sass/SCSS</li>
                            <li>Javascript (ES6+)</li>
                            <li>PHP, Twig</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            CSS Frameworks
                        </h3>
                        <ul>
                            <li>Tailwind CSS</li>
                            <li>Foundation</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            Libraries
                        </h3>
                        <ul>
                            <li>Vue.js</li>
                            <li>GSAP</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            CMS and Frameworks
                        </h3>
                        <ul>
                            <li>Nuxt.js</li>
                            <li>WordPress</li>
                            <li>Craft CMS</li>
                            <li>Drupal</li>
                            <li>Django</li>
                            <li>Prestashop</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            Dev tools
                        </h3>
                        <ul>
                            <li>Git</li>
                            <li>gulp.js</li>
                            <li>Grunt</li>
                            <li>Parcel.js</li>
                            <li>webpack</li>
                            <li>rollup.js</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            Best pratices
                        </h3>
                        <ul>
                            <li>Responsive web design</li>
                            <li>CSS: BEM, SMACSS<!--, ITCSS--></li>
                            <li>Usability</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            Sysadmin/OS
                        </h3>
                        <ul>
                            <li>macOS</li>
                            <li>Linux</li>
                            <li>Linux-based server setup (network services, LAMP, pm2)</li>
                            <li>Internet network infrastructure and services (IP, DNS, Web, Mail)</li>
                        </ul>
                    </div>
                </div>

                <div class="skills-block w-full md:w-4/12 lg:w-3/12">
                    <div class="block__inner">
                        <h3 class="block__title">
                            Soft Skills
                        </h3>
                        <ul>
                            <li>Critical and creative thinker</li>
                            <li>Team building and leadership attitude</li>
                            <li>Work independently or as part of a team</li>
                            <li>Never stop learning attitude</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="mt-8">
            <a href="/docs/resume_andrea_berardi.pdf" class="link--styled">Download my resume in PDF format</a>
        </div>
    </article>
</template>

<script>
import { gsap } from 'gsap'
import data from '~/assets/data/data.json'

export default {
    mounted () {
        const skillsBlockEls = document.querySelectorAll('.skills-block')
        const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6, ease: 'power4.out' } })

        for (const item of Array.from(skillsBlockEls)) {
            const itemTitle = item.querySelector('.block__title')
            const itemItems = item.querySelectorAll('li')
            const tlItem = gsap.timeline({ paused: true, defaults: { duration: 1.2, ease: 'expo.out' } })

            tlItem
            .to(itemTitle, { opacity: 1, y: 0 })
            .to(itemItems, { opacity: 1, y: 0, stagger: { each: 0.05 } }, '<+0.6')

            tl.add(tlItem, '<+0.1')
            tlItem.play()
        }

        tl.play()
    },

    head: {
        title: 'Skills | ' + data.seo.baseTitle,
        meta: [
            {
                name: 'description',
                hid: 'description',
                content: 'Andrea Berardi Web developer skills: HTML5, CSS3, Sass/SCSS, Javascript (ES6+), Vue.js, Nuxt.js, PHP, Twig, Wordpress, Python, Django'
            }
        ]
    }
}
</script>

<style scoped>
    .skills-block .block__title,
    .skills-block li{
        opacity: 0;
        transform: translateY(15px);
    }
</style>
