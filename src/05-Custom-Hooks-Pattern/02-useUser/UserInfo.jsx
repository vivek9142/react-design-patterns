import { useUser } from "./useUser";

export const UserInfo = ({userId}) => {
    /*
    01 -  The way that we're going to get the user ID that will pass in to the arguments 
    here is through a prop that will be passed to UserInfo. This will allow us to basically 
    re-use this UserInfo component for different users since we'll just be able to render 
    UserInfo with different values for the userId prop. 
    */

    const user  = useUser(userId);
    
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