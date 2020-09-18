<template>
    <article class="w-full px-4">
        <section class="text-center lg:text-left">
            <div class="container mx-auto flex items-center flex-col lg:flex-row pb-8">
                <div class="intro__image w-full lg:w-2/12">
                    <img :src="images.intro.src" :alt="images.intro.alt" class="rounded-full w-1/3 mb-4 lg:mb-0 lg:w-8/12 mx-auto">
                </div>

                <div class="intro__text">
                    <h1 class="berry-hero text-huge lg:text-hero2">
                        Hello!
                        <br>
                        I'm <span class="text-violet">Berry</span>.
                    </h1>
                </div>
            </div>
            <div class="container mx-auto flex items-center flex-col lg:flex-row ">
                <div class="lg:w-2/12" />
                <div>
                    <p>I'm a <span class="text-violet">Web Developer</span> located in Brescia (Italy).</p>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
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
    }
}
</script>
