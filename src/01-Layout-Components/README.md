#Layout Components
Layout components are components in React whose primary concern is helping us to arrange other components that we create on the page.  

Some examples of this that you're probably familiar with, and that we're going to be taking a look at throughout the rest of this sections are 
* split screens
* lists and items
* modals

So here's the basic idea of layout components and how we're going to go about creating them. Normally, when we create a component, let's say that we're creating a side navigation for our site, right? Just a bar on the left-hand side that contains some links. The normal way we would go about doing that, as you can see in this code on the left, is by actually including the div and the styles that go with that side nav inside the component itself. 

```jsx
<div styles={...}>
    <h1>Component Code ...</h1>
</div>
```

However, with layout components, what we do is we split the actual layout styles into their own component, and then simply display the component itself, in this case, the side nav, inside that layout component. And what this does is it separates the component itself from where the component's being displayed on the page, and it gives us a lot more flexibility for how we use it in the future. 

```jsx
<div styles={...}>
    {children}
</div>
```

```jsx
<>
    <h1>Component Code ...</h1>
<>
```

The main idea of layout components is that the main content components of our pages, shouldn't know or care where it is that they're actually being displayed on the page.