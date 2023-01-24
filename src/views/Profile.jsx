import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/profile/ProfileActions";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileOrderHistory from "../components/profile/ProfileOrderHistory";
import {useUser} from "../context/UserContext";

const Profile = () => {
    const {user} = useUser()
    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username}/>
            <ProfileActions/>
            <ProfileOrderHistory orders={user.orders}/>

        </>
    )
}

export default withAuth(Profile);