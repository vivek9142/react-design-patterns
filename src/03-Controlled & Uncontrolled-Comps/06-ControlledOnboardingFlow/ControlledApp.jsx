/*
 Let's take a look at how we can convert this component into a controlled component. So the 
 first thing we're going to do is create a new file for our controlled onboarding flow 
 component, which we'll, of course, call ControlledOnboardingFlow.js. 

 Just like we saw with our modal component, the main change we're going to make here is, 
 instead of keeping track of the onboarding data and current index inside the onboarding 
 flow itself, we're going to pass those things in as props from the parent component. 
 So in addition to having children and on finish as props, it's also going to take a current 
 index prop and an on next prop.
*/

/*
06 - gives us much more control over certain changes that we might want to make to the 
onboarding flow. So as an example, we're collecting the user's name, age, and hair color. 
What if, based on their age, we wanted to tell the user whether they qualified for our 
site's senior discount or something like that. Well, here's what that would look like. 
I'm going to add another step in between the old step three and step two, we're going to 
change this last one to step four. 
*/

import { useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

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
        <p>Congratulations! You qualify for our senior discount</p>
        <button onClick={()=> goToNext({hairColor:'brown'})}>
            Next
        </button>
    </>
);

const Step4 = ({goToNext}) => (
    <>
        <h1>Step 4</h1>
        <button onClick={()=> goToNext({})}>
            Next
        </button>
    </>
);


const BoardingApp = () => {

    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex,setCurrentIndex] = useState(0);

    /*
    03 -  So let's copy that, and we'll paste the gotonext in here. And we're also going to 
    need to add some state variables to our app component. 
    */

    /*
    04 - We're going to pass in the current index, since we have that as a state variable 
    now in our app component, so current index equals current index. Oops, I imported 
    something accidentally. And we're also going to pass on next to the on next prop of our 
    controlled onboarding flow.
    */
    const onNext = stepData => {
        setOnBoardingData({...onBoardingData,...stepData});
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext} onFinish={data => {
            console.log(data);
            alert('onboarding complete');
        }}>
            <Step1/>
            <Step2/>
            {onBoardingData.age >=62 && <Step3/>}
            <Step4/>
        </ControlledOnboardingFlow>
    )
}

export default BoardingApp;