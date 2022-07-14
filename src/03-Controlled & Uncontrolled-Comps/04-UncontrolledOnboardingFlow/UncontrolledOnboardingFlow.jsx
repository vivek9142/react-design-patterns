/*
the example of controlled and uncontrolled components that we're going to take a look at is 
onboarding flows. Now an onboarding flow is basically just a component that displays 
different steps in an onboarding process. So step one might ask for the user's name, step two 
might ask for their age, step three might ask for their billing information, et cetera.
*/

import React,{useState} from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish}) => {
    /*
    01 - This state variable is basically going to contain all of the data that we collect 
    from the user over the course of their onboarding. It's basically going to be an object 
    with keys as you'll see in a minute. 
    */
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex,setCurrentIndex] = useState(0);

    /*
    08 -And the way that these components are actually going to get this go-to next prop
     is inside our uncontrolled onboarding flow we're going to define it. 
    */
    const goToNext = () => {
        setCurrentIndex(currentIndex + 1 );
    }

    /*
    02 -  Basically, this just covers us in the case that children is only a single element 
    where children wouldn't actually be an array, and then we're going to get the current 
    index from children, 
    */
    const currentChild = React.Children.toArray(children)[currentIndex];

    /*
    06 -  So now that we know how our uncontrolled onboarding flow component is actually going to 
    work with other components, basically all we need to do is return the current child.
    
    Now, the problem with this, this will work if we take a look at this, we'll see that 
    it's displaying only step one, right? Since the current index starts off on zero, but 
    the components themselves steps one, two, and three, don't actually have any way to go 
    to the next step. 
    So there's two ways we could do this one way would be to simply give our 
    uncontrolled onboarding flow. The ability to do that.So we could say button previous, 
    and button next, okay. And what that would do essentially is give us the ability to 
    change those there. Basically either by adding one to the current index or subtracting 
    one from the current index, okay. 
    
    But that's not the approach that I'm actually going to take.
    */

    // return (
    //     <>
    //         {currentChild}
    //         <button>Previous</button>
    //         <button>Next</button>
    //     </>
    // );

    /*
    09 -  if React.is valid element, current child, we want to clone that child, and 
    add this go to next function as a prop. And then we'll say return current child. 
    */
    if(React.isValidElement(currentChild))
        return React.cloneElement(currentChild,{goToNext})

    return currentChild;
}

/*
03 - before we move on to defining what the JSX of our component is actually going to look 
like, let's talk about how we're actually going to use this uncontrolled onboarding flow 
component, basically what it's going to look like. 
So basically what this is going to look like is inside our uncontrolled onboarding flow, 
we're going to have several other components each of which represents a step in the 
onboarding flow. So what I'm going to do is just define a few very simple components. 
*/