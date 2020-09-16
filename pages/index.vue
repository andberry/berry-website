<template>
    <article class="w-full px-4">
        <section class="text-center lg:text-left">
            <div class="container mx-auto flex items-center flex-col lg:flex-row ">
                <div class="intro__image w-full lg:w-2/12">
                    <img :src="images.intro.src" :alt="images.intro.alt" class="rounded-full w-1/3 mb-4 lg:mb-0 lg:w-8/12 mx-auto">
                </div>

                <div class="intro__text">
                    <h1 class="berry-title text-hero3 lg:text-hero2">
                        Hello!
                        <br>
                        I'm <span class="text-violet">Berry</span>.
                    </h1>
                </div>
            </div>
        </section>

        <section>
            <div class="container mx-auto flex pt-8">
                <div class="w-0 lg:w-2/12"></div>
                <div class="px-2 w-full lg:w-auto">
                    A <span class="text-violet">Web developer</span> based in Brescia (Italy)
                </div>
            </div>

            <div class="container mx-auto ">
                <h1 class="berry-title text-6xl">
                    Lorem ipsum dolor sit amet
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia culpa impedit doloremque unde quisquam illo, expedita harum accusamus minus perspiciatis ipsum quas asperiores sunt qui itaque totam. Cum, eos, qui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore placeat non dignissimos, earum repudiandae culpa necessitatibus totam expedita, quam itaque accusamus error. Illum, suscipit vero porro unde rerum dolore ipsam.</p>
            </div>

            <div class="container mx-auto">
                <h1 class="berry-title text-5xl">
                    Consectetur adipisicing elit. Totam voluptatum odio molestiae veritatis expedita
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia culpa impedit doloremque unde quisquam illo, expedita harum accusamus minus perspiciatis ipsum quas asperiores sunt qui itaque totam. Cum, eos, qui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore placeat non dignissimos, earum repudiandae culpa necessitatibus totam expedita, quam itaque accusamus error. Illum, suscipit vero porro unde rerum dolore ipsam.</p>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    layout: 'homepage',

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
