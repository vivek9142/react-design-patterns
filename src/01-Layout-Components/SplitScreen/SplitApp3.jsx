import { SplitScreen } from "./SplitScreen3";

// const LeftHandComponent = () =>(
//     <h1 style={{
//         backgroundColor:'green'
//     }}>Left!</h1>
// );

// const RightHandComponent = () =>(
//     <h1 style={{
//         backgroundColor:'red'
//     }}>Right!</h1>
// );

/*
00 - The next optimization that I'm going to show you is that instead of passing in our 
left-hand component and right-hand component as props, it's possible with layout components 
to make them accept their children as children in the sense of react. 

Instead of passing left and right as props, okay, we're going to keep our left weight and 
right weight here, instead of passing our left and right components as props, we're actually 
going to put them inside our split-screen component as children. 
*/

// const SplitApp = () => {
//     return (
//     <SplitScreen leftWeight={1} rightWeight={3}>
//         <LeftHandComponent />
//         <RightHandComponent />
//     </SplitScreen>
//     )
// };

// export default SplitApp;



/*
02 - we can see now, if we go back over to our app, nothing has changed except that this is 
generally considered to be more developer friendly, right? Being able to pass in components 
as children to a layout component instead of having to pass them in as props.
*/

const LeftHandComponent = ({message}) =>(
    <h1 style={{
        backgroundColor:'green'
    }}>{message}!</h1>
);

const RightHandComponent = ({message}) =>(
    <h1 style={{
        backgroundColor:'red'
    }}>{message}!</h1>
);

const SplitApp = () => {
    return (
    <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent message='Hello'/>
        <RightHandComponent message='Shaun'/>
    </SplitScreen>
    )
};

export default SplitApp;

/*03 - if we were rendering these components inside our split-screen component and passing them 
through as props like before, we would have to actually pass those name and message props 
through our split-screen component to our left and right components respectively. So we 
would have to add something like this and say, right props equals blah, blah, blah. 
That would be an object. And the same thing with left props. And we would have to pass 
those directly to here. So this is just a much easier way to do it right. Saying left and 
right. And that allows us to pass props directly to it. And it's just considered to be a 
little more readable that way. 
*/