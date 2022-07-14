// import {UncontrolledForm} from "./01-UncontrolledForm/UncontrolledForm";
// import { ControlledForm } from "./02-ControlledForm/ControlledForm";
import { useState } from "react";
import { ControlledModal } from "./03-ControlledModals/ControlledModal";
const App = () => {
    const [shouldShow,setShouldShow] = useState(false);

    return(
        <div>
            <h1>
            03 - Controlled & Uncontrolled Components
        </h1>

        {/* <UncontrolledForm/> */}
        {/* <ControlledForm/> */}
        <ControlledModal shouldShow={shouldShow} onRequestClose={()=>{setShouldShow(false)}}>
            <h1>Hello from App</h1>
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

export default App;

//