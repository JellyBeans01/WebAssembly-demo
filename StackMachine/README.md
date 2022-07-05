# StackMachine

Here we will look deeper into the internals of WebAssembly. In order to do that, we will need to understand the concepts of Stacks and StackMachines.

Why is this important?

The answer is simple: WebAssembly iself, underneath the hood, is a StackMachine.

## What is a Stack

As the name suggests, it is a data structure that is LIFO (Last In First Out)

For example, we can mutate the stack by adding and popping numbers on and off the stack.
Let's say we want to add 20 and 30 together.

What will happen is:
1. Add 20 on the stack
2. Add 30 on the stack
3. Use the mathematical function, this will
    - pop 30 from the stack (30 first because of LIFO)
    - pop 20 from the stack
    - push 50 on the stack (We will no longer have 20 nor 30 on the stack)
    - If we want to return this value, the function will just pop the value of 50 off the stack

That is basically it!

## Examples

Let's create some simple javascript mathematical functions inside a file called `math.js`
these functions will not look like your normal JS functions as they will be stack implementations.
We do this because it will make it easier to understand what is going on when we write WAT code.