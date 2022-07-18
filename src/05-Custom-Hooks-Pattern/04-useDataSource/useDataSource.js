/*
So we made our custom hook, very, very reusable and flexible by creating this useResource 
custom hook. What we're going to do here is take it one step further and allow ourselves to 
specify any data source for our components, with a custom hook. This is going to be very 
similar to what we did earlier with our container components.

01 - we're going to start off by copying and pasting the custom hook useResource.
*/

import { useState, useEffect } from "react";


export const useDataSource = getResourceFunc => {
    const [resource,setResource] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const result = await getResourceFunc();
            setResource(result);
        })();
    },[getResourceFunc]);

    return resource;
}