# Controlled & Uncontrolled Components
Now, this is a very, very common pattern to find in React, both of these, both controlled and uncontrolled components,.

Uncontrolled components are basically React components where the component itself keeps track of all its own internal state and really the only time we get data out of that component is when some event occurs. 
So this would be in the case of, let's say, a form when the user hits the Submit button. In an uncontrolled form, that would be the only time we actually know what values the inputs of that form contain. 

Controlled components, on the other hand, are basically components where their parent is the one that takes care of keeping track of the state and that state is then usually passed through to a controlled component as a prop of some sort.

Let's take a look at what this might look like in code. 

For uncontrolled components, more often than not, the component itself again is going to be the one that keeps track of its own state. So what this is going to look like up here at the top, we see that this component has its own useState hook and the only prop that it's getting past is this onSubmit prop, which the parent component would pass a function to to actually get the values of that component's state when the submit event is triggered. 

```jsx
const MyComponent = ({ onSubmit }) =>{
    const [someState, setState] = useState(...);
    
    return ... ;
}

<MyComponent onSubmit={data => ... } />
```

With controlled components, on the other hand, we see that our component no longer has that useState hook. In other words, the state of that component is passed through as props. And, of course, there's other kinds of functions that this component is going to use, as well. 

```jsx
const MyComponent = ({ data, changeData, onSubmit }) =>{
    return ... ;
}

<MyComponent 
    data={...}
    onSubmit={() => ... }
    onSubmit={data => ... } />
```

***So one question that comes up when we talk about uncontrolled and controlled components is which one do we generally prefer?***

Well, more often than not, we're going to prefer controlled components and there are several reasons for this. The main reason is that it just makes our components more reusable and it also makes them a lot easier to test since we can just set up a component with the exact state we want, instead of having to create the component manually, make some changes, and then trigger some event to find out what's going on inside of it. 

So in other words, controlled components are just easier to test, they're more reusable, we more often than not will prefer them.
