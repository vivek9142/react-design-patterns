/*
06- So we refactored our current user loader into a more generic user loader that 
allows us to load different users instead of just the current user from our server. 
And this is a big step up from what we had before, but we can still take it a little further. 
What we're going to do, is instead of having a container component that loads a specific type 
of resource, we're going to have a generic component that allows us to load any type of 
resource from the server. So, here's what this is going to look like. 

We're going to start off by creating a new component and we're going to call this 
component resource loader, and we're actually going to copy some of our user loader code 
into here. 
*/

import React,{ useState,useEffect } from "react"
import axios from 'axios';

/*
01 - the first thing we're going to do with our resource loader component is instead of 
having a user ID as part of the props, we're going to have two other props. 
One is going to be the resource URL that we want to load data from that would be slash users 
slash user ID. We're going to have the parent component pass that in instead. 
And the second one is going to be the resource name.
*/
export const ResourceLoader = ({resourceUrl,resourceName,children}) =>{
    const [state,setState] = useState(null);

    /*
    02 -  Since it's no longer dealing just with users, we're just going to call the state 
    and set state. And instead of having the URL hard-coded here inside axios.get, 
    we're going to just change that to axios.get resourceURL.
    */
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(resourceUrl);
            setState(response.data);
        })();
    },[resourceUrl]);

    return (
        <>
        {/* 03 - then we're going to keep this react.children.map thing, pretty much the 
        same, except instead of just passing through a user prompts since user no longer 
        exists, we're going to pass through a prop with the name equal to the resource name 
        that we passed in. and then the current value of the state. */}

            {React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child,{[resourceName]:state});
                }

                return child;
            })}
        </>
    )

}
