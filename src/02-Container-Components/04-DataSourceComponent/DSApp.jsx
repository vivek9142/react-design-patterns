/*
2-a - let me show you how data source can go another step further. One thing that we might 
want to do is get some sort of message or something that's stored in our local storage 
instead of loading that data from a server. 
*/


import {DataSource} from './DataSource';
import {UserInfo} from './UserInfo';
import axios from 'axios';
function DSApp() {
    /*
    04 - inside getDataFunction, We're basically just going to have the code inside here 
    that used to be inside our ResourceLoader,
    */

    /*
    05 - DataSource works just like our ResourceLoader did and our UserLoader did before it. 
    And it basically does whatever we tell it in the getDataFunction. And passes that as a 
    prop to all of the child components inside of it. 

    06-  So in the real world, here's how we might make this getDataFunction thing more 
    simple. Since obviously, we don't want to have to pass in this big anonymous function 
    every time we want to load data, right? So what we could do is just cut this out, 
    create a function for it somewhere,
    */

    /*
    2-b - a function that would take the key where something is stored in local storage in 
    the user's browser. Return a function, and this doesn't need to be asynchronous since 
    local storage isn't asynchronous. And we would just say return local storage dot, get 
    item key. 
    */
    const getLocalStoraqeData = key => () => {
        return localStorage.getItem(key)
    }

    const Text = ({message}) => (<h1>{message}</h1>)
 
    const getServerData = url => async () => {
        const response = await axios.get(url);
        return response.data;
    }

    return (
        <>
        <DataSource getDataFunc = {
            async() =>{
                const response = await axios.get('/users/123');
                return response.data;
            }
        } resourceName='user'>
            <UserInfo/>   
        </DataSource>

        {/* 07 - getServerData func to pass the url and sent it to getDatafunc */}
        <DataSource getDataFunc={getServerData('/users/123')} resourceName='user'>
            <UserInfo/>   
        </DataSource>

        {/* 2-c -. We're going to say data source, and what we're going to do now for the 
        get data function, we're going to pass in, get local storage data. The key for that 
        is going to be message. And the resource name here is going to be message as well. 
        And then inside there, we'll have our text component that we just created. And this 
        text component is automatically going to receive the contents of that piece of local 
        storage in its prop called message. So what we're going to see if we go back here, 
        we're going to see hello from local storage, which is our text component, getting 
        its data from local storage via our data source component. */}

        <DataSource getDataFunc={getLocalStoraqeData('message')} resourceName='message'>
            <Text/>
        </DataSource>
        
        </>
    )
};

export default DSApp

