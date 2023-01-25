import withAuth from "../hoc/withAuth";
import ProfileActions from "../components/profile/ProfileActions";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileOrderHistory from "../components/profile/ProfileOrderHistory";
import {useUser} from "../context/UserContext";
import {useEffect} from "react";
import {userById} from "../api/user";
import {storageSave} from "../utils/storage";
import {STORAGE_KEY_USER} from "../const/storageKeys";

const Profile = () => {
    const {user, setUser} = useUser()

    useEffect(()=>{
        const findUser = async ()=>{
            const [error, latestUser] = await userById(user.id)

            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        // findUser()
    },[setUser, user.id])

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