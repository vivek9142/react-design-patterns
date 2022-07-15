/*
10 - So what we're going to need to do now is create this user info form. 
*/

import { withEditableUser } from "./withEditableUser";

/*
11 - Now, before I go any further, what I want to say is that so far, whenever we've wanted to 
use a higher order component, we've specifically created a separate component without that 
functionality. Let's say user info, for example. And we've explicitly wrapped that with our 
higher order component and created another named component from that. 

12- . We're going to take the props, which will be user on change user, on save user, 
on reset user and believe that's all we need there. And then inside here, it's just going 
to look like a regular component. 
*/
export const UserInfoForm = withEditableUser(({user,onChangeUser,onSaveUser,onResetUser})=>{
    const {name,age,hairColor} = user || {};

    return user ? (<>
        <label>
            Name:
            <input type="text" value={name} onChange={e => onChangeUser({name:e.target.value})} />
        </label>

        <label>
            Age:
            <input type="number" value={age} onChange={e => onChangeUser({age:Number(e.target.value)})} />
        </label>

        <label>
            HairColor:
            <input type="text" value={hairColor} onChange={e => onChangeUser({hairColor:e.target.value})} />
        </label>
        <button onClick={onResetUser}> Reset </button>
        <button onClick={onSaveUser}>Save Changes</button>

    </>) : <p>Loading...</p>
}, '123')