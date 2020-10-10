---
title: 'var, let, const: declaring variables in Javascript'
abstract: ''
createdAt: 20201006
createdAtDisplay: 'October 6, 2020'
---
In Javascript we can declare variables using <strong>var</strong>, <strong>const</strong> and <strong>let</strong>


## var
<strong>var</strong> is the old way (pre es6/es2015) of declaring variables. It's a weak variable declaration because it doesn't help us understanding if binding could change durign execution.


## consts
<strong>const</strong> stands for constant. We use const for bindings that will not change during execution.

Pay attention: this means that identifiers declared with const cannot be re-assigned, but in case of objects assignmment it's allowed to change it's attributes after binding:
<pre><code class="javascript">
const str = "foobar"
str = "barfoo"
Uncaught TypeError: Assignment to constant variable.

const obj = { foo: 'foo', bar: 'bar' }
obj = { foo: 'foo2', bar: 'bar2' }
Uncaught TypeError: Assignment to constant variable.
obj.foo = 'foo3'
obj
{ foo: 'foo3', bar: 'bar' }
</code></pre>

## let
We use let to declare bindings that could chage during execution (eh a loop counter, or a variable used in math).


## let, const, var and variable scoping
Variables declared with <strong>var</strong> are only function-scoped or globally-scoped.

On the other end, the scope of variables declared with <strong>const</strong> and <strong>let</strong> is the enclosing block (code between curly braces { } ) and not the whole function.


## Conclusion
* I don't use <strong>var</strong> anymore
* I use <strong>const</strong> almost for everything
* I use <strong>let</strong> only when it's required that binding can change during execution (eg. loop variables)
