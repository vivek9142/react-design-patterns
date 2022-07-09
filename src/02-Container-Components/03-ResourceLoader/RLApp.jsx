
import {ResourceLoader} from './ResourceLoader';
import {UserInfo} from './UserInfo';
import {ProductInfo} from './ProductInfo';
function RLApp() {
    return (
        <>
        <ResourceLoader resourceUrl='/users/123' resourceName='user'>
            <UserInfo/>   
        </ResourceLoader>

        {/* 
        04 -  However, it's a lot more flexible because now what we can do, is if we 
        want to load some other server resource, like our products, we can do so by saying, 
        resource loader, and then for the resource URL, we specify the URL of the products 
        */}
        
        <ResourceLoader resourceUrl='/products/1234' resourceName='product'>
            <ProductInfo/>   
        </ResourceLoader>
        
        </>
    )
};

export default RLApp

/*
05 - So essentially we can use this container component resource loader to load any 
and all of the resources for their child components. And notice that this also saves us 
from having to copy and paste this kind of code between all the components that need it.
*/
