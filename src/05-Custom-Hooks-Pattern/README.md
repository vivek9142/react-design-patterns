# Custom-Hooks-Pattern

Custom Hooks are basically when instead of just using the basic hooks that React provides us with, such as useState and useEffect, we actually combine these hooks into our own new hooks.

So, what this might look like is, let's say we want our component to have access to products from the server. Well, we could either create the product state and actually load the products inside the component itself, or we could create our own custom useProducts hook that encapsulates this functionality. 

One thing to note is that custom hooks do have to start with the word use, okay? That's just something that React requires us to do and it has to do with the way that hooks work behind the scenes.

```jsx
const products = useProducts();
```

They are basically used for sharing complex behaviour between multiple components(much like HOCs and container components)