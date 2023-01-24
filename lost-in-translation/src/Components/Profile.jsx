import ProfileHistory from "./ProfileHistory";
import ProfileInfo from "./ProfileInfo";
import withAuth from "../higher-order-components/withAuth";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
import { useEffect } from "react";
import { userById } from "../api/user";

const Profile = () => {
  

  const {user, setUser} = useUser()

  const logout = () => {
      storageSave('translation-user', null)
      setUser(null) 
  }


  useEffect (() => {

    const getUser = async () => {
      const[error, latestuser] = await userById(user.id)
      if(error === null){
        storageSave('translation-user', latestuser)
        setUser(latestuser)
      }
    }


    getUser()

  }, [setUser, user.id])

  return (
    <>
      <h1>Profile</h1>

  
      <ProfileInfo logout={logout} username={user.username}/>

 
      <ProfileHistory translations = {user.translations} />
    </>
  );
};
export default withAuth(Profile);
