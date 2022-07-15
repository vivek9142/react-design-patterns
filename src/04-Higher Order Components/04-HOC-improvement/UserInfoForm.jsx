import { withEditableResource } from "./withEditableResource";

export const UserInfoForm = withEditableResource(({user,onChangeUser,onSaveUser,onResetUser})=>{
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
},'/users/123' ,'user')