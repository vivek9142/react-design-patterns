/*
03 - the only prop that we're really going to care about for this container component 
is going to be the children prop. This is, again, all of the components that are inside 
the opening and closing tags of our current user loader component when we render it.
*/

import React,{ useState,useEffect } from "react"
import axios from 'axios';

export const CurrentUserLoader = ({children}) =>{
    const [user,setUser] = useState(null);

    useEffect(()=>{
        /* 04 - we're going to create an async function, and this is just a shorthand 
        version here for writing an anonymous async function. */
        
        (async ()=>{
            const response = await axios.get('/current-user');
            const currentUser = response.data;
            setUser(currentUser);
        })();
    },[]);

    /*
    05 - now that we have our user data loaded from the server, all we have to do is 
    pass this user state from our current user loader component down to all of its children 
    components, which we're getting in the prop here. 

    So, just to clarify what I mean by this, let's go to SIAPP and
    import our current user loader component. And we're also going to import our user info 
    component, from user info. Okay, and what we want to do here is say current user loader, 
    and inside the opening and closing tags of this component, we're going to have our user 
    info component.
    */

    /*
    07 - we're going to say react.children.map children, and for each child that is inside 
    this current user loader component, what we're going to do is say if that child is a 
    valid react element, this is just for safety here, we're going to say, if 
    react.isValidElement child, then we're going to return react.clone element child, and 
    the second argument to this function allows us to specify extra props that we pass in to 
    that child component. So in our case here, we're passing the user state that we have up 
    here into that user prop of that child component. Otherwise, if it's not a valid react 
    element, we're just going to return that child. 
    */

    return (
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child,{user});
                }

                return child;
            })}
        </>
    )

}