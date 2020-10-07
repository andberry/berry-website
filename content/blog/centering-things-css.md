---
title: 'Centering Things in CSS'
abstract: 'Yet another article about different ways to center things in CSS: position absolute + translate, Flexbox, CSS Grid'
createdAt: 20201002
createdAtDisplay: 'October 2, 2020'
---
As usual, as web developers, we have different ways to do the same thing, and centering object is a topic we face on daily basis. Fortunately we've moved from the prehistoric age of tables and float and today we can easily get support from standardized useful technologies that dramatically simplifies our job.

Yes, I'm talking about tranform properties and Flexbox and Grid CSS mmodules.


## Position absolute + translate
<pre><code data-language="css">
.container{
    position: relative;
}
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</code></pre>

We can create a usefull mixin to be used on .content:
<pre><code data-language="scss">
@mixin berry-abs-center(){
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</code></pre>


## Using Flexbox
<pre><code data-language="scss">
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</code></pre>


## Using CSS Grid
<pre><code data-language="scss">
.container{
    display: grid;
    align-items: center;
    justify-items: center;
}
</code></pre>
