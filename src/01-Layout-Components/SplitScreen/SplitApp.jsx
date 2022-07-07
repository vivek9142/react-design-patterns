import { SplitScreen } from "./SplitScreen";

//added left hand component andsent it to left prop in SplitScreen component
const LeftHandComponent = () =>(
    <h1 style={{
        backgroundColor:'green'
    }}>Left!</h1>
);
//added right hand component andsent it to right prop in SplitScreen component
const RightHandComponent = () =>(
    <h1 style={{
        backgroundColor:'red'
    }}>Right!</h1>
);

const SplitApp = () => {
    return (
    <SplitScreen 
    left={LeftHandComponent} 
    right={RightHandComponent}/>
    )
};

export default SplitApp;