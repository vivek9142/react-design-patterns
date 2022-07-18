/*
Composition is the functional programming analog to inheritance in object oriented 
programming. Now, obviously both have their differences, but we're going to take a look at 
what composition looks like here in a React app.
*/

export const Button = ({size,color,text, ...props}) =>{
    return (
        <button style={{
        padding:size === 'large' ? '32px' : '8px',
        fontSize: size==='large' ? '32px' : '16px',
        backgroundColor:color,
        }} {...props}>{text}</button>
    )
}

/*
01 -  Well, what composition would allow us to do is actually create different versions of 
this button by creating components that use it.  Let's say that we want to have both a danger 
button and a success button in our app. Instead of having to use our button all the time and 
specify that size equals large and color equals red, let's say. 
all we would have to do in the rest of our code is simply display the danger button and 
that would automatically have color set to red,
*/

export const DangerButton = props => {
    return (
        <Button {...props} color='red'/>
    )
}

export const BigSuccessButton = props => {
    return (
        <Button {...props} size='large' color='green'/>
    )
}