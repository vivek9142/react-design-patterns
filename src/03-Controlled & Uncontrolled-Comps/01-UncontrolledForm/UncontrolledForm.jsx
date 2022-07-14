/*
let's start off here by creating an uncontrolled form and 
we'll see exactly how that works.
Basically, this uncontrolled form is going to defer most of its logic 
to the actual DOM elements underneath
*/
import React from 'react';

export const UncontrolledForm = () => {
    /*
    03 - Now in order to actually get those values from our form, 
    what we need to do is create some React Refs. And the way we do that is by saying 
    something like const name input equals React dot create Ref. And then what we do is we 
    pass this name input Ref as a prop to our input. So we would say something like ref 
    equals name, input, and then we do the same thing for the other inputs that we need to 
    get the value of. 
    */
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();
    /*
    02 - Basically, what we're going to do is our form is going to handle the on submit event. 
    And for this, we're going to add a handle, submit function up here in our component. 
    We'll say const handle submit. And inside here is the only place that we're really going 
    to do any kind of logic with the values from our form.
    */
    const handleSubmit = e => {
        console.log(
            nameInput.current.value,
            ageInput.current.value,
            hairColorInput.current.value
            );
            e.preventDefault();
    }
    return (
        // 01 - add form elements
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Name' ref={nameInput}/>
            <input type="number" name='age' placeholder='Age' ref={ageInput}/>
            <input type="text" name='hairColor' placeholder='Hair Color' ref={hairColorInput}/>
            <input type="submit" value='Submit'/>
        </form>
    )
}

/*
03 -  what makes this uncontrolled is that this component isn't really caring about 
what the values of each of these inputs is until some event occurs, right? Basically 
each of these inputs is just handling its own state until we submit the form. At which 
point we get all of the values.
*/