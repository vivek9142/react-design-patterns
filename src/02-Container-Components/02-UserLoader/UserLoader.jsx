/*
we've implemented this CurrentUserLoader, it's time for me to point out a few things that 
aren't quite right about it, or aren't quite ideal, at any rate. The main thing that's not 
ideal about our CurrentUserLoader is that it's very restricted in what it's capable of doing. 
Essentially, all this CurrentUserLoader does is load a single user and passes it to its 
children, and that single user is this currentUser that we're loading from the server. 

So what we're going to do, is modify our CurrentUserLoader component so that instead of just 
loading the currentUser, it's able to load any user we want by their ID. In fact, what we're 
going to do instead of modifying the CurrentUserLoader, we're just going to create a new file 
which we'll call UserLoader.js.

we're going to start off by just copying and pasting all of the code over from 
CurrentUserLoader into UserLoader.
*/

import React,{ useState,useEffect } from "react"
import axios from 'axios';

export const UserLoader = ({userId,children}) =>{
    const [user,setUser] = useState(null);

    /*
    01- the main thing that we're going to change, about this UserLoader, is the URL that 
    it's going to send a request to,

    we're just sending back that currentUser object. So what we're going to do instead is send a 
    request to this users/:id route, which allows us to get any user by their ID. 
    */
    useEffect(()=>{
        (async ()=>{
            /*
            02 - Now the main problem, here, in this UserLoader component, is that we 
            don't know what user ID we want. So what we're going to do is have the parent 
            component, that's probably going to be the app component in our case, pass in 
            the user ID as a prop.

            03 - add IDs in serer js entities and we need to restart server after making 
            changes
            */
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })();
    },[userId]);

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

/*
04 - now that we have this UserLoader component, which provides us with a little bit more 
flexibility than our CurrentUserLoader component, let's see how we can use it inside app.js
*/