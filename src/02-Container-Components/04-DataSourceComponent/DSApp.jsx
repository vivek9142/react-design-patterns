
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
        
        </>
    )
};

export default DSApp

