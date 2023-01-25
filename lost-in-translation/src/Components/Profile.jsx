import ProfileHistory from "./ProfileHistory";
import ProfileInfo from "./ProfileInfo";
import withAuth from "../higher-order-components/withAuth";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
import { useEffect } from "react";
import { userById } from "../api/user";
import { NavLink } from "react-router-dom";

const Profile = () => {
  // Destructuring user and setUser
  const { user, setUser } = useUser();

  // Saving null as the user when logging out in storage
  // Then set the user to null
  const logout = () => {
    storageSave("translation-user", null);
    setUser(null);
  };

  useEffect(() => {
    // Function getting the latest user (for the history)
    const getUser = async () => {
      const [error, latestuser] = await userById(user.id);
      // If there are no error save and set the latest user
      if (error === null) {
        storageSave("translation-user", latestuser);
        setUser(latestuser);
      }
    };

    //run getUser() //remove this????
    getUser();
  }, [setUser, user.id]);

  return (
    <>
      <h1>Profile</h1>
      <div>
        <NavLink to="/Translation">Go to translation</NavLink>
      </div>

      <ProfileInfo logout={logout} username={user.username} />

      <ProfileHistory translations={user.translations} />
    </>
  );
};
export default withAuth(Profile);
