/*
The next example of uncontrolled and controlled components that we're going to take a look 
at is modals. Now, in this case, we actually already have an uncontrolled version of a modal 
component from earlier in the course when we created this modal. 

Now, this modal is uncontrolled. And the reason we say that is that the modal itself is the 
one that's controlling whether or not it's shown, and it also controls when it's hidden. 
And there's a few problems with this setup. The main problem is that none of the other 
components, right? For example, if we want to display this in our App component, which we 
can do by importing it here and displaying it here, refresh it there and we can take a 
look at it, okay? 

The problem is that the parent component really has no control over what this modal is doing.
So let's say that we had another button on our page that we wanted to display the modal, 
right? Let's say that we had a button under here that says Show Modal or something like that. 
Well, there's really no way for this button now to make this modal display itself because, 
again, the modal is the only one that has control over its state. So what we're going to do 
here is take a look at how to transform this modal into a controlled modal that the parent 
component can actually manipulate in the way that it needs to.
*/

import { useState } from "react";
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;

export const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
            <button onClick={()=> setShouldShow(true)}>Show Modal</button>
            { shouldShow && (
                <ModalBackground onClick={()=> setShouldShow(false)}>
                <ModalBody onClick={e=> e.stopPropagation()}>
                    <button onClick={()=> setShouldShow(false)}>Hide Modal</button>
                    {children}
                </ModalBody>
            </ModalBackground>)}
        </>
    )
}