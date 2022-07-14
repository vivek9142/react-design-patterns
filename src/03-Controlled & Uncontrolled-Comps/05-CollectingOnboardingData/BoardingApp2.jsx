import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow2";

/*
03- So we have our three steps. Each one of those is adding its own data to the onboarding 
state. 
*/

const Step1 = ({goToNext}) => (
    <>
        <h1>Step 1</h1>
        <button onClick={()=> goToNext({name: 'John Doe'})}>
            Next
        </button>
    </>
);

const Step2 = ({goToNext}) => (
    <>
        <h1>Step 2</h1>
        <button onClick={()=> goToNext({age: 100})}>
            Next
        </button>
    </>
);

const Step3 = ({goToNext}) => (
    <>
        <h1>Step 3</h1>
        <button onClick={()=> goToNext({hairColor:'brown'})}>
            Next
        </button>
    </>
);


const BoardingApp = () => {

    return (
        /*
        04 - And the last thing we're going to do is pass a prop to uncontrolled onboarding 
        flow called on finish.. And basically when our flow finishes, what we're going to 
        do is just console log all of the data. And maybe we'll also display an alert saying 
        that you finished onboarding
        */ 
        <UncontrolledOnboardingFlow onFinish={data => {
            console.log(data);
            alert('onboarding complete');
        }}>
            <Step1/>
            <Step2/>
            <Step3/>
        </UncontrolledOnboardingFlow>
    )
}

export default BoardingApp;