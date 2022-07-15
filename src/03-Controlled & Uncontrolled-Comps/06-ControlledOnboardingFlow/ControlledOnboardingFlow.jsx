/*

*/

import React from "react";

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex,onNext}) => {
    /*
    01 -  So in addition to having children and on finish as props, it's also going to take 
    a current index prop and an on next prop. All right, so you'll see how the onboarding 
    data and current index change here. We're going to remove these two state variables and 
    we can get rid of use state here as well. 
    */

    // const [onBoardingData, setOnBoardingData] = useState({});
    // const [currentIndex,setCurrentIndex] = useState(0);

    /*
    02 - The next thing we're going to do is, instead of having all this go to next logic 
    inside our controlled onboarding flow, we're going to move that up into the parent 
    component, which, in our case, is going to be the app component. So let's copy that, 
    and we'll paste it in here.
    */

    // const goToNext = stepData => {
    //     const nextIndex = currentIndex + 1;

    //     const updatedData = {
    //         ...onBoardingData,
    //         ...stepData,
    //     }
    //     console.log(updatedData);

    //     if(nextIndex < children.length)
    //         setCurrentIndex(nextIndex);
    //     else onFinish(updatedData);

    //     setOnBoardingData(updatedData);
    // }

    /*
    05 - then, what we're going to do is really simplify the go  to next function from our 
    controlled onboarding flow.  We're going to remove the entire body and change that to 
    simply call the on next function that we're getting passed in as a prop here. So we'll 
    say on next and call that with the step data. And this go to next, of course, is getting 
    passed to all the children, so that's going to work exactly the same way, and we should 
    be good to go now. If we go back to our app and click on Next, we should see that it 
    works just like before. 
    
    */

    const goToNext = stepData => {
        onNext(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if(React.isValidElement(currentChild))
        return React.cloneElement(currentChild,{goToNext})

    return currentChild;
}

/*
Now, the benefit of having this as a controlled component, as 
I mentioned before, is that it gives us much more control over certain changes that we 
might want to make to the onboarding flow. 
*/