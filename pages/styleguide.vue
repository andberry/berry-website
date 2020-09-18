<template>
    <article class="container mx-auto max-w-screen-md">
        <h1 class="berry-title text-hero2 mb-24">
            How to create your first VPS on DigitalOcean
        </h1>
        <h2 class="berry-title text-5xl heading--title">
            Heading level 2
        </h2>

        <pre><code data-language="javascript">import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
</code></pre>

<pre><code data-language="json">{
    "socialsLinks": {
        "twitter": "https://twitter.com/andreaberardi82",
        "linkedin": "https://www.linkedin.com/in/andrea-berardi/"
    },

    "footerLinks": {
        "nuxt": "https://www.nuxtjs.org/",
        "tailwind": "https://tailwindcss.com/"
    }
}
</code></pre>

<pre><code data-language="css">.hljs{
    @apply py-8 !important;
    @apply px-8 !important;
    @apply my-8;
    @apply text-base;
    @apply font-exo2;
}

@tailwind components;
@tailwind utilities;

@layer utilities {
    .text-shadow {
        text-shadow: 4px 4px 1px theme('colors.violet');
    }

    .bg-overlay {
        background: rgba(0, 0, 0, 0.95);
        background: linear-gradient(90deg, theme('colors.black') 50%, theme('colors["black-rgba-75"]') 100%);
    }
}
</code></pre>

        <p>
            Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolorem, velit quasi odio molestias nesciunt, rem, error atque at deserunt esse natus eligendi voluptatum earum fuga, totam suscipit ratione quidem!
        </p>
        <p>
            Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quidem, iure, sapiente molestias tempore ullam nihil quia aperiam impedit, cumque id adipisci perferendis. Quod impedit, sit eveniet dolorum nulla totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quidem, iure, sapiente molestias tempore ullam nihil quia aperiam impedit, cumque id adipisci perferendis. Quod impedit, sit eveniet dolorum nulla totam.
        </p>

        <h2 class="berry-title text-5xl heading--title mt-16">
            Heading level 2
        </h2>
        <p>
            Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolorem, velit quasi odio molestias nesciunt, rem, error atque at deserunt esse natus eligendi voluptatum earum fuga, totam suscipit ratione quidem!
        </p>

        <h2 class="berry-title text-4xl heading--title mt-16">
            Heading level 3
        </h2>
        <p>
            Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolorem, velit quasi odio molestias nesciunt, rem, error atque at deserunt esse natus eligendi voluptatum earum fuga, totam suscipit ratione quidem!
        </p>
    </article>
</template>

<script>
import hljs from 'highlight.js'
export default {
    mounted () {
        console.log(hljs)
        for (const item of Array.from(document.querySelectorAll('pre code'))) {
            console.log(item)
            hljs.highlightBlock(item)
        }
    }
}

</script>
