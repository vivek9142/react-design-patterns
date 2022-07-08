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
                {/* 01- The first thing is that when a user clicks on our modal background, 
                we'll want it to hide the modal, right? This is pretty typical functionality 
                in most modals.  */}
                <ModalBody onClick={e=> e.stopPropagation()}>
                {/* 02- And lastly, for our modal body here, we need to add an onclick event. 
                And basically what this is going to do is call event.stop propagation. 
                And basically the reason that we have to do this is whenever the user clicks 
                on one of the children inside our component, we don't want that click event 
                bubbling up and closing the modal, right? If we left this off, that's exactly 
                what would happen whenever the user clicked on anything inside the modal, it 
                would close the modal.  */}
                    <button onClick={()=> setShouldShow(false)}>Hide Modal</button>
                    {children}
                </ModalBody>
            </ModalBackground>)}
        </>
    )
}