
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

export const ControlledModal = ({shouldShow, onRequestClose, children}) => {
    /* 01- 
    the main change we're going to make here is instead of having our ControlledModal use 
    this useState hook to determine whether or not it should show, we're going to pass that 
    in as a prop, so we'll say shouldShow, and remove the useState hook. the main change 
    we're going to make here is instead of having our ControlledModal use this useState hook 
    to determine whether or not it should show, we're going to pass that in as a prop, 
    so we'll say shouldShow, and remove the useState hook. 
    */
    // const [shouldShow, setShouldShow] = useState(false);

    /*
    02 -  basically, what this is going to do is shouldShow is going to be a boolean that's 
    passed in from the parent component. So the parent component is going to control whether 
    the ControlledModal is shown or not, hence the name Controlled. And this onRequestClose 
    function is going to allow the modal itself to request that the parent component stop 
    showing it. Now, that will obviously only be one way that the parent component can stop 
    showing it. The parent component will have the ultimate say over whether the modal shows 
    up or not. 
    */

    return (
        <>
        {/* 03 - we don't even need this button anymore really since the parent component 
        will be the one that displays the button that will actually show the modal */}

            {/* <button onClick={()=> setShouldShow(true)}>Show Modal</button> */}
            { shouldShow && (
                <ModalBackground onClick={onRequestClose}>
                <ModalBody onClick={e=> e.stopPropagation()}>
                    <button onClick={onRequestClose}>Hide Modal</button>
                    {children}
                </ModalBody>
            </ModalBackground>)}
        </>
    )
}