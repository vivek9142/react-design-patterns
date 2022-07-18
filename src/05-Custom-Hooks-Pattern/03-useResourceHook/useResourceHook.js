/*
We're creating a custom hook that will allow us to load any kind of resource. 

01 - we're going to start off by just copying and pasting the state of the 
last hook that we created useUser,
*/

import { useState, useEffect } from "react";
import axios from 'axios';


export const useResource = resourceUrl => {
    const [resource,setResource] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })();
    },[resourceUrl]);

    return resource;
}