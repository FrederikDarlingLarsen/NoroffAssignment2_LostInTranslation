import ProfileHistory from "./ProfileHistory";
import ProfileInfo from "./ProfileInfo";
import withAuth from "../higher-order-components/withAuth";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";

const Profile = () => {
  

  const {user, setUser} = useUser()

  const logout = () => {
      storageSave('translation-user', null)
      setUser(null)
     
  }

  return (
    <>
      <h1>Profile</h1>

  
      <ProfileInfo logout={logout} username={user.username}/>

 
      <ProfileHistory translations = {user.translations} />
    </>
  );
};
export default withAuth(Profile);
