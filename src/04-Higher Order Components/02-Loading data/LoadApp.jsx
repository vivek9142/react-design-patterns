import { withUser } from "./withUser";
import { UserInfo } from "../01-PrintingProps/UserInfo";

// 03 - call withUser with userId
const UserInfoWithLoader = withUser(UserInfo,'234');

export const LoadApp = () => {
    return (
        <UserInfoWithLoader/>
    )
}
