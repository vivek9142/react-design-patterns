/*
we've seen how to make the concept of container components much more generic by creating 
this ResourceLoader component. That basically can load any resource we want from the server 
and automatically pass it to its child components.

it could load pretty much any other server resource that we wanted as well. Now, honestly, 
I would consider this a good stopping point for most applications. But just for fun, we're 
going to see how we might take this concept one step further and have a component that 
doesn't even know where its data is coming from.

this is going to be basically a container component, just like ResourceLoader. Except 
instead of starting off with the idea that we're going to be loading some resource from a 
URL on the server, this data source component, isn't going to know exactly where its data 
is coming from.

01 - copy code from ResourceLoader
*/

import React,{ useState,useEffect } from "react"
// import axios from 'axios';

/*
02 - Instead of having this resource URL prop, we're going to have a prop called 
getDataFunction. And this is basically just going to be a function that will return 
whatever data the child components of our data source need.
*/
export const DataSource = ({getDataFunc = () => {},resourceName,children}) =>{
    const [state,setState] = useState(null);

    useEffect(()=>{
        (async ()=>{
            /*
            03 - instead of saying axios.get and passing a resource URL, And then what 
            we're going to do is instead of specifically using Axios here to load data 
            from our server, we're going to do something a little bit more generic.
            */
            // const response = await axios.get(resourceUrl);
            // setState(response.data);

            const data = await getDataFunc();
            setState(data);
        })();
    },[getDataFunc]);

    return (
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child,{[resourceName]:state});
                }

                return child;
            })}
        </>
    )
}
