/*
02 - So when we created this component earlier we made it so that user was passed in as a 
prop, so that's usually from the parent component. Now, this is often what we're going to 
want to do since we'll want Userinfo to be able to display different users based on where 
it's being displayed in the page. However, just to get a feel for how this useCurrentUser 
hook is going to work, I'm going to remove this prop for now.
*/

/*03- import and use useCurrentUser hook*/
import { useCurrentUser } from "./useCurrentUser";

export const UserInfo = () => {

    const user  = useCurrentUser();
    
    const {name,age,hairColor,hobbies} = user || {};

    return user ? (<>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <ul>
            {
                hobbies.map(
                    hobby => (<li key={hobby}>{hobby}</li>)
                )
            }
        </ul>
        </>) : <p>Loading ...</p>
};