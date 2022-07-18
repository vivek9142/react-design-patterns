import { useDataSource } from "./useDataSource";
import axios from 'axios';

/*3 - we could do is specify a new function up at the top here, that will actually create 
variations of this asynchronous function inside of here for us,this is going to be a 
function that returns a function
*/
const serverResource = resourceUrl => async () =>{
    const response = await axios.get(resourceUrl);
    return response.data;
}

//4 - if we want to get some thing from localStorage wqe an get it 
const localStorageResource = key => () =>{
    return localStorage.getItem(key);
}

export const UserInfo = ({userId}) => {

    //2- add useDataResource hook with async func body to sent it to hook
    // const user  = useDataSource(async () =>{
    //     const response = await axios.get(resourceUrl);
    //     return response.data;
    // }
    // );
    
    const user  = useDataSource(serverResource(`/users/${userId}`));
    const message = localStorageResource('message');

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
By having usedDataSource and serverResource separate, what we're able to do is actually have 
this custom hook with all of its functionality and configure it by passing in other functions 
that tell the custom hook how to actually get the data. Now, in reality, you might not want 
to go this far, right. UseResource would probably be a good stopping point, but nevertheless, 
there are some applications where this kind of thing and having this kind of configurability 
can be very helpful.
*/