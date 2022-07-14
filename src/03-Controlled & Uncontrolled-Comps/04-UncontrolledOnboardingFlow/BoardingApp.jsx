import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

/*
04 -  So basically what this is going to look like is inside our uncontrolled onboarding 
flow, we're going to have several other components each of which represents a step in the 
onboarding flow.
*/
// const Step1 = () => <h1>Step 1</h1>;
// const Step2 = () => <h1>Step 2</h1>;
// const Step3 = () => <h1>Step 3</h1>;

/*
7- The approach that I'm going 
    to take is to pass a prop to each of the children that they can then access. This is 
    similar to what we did with container components. So basically each of these components 
    is going to have access to a prop called something like go to next, which will be a 
    function that they can call to tell the uncontrolled onboarding flow to go to the next 
    step in the onboarding process, 
*/
const Step1 = ({goToNext}) => (<><h1>Step 1</h1><button onClick={goToNext}>Next</button></>);
const Step2 = ({goToNext}) => (<><h1>Step 2</h1><button onClick={goToNext}>Next</button></>);
const Step3 = ({goToNext}) => (<><h1>Step 3</h1><button onClick={goToNext}>Next</button></>);

const BoardingApp = () => {

    return (
        <UncontrolledOnboardingFlow>
        {/* 05 -  So we're going to basically display these step components inside the 
        uncontrolled onboarding flow like this step one, step two, and step three
        And our uncontrolled onboarding flow is basically going to control, which of these 
        components actually gets displayed on the page. In other words if the current index 
        is one, it's going to display step two. If the current index is zero it'll display, 
        step one,  */}
            <Step1/>
            <Step2/>
            <Step3/>
        </UncontrolledOnboardingFlow>
    )
}

export default BoardingApp;