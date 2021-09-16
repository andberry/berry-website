---
title: 'BEM, CSS Namespaces and ITCSS'
abstract: "How to make frontend code more readable and maintaininable, because CSS is easy but looking after it is not"
createdAt: 20210914
createdAtDisplay: 'September 14, 2021'
published: true
---
> because writing CSS is easy; looking after it is not.
>
> -- <cite>[csswizardry](https://twitter.com/csswizardry)</cite>

Yes, even though there are currenly lot of tools involved in CSS landscape nowadays, it's a pretty easy language to start with, and due to its design (pitfalls ?) it's also pretty easy to early find yourself struggling with naming conventions, and methodology that help you make it more maintainable and scalable.

Basically HTML and CSS shares classes (and ids) to shape the final UI and reusing classes being sure to do exactly what you want, where you want, without introducing problems in a totally different part of the ui requires you, developer, to be really accurate/diligent.

Methodologies, naming conventions and architectures help you a lot.

This is what currenly helps me a lot.

## BEM
Block Element Modifier is a methodolgy, or a naming convention suggestion that help you giving classes a role, relationship, responsibilities and states in a clear way.
Block: the parent, the standalone entity that has a meaning by itself (top level abstraction of your component)
Element: a part of the block, without meaning standalont by itself (a child item)
Modifier: a flag, a variation, a state to a block or element

Here is an example of BEM applied to a button
<code><pre class="html">
```
<a class="button button--big">
    <span class="button__icon"></span>
</a>
```
</pre></code>

<code><pre class="css">
```
.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 8px 12px;
}
.button__icon {
    margin-right: 6px;
    font-size: 0.5rem;
}
.button--big {
    padding: 12px 16px;
    font-size: 20px;
}
```
</pre></code>

## CSS Namespaces

## ITCSS

## Links
https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
