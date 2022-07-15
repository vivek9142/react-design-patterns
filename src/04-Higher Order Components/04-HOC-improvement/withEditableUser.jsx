/*
we've seen how to create a withEditableUser higher order component, we're going to take this 
one step further and create a withEditableResource higher order component. This will be kind 
of similar to what we did earlier in the course when we created a container component.

01 - We're going to start off by creating a new file for this higher order component which 
we'll call withEditableResource as I said. and will be copying and pasting the 
withEditableUser higher order component.we're just going to be making this a little 
bit more generic and reusable.
*/

import React,{useState , useEffect} from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        
        const [originalUser,setOriginalUser] = useState(null);
        const [user,setUser] = useState(null);

        useEffect(()=>{
            (async () =>{
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        },[]);

        const onChangeUser = changes => {
            setUser({...user, ...changes});
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`,{user});
            setOriginalUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component {...props} 
                user={user} 
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser} />;

    }
}
