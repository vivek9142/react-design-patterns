import { UserInfo } from "./UserInfo";
import {ProductInfo} from './ProductInfo';

function UserApp(){
    return (
        <>
            <UserInfo userId='123'/>
            <UserInfo userId='234'/>
            <UserInfo userId='345'/>

            <ProductInfo productId={1234}/>

        </>
    )
};

export default UserApp;