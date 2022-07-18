/*
Partially Applied Component is a way to allow ourselves to specify a set number of props on 
a component without having to create a new component like we did here with the danger button 
and a big success buttons.
*/

/*
01 - this higher order component is going to take a component as an argument and a second 
argument that says partial props and what this partial props thing is going to be is an 
object that contains some subset of the props that we want to pass to a given component.
*/

export const PartialHOC = (Component, partialProps) => {
    /*
    02 - So essentially what this will do is allow us to specify some of the props for a 
    component ahead of time, which is essentially what we were doing in our composition 
    example here. 
    */
    return props =>{
       return <Component {...partialProps} {...props}/>  
    }
}

/*
03 - copy Button ex from composition ex.
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
04 - let's say that we want to create the same danger and success buttons inside of here.
*/
export const DangerButton = PartialHOC(Button,{color:'red'});
export const BigSuccessButton = PartialHOC(Button,{color:'green',size:'large'});