import { useResource } from "./useResourceHook";

export const UserInfo = ({userId}) => {

    // 03 - add endpoint and userId to form a resourceUrl 

    const user  = useResource(`/users/${userId}`);

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

/*
04 -  We see that nothing is changed. But the nice thing about this useResource custom hook 
now is that we can use it to load basically anything else we want. So let's open up the 
ProductInfo component that we had from earlier and see how we can use the useResource custom 
hook to load products as well. 
*/