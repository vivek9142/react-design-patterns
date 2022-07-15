/*
we're going to take a look at is how to use higher order components to load data and give 
that to components. This is going to be pretty similar to what we saw before with container 
components. So what we're going to be doing is creating a higher order component called 
with user that will basically take care of loading user data from the server and passing it 
to the component that we wrap it with. 
*/
import React,{ useState ,useEffect} from 'react';
import axios from 'axios';


/*
01 - props higher order component, this with user higher order component is going to take a 
component as an argument. Okay, and it's also going to take another argument, which will be 
the ID of the user that we want this higher order component to load.
*/
export const withUser = (Component,userId) => {
    return props => {
        const [user,setUser] = useState(null);

        useEffect(()=>{
            (async ()=>{
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            })();
        },[]);

        /*
        02 - The only thing we have to do now is return the original component that we 
        passed in as an argument to our with user higher order component with this user state 
        as an additional prop. Now, the way we're going to do that, we don't actually have to 
        clone the element as we saw before, because we're passing in a component and not a 
        react element. So what we're going to do is say return component. We're going to 
        pass in the original props. So the component we create by calling with user is going 
        to behave exactly like the original component, except with extra user loading 
        capabilities. 
        */
        return <Component {...props} user={user}/>
    }

}