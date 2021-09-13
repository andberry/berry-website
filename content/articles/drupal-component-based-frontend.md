---
title: "Component-Based Frontend in Drupal"
abstract: 'What is Component-Based Frontend Dev? Why it is worth using it? How to implement it in Drupal?'
createdAt: 20210826
createdAtDisplay: 'August 16, 2021'
published: true
tags: [frontend, cms]
---
## What is Component-Base Frontend Development
First of all, Component-Based is an approach to UI Design and Development.

Shortly, your website is no more thinked in terms of pages, but it's designed and implemented as a list of small and reusable blocks (components).

Your pages become "simply" compositions of these blocks, rearraging them in different order.

This is an example list of UI components:
- hero
- gallery
- card
- cards
- cards-carousel

The actual names of your components is up to you, designer and developer. They should be as more abstract as possible, but you can find a good compromise avoiding overthiking.

As I said before, Componend-Based approach is not only a dev-tech-code thing, but it first involves designers.

From the design point of view, the best is to have a complete and clear collection of all components involved in the project,
and then the actual design of pages.

As a developer you start coding first building the collection of all components and then you can go on building pages.

This paradigm is amazing when working with a CMS: actually implementation details depend on the CMS you're building the frontend for, but more or less this is the story: you first code the abstract components, then you attach dynamic data coming from the CMS and then you build the page.


## Why you should start using it
Switching to a Component-Based Design and Development paradigm means:
1. more collaboration between designers and developers at the early stages of the project;
2. developers can concentrate on implementing pieces of UI unchained from the underlying CMS used: your frontend code is less dependant by the CMS, so you're free to use whatever markup/classes/architecture you want;
4. you can implement a style guide shared between the team that can helps a lot in terms of keeping consistency inside the project
5. your client or content editor people will easily get a "flexible" page template rather than a set of prefixed page templates. I guess it's a great value added to the project in the sense that your clients will be able to build whatever kind of page they'd like in the future just using and rearranging the building blocks.



## How to implement Component-Based Frontend Development in Drupal
This is my way of implementing Component-Based Frontend Dev in Drupal.

1. **Markup (HTML)**: components are implemented as Twig files, and live in '/templates/components' folder inside your theme folder.
2. **CSS**: a separate scss file for each component (I love ITCSS architecture and I usually use gulp and sass to build the final compressed css file). I use BEM methodology for classes names.
3. **JavaScript** When required, JavaScript is implemented as ES6 module and bundled with other modules (using gulp, babel and rollup for the build). Using CSS classes with "js-" namespace is a great way to target blocks from JavaScript (eg. js-carousel)

This is an example of the markup of an hero component:
<pre><code class="twig">
&lt;section class="c-hero js-hero"&gt;
    &lt;div class="c-hero__bgimage" style="background-image: url('{{ image }}')" &gt;&lt;/div&gt;
    &lt;div class="c-hero__overlay"&gt;&lt;/div&gt;
    &lt;div class="c-hero__content"&gt;
        &lt;div class="o-container o-grid"&gt;
            {% if title %}
                &lt;h1 class="c-hero__title"&gt;{{ title }}&lt;/h1&gt;
            {% endif %}

            {% if text %}
                &lt;div class="c-hero__text"&gt;
                    {{ text }}
                &lt;/div&gt;
            {% endif %}
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/section&gt;

</code></pre>
As you can see this component is expecting to receive just 3 parameters/data/props: **image, title and text**.
I'm able to use the markup I want with all the classes and methodologies / architectures I want: I'm using BEM, with namespaces and in particular in this case I'm using the 'js-hero' class to target this block from JavaScript.

This is an excerpt of the related Scss file:
<pre><code class="css">
.c-hero {
    padding-top: $space_xl;
    padding-bottom: $space_2xl;
    position: relative;

    @include mq(lg) {
        padding-top: $space_2xl;
        padding-bottom: $space_3xl;
    }
}

.c-hero__bgimage {
    @include bg-image();
    @include abs-fill();
}

.c-hero__title {
    @include fs1();
    color: $color_white;
}


</code></pre>
## Connecting Components to Drupal
And now the most complicated part: passing data coming from Drupal to components as parameters/data/props.

Inside each specific Drupal Twig file I simply go with a Twig include statement passing an object containing relevant data coming from fields:

<pre><code class="twig">
{% include '@berrytheme/components/c-hero.html.twig' with {
    'title': content.field_title,
    'text': content.field_text,
    'image': content.field_image.0
}%}
</code></pre>

The "specific Drupal Twig file" depends on how you structured the content, but this can be easily done for:
- nodes templates (eg. node--page.html.twig)
- views templates (eg. views-view-fields--hero.html.twig)
- paragraphs templates (eg. paragraph--card.html.twig)

Often the tricky and time wasting part is to access field plain value.

If you've ever worked with Craft CMS you know that accessing field values with this CMS is straightforward thanks to their amazing Twig API, but in Drupal it's not so easy.

**Drupal makes the assumption you usually don't want plain value from a field to be used directly in Twig templates, but you usually want a formatted value or worse a prebuit markup depending on the field formatter and the templates coming from modules and base theme you're using**.

So, this is my short list of code snippets to access various fields type data:
### simple text field (plain or long/html)
<pre><code class="twig">
{{ content.field_content }}
</code></pre>

### single image field
<pre><code class="twig">
{{ content.field_image.0 }}
</code></pre>

### building a custom markup for a multi image field (pay attention: you have to use node.field_gallery and not content.field_gallery)
<pre><code class="twig">
    {% set cdata = [] %}
    {% for item in node.field_gallery %}
        {% set cdata = cdata|merge([
            {
                'image_src': item|file_uri|image_style('crop_gallery'),
                'image_alt': item.alt,
                'link': item|file_uri|image_style('wide')
            }
        ]) %}
    {% endfor %}

    {% include '@berry/components/c-gallery.html.twig' with {
        'title': content.field_title,
        'items': cdata
    }%}
</code></pre>

And then inside c-gallery.html.twig
<pre><code class="twig">
    {% for item in items %}
        &lt;a href="{{ item.link }}" class="c-gallery__link"&gt;
            &lt;img src="{{ item.image_src }}" alt="{{ item.image_alt }}" class="c-gallery__img"&gt;
        &lt;/a&gt;
    {% endfor %}
</code></pre>
### url and text from link field type
<pre><code class="twig">
&lt;a href="{{ content.field_link.0['#url'] }}" class="c-button"&gt;
    {{ content.field_link.0['#title'] }}
&lt;/a&gt;
</code></pre>

### File field with description
<pre><code class="twig">
{% set file_url = file_url(node.field_file.0.entity.uri.value) %}
{% set file_desc = (node.field_file.0.description) ? node.field_file.0.description : node.field_file.0.entity.filename.value %}
&lt;a href="{{ file_url }}" class="c-button--light"&gt;{{ file_desc }}&lt;/a&gt;
</code></pre>