import { SplitScreen } from "./SplitScreen2";

const LeftHandComponent = () =>(
    <h1 style={{
        backgroundColor:'green'
    }}>Left!</h1>
);

const RightHandComponent = () =>(
    <h1 style={{
        backgroundColor:'red'
    }}>Right!</h1>
);

/*
02 - We're going to open up our SplitApp component now and add these two other props that 
we just created. So we're going to say left weight, and let's say that we want the left-hand 
side to be one third as large as the right hand side. Well, since the weight props that 
we've defined pretty much reflect how Flexbox works. Our left weight is going to be one 
and our right weight will be three.
*/
const SplitApp = () => {
    return (
    <SplitScreen 
    left={LeftHandComponent} 
    right={RightHandComponent}
    leftWeight={1}
    rightWeight={3}    
    />
    )
};

export default SplitApp;

/*
03 - We see that the left-hand side of our split screen is now a third as wide as the 
right-hand side. So this would be good if we wanted to display something like a side nav of 
some sort. So we've seen how to add weight to the different items in our split-screen 
component. And the next optimization that I'm going to show you is that instead of passing 
in our left-hand component and right-hand component as props, it's possible with layout 
components to make them accept their children as children in the sense of react. 
*/

