import {Link} from "react-router-dom";
import {storageDelete} from "../../utils/storage";
import {STORAGE_KEY_USER} from "../../const/storageKeys";
import {useUser} from "../../context/UserContext";

const ProfileActions = () => {

    const {setUser} = useUser()
const handleLogoutClick = () => {

    if (window.confirm('Are you sure?')) {
        storageDelete(STORAGE_KEY_USER)
        setUser(null)
    }
}

  return (
      <ul>
        <li><Link to="/orders">Orders</Link></li>
        <li><button>Clear History</button></li>
        <li><button onClick={handleLogoutClick}>Logout</button></li>
      </ul>
  )
}

export default ProfileActions


