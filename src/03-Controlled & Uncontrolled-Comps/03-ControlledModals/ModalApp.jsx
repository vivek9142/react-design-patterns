import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

const ModalApp = () => {
    const [shouldShow,setShouldShow] = useState(false);

    return(
        <div>

        <ControlledModal shouldShow={shouldShow} onRequestClose={()=>{setShouldShow(false)}}>
            <h1>Hello from ModalApp</h1>
        </ControlledModal>
        <button onClick={()=> setShouldShow(!shouldShow)}>
            {shouldShow ? 'Hide Modal':'Show Modal'}
        </button>
        {/*  So that's what a controlled version of a modal is going to look like. 
        Basically, the modal itself isn't taking care of handling anything about its state. 
        The parent component is the one doing all of that. */}
        </div>
    )
}

export default ModalApp;

//