import { printProps } from "./printProps";
import {UserInfo} from './UserInfo';

/*
02 - now the way that we're going to use this print props higher order function is we're 
basically going to create a wrapper around our user info component. And that wrapper will 
automatically print the props that are getting passed into it. 

03 - so this user info wrapped thing now is this component that we're returning from our 
print props function.
*/
const UserInfoWrapped = printProps(UserInfo);

function PrintApp() {
    return (
        <UserInfoWrapped a={1} b='Hello' c={{name:'Shaun'}}/>
    )
}

export default PrintApp;