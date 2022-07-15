# Higher Order Components
Higher-order components are basically components that instead of just returning JSX, they return another component.

Let's take a look at the basics behind how it works. So as everyone should know, most components in React simply return some sort of JSX, which represents the DOM elements that that component wants to be rendered in its place. 

```jsx
const MyComponent = () =>{
    return <h1>I'm JSX</h1> ;
}
```
However, with higher-order components, as I said, they return a component which then returns JSX. So basically what we're doing here is adding an extra step inside of it. 


```jsx
const MyComponent = () =>{
    return SomeComponent ---> <h1>I'm JSX</h1> ;
}
```


Just remember one thing for now before we take a look at our examples, and that is that higher-order components are just functions that return components. 

***the next question is why would we want to actually create these higher-order components ?***

Well, one thing that higher-order components are used for is sharing behavior between several of our components, right? And this is actually a lot like what we saw with our container components, how we were able to wrap different types of components in the same container and have them behave somewhat similarly. 

Another thing that they're used for is to add extra functionality to an existing component of ours. So if we have an existing component that someone else built, what we can do is use higher-order components to add new functionality to that component.
