# Functional Programming
Functional Programming is a method of organizing code in a way that:
* minimizes mutation and state changes
* keeps function independent of external data (also known as Pure Functions)
* treats functions as first-class citizens

Some of the most common applications of functional programming in React are 
* Controlled Components - basically the idea of those is that we can get the component into any state we want simply by passing in the right props. So the component isn't keeping track of its own state, and that's a pretty functional concept there.
* Function components - There are two ways of defining components in React, either as classes or as functions. And as it happens, the act of defining our components as functions is itself, a very functional way of writing code. 
* Higher Order Components - Higher order components because they're functions that return other functions, which is an application of something called first-class functions. This is a great example, actually, of functional programming in React.
* Recursive Components -   Recursive components are basically components that use recursion in order to achieve a desired effect. 
* Partially Applied Components. - They basically allow us to take more general components and by passing in only a subset of that components' props, create more specific versions of that component.
* Component Composition - Basically, this is when we take several different components and are able to combine them into one component to achieve a desired effect. 

So those are some of the main examples of functional programming in React. 