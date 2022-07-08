# Container Components
Container components are basically React components that take care of all of the data loading and other data management for their child components.

In order to show you what I mean with this, let's imagine that we have the setup that you see here, a container component with several child components inside of it. 

```jsx
const Child = () =>{
    //load data
    return (
        //display the data
    );
}
```

Well, normally what you would do, if you're like most beginning to Intermediate React Developers is you would just have each of those child components load their own data and then display it, right? So up where it says low data, you probably have a useState hook and a useEffect hook and use something like Axios or Fetch to get data from a server. 


Now, the problem with this is that a lot of the time we need our child components to be able to share that logic. And the way that container components solve that problem is by splitting that logic out into its own component, which is the container and the container then takes care of loading that data and passes it automatically to the children component.

```jsx
const Container = () => {
    //load the data

    return (
        //pass the data to children
    );
}
```

```jsx
const Child = ({data}) => {
    //load the data

    return (
        //display the data
    );
}
```

The Main Idea of Container Components is that Our Components shouln't know where their data
is coming from or how to manage it.
