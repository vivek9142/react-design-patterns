/*
this print props thing is going to be a higher order component.

First off this is going to be a function that takes a component as an argument. 
Now, one thing that I want to point out that higher order components don't normally follow 
the same convention as regular react components, having a capital letter at the beginning of 
their variable name. And the reason for that is that with higher order components, we almost 
never actually display them inside JSX directly,
*/

export const printProps = Component => {
    return (props) => {
        console.log(props);
        return <Component {...props}/>
    }
}

/*
01 - so essentially this unnamed component here that we're returning from print props is 
simply going to display the component that we passed in when we first called our higher 
order component here. Now, in order to make this print props higher order component live 
up to its name, what we're going to do is print out the props inside this component that 
we're returning. so we're logging props here
*/