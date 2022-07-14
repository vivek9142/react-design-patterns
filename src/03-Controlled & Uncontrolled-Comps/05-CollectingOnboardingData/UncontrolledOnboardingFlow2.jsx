/*
Next let's take a look at how to work with this onboarding data thing. Basically the 
onboarding data is just going to contain the data that we've collected in each of our steps. 

*/

import React,{useState} from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish}) => {
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex,setCurrentIndex] = useState(0);

    /*
    01 - So the first thing we're going to do is modify our go to next function here so that 
    it allows each component, right, each step in the onboarding flow, to pass in some kind 
    of data to it. Okay, so we're going to have an argument here that will be called step data. 
    And the step data is basically just going to be an object that contains some keys and 
    values, whatever keys and values the current step needs to add to the state.
    */
    const goToNext = stepData => {
        const nextIndex = currentIndex + 1;

        const updatedData = {
            ...onBoardingData,
            ...stepData,
        }
        console.log(updatedData);

        if(nextIndex < children.length)
            setCurrentIndex(nextIndex);
        else onFinish(updatedData);

        /*
        02- the way this is going to work is each of our steps now is going to call go to next 
        with some object containing whatever data they want to add to the onboarding state. 
        So let's say that step one was supposed to collect the user's name. You can go ahead 
        and add an input there if you want, and a state. Just for simplicity's sake, what 
        I'm going to do is say anonymous function go to next, and we're going to pass an 
        argument there that says name John Doe. For step two, let's say that step two was 
        supposed to collect the user's age.
        */

        // setCurrentIndex(currentIndex + 1 );
        setOnBoardingData(updatedData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if(React.isValidElement(currentChild))
        return React.cloneElement(currentChild,{goToNext})

    return currentChild;
}
