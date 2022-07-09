export const UserInfo = ({user}) => {
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