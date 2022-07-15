/*
we've seen how to load data with a higher order component.The next thing we're going to take 
a look at is how to take this one step further and allow our higher order components to also 
edit server data. 

What we're going to do is let's say that instead of just having a user info 
component that displays the info of a user. Let's say that we have another componen called 
user info form, which allows us to edit the information of a user on the server. 
Now, if you look back in the server.js file, you'll see that we have end points that will 
allow us to edit the user as well.

But before we do that, let's create a new file, which will be our higher order component. 
And we're going to call this higher order component with editable user. And the basic idea 
of this higher order component is that in addition to loading the user from the server and 
passing it to the component that we wrap with it, it's going to allow the component that we 
wrap to change that resource through several other props that it'll pass to it. 

*/

import React,{useState , useEffect} from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        /*
        01 -this is going to represent the data that we have on the server side.So as we 
        make changes to the data on the client side, we'll want to have a backup copy of the 
        server side data in case we want to reset to that original data.
        */
        const [originalUser,setOriginalUser] = useState(null);
        const [user,setUser] = useState(null);

        useEffect(()=>{
            (async () =>{
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        },[]);

        /*
        02 - we're going to return the original component that we passed in as an argument 
        with all of the props and one additional prop user.
        we're going to do though, is add a few more functions in here that will actually 
        modify the user data on the component when certain functions are called.
        */
        const onChangeUser = changes => {
            setUser({...user, ...changes});
        }

        /*
        03 - We're going to have to specify this on change user as a prop in our user info 
        form when we implement it. All right, so that basically will make changes to the 
        state, but we also want to have a function called on save user. That's basically 
        going to write these changes to the server, right? It's going to make an actual 
        server request that will persist these changes on the backend. 
        */
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
