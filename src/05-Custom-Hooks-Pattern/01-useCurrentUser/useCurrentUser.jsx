/*
We're going to start off by seeing how to load the current user from the server, and then 
we're going to expand this to be able to load any user from the server, and this will be 
followed by seeing how to load different resources, and, finally, we'll top that off by 
seeing how to create custom hooks that can work with any kind of data source. 
*/

import { useState, useEffect } from "react";
import axios from 'axios';

/*01 - create hook */

export const useCurrentUser = () => {
    const [user,setUser] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get('/current-user');
            setUser(response.data);
        })();
    },[]);

    return user;
}