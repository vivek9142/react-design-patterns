/*
 We have our UserInfo and ProductInfo components, which take a user and product prop 
 separately. What we want to have these components do is display some data that we load from 
 a server. That's the last file I wanted to talk about, is this server.js file that you'll 
 find in the root directory of the exercise files. Basically, this is just a simple express 
 server that will send back some data to our components. 
*/

import {CurrentUserLoader} from './CurrentUserLoader';
import {UserInfo} from './UserInfo';

/*
06 - current user loader component is going to pass a user prop to our user info component, 
just because user info is one of its children. 
*/
function SIApp() {
    return (
        <CurrentUserLoader>
            <UserInfo/>   
        </CurrentUserLoader>
    )
};

export default SIApp

/*
01 - start the node server by 
node server.js 
on root directory 
and start the react app.
*/

/*
02 - we're going to create a container component that will take care of loading the current 
user data, that's where we're going to start off here, and passing it to our user info 
component. So let's start off by creating that container component. CurrentUserLoader.jsx
*/