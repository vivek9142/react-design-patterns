/*
we're going to do next is take our useCurrentUser hook that we created and modify it a 
little bit so that we can make it load any user we want from the server. 

01 -  For the code here, we're going to start off by just copying and pasting our 
useCurrentUser custom hook that we created. 
*/

import { useState, useEffect } from "react";
import axios from 'axios';


export const useUser = userId => {
    const [user,setUser] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })();
    },[userId]);

    return user;
}