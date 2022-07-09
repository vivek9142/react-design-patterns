
import {UserLoader} from './UserLoader';
import {UserInfo} from './UserInfo';

function ULApp() {
    return (
        <>
        <UserLoader userId='123'>
            <UserInfo/>   
        </UserLoader>
        
        <UserLoader userId='234'>
            <UserInfo/>   
        </UserLoader>
        
        <UserLoader userId='345'>
            <UserInfo/>   
        </UserLoader>

        {/*05-  each of these respective container components will load only that user with 
        that ID and pass that different data to the same component, which will give us all 
        of our users rendered in a, sort of, list here. */}
        </>
    )
};

export default ULApp
