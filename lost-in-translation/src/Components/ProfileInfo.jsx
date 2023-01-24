import { getSuggestedQuery } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import { clearHist } from "../api/translations";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";

const ProfileInfo = (props) => {

 const{user, setUser} = useUser()

  const handleLogout = () => {
    if (window.confirm("Are you sure?")) {
      props.logout();
    }
  };

  const handleClearHist = async () => {
    if (!window.confirm("you sure?")) {
      return;
    }

    const [err] = await clearHist(user.id)

    if(err !== null){
        return
    }

    const updatedUser = {
        ...user,
        translations: []
    }

    storageSave(updatedUser)
    setUser(updatedUser)
    
    
  };
  return (
    <div className="ProfileInfoBox">
      <img
        src="https://th.bing.com/th/id/R.09fddc66afa45a1df643f03376ead3fb?rik=MejUDTCafp3rQw&riu=http%3a%2f%2fwww.schibsted.pl%2fwp-content%2fthemes%2fschibsted-wp-theme%2fassets%2fimg%2favatar_placeholder.svg&ehk=YVll5daU2Wnv5QS2ylxMmkK%2bk9px380U17FLtmZqyc8%3d&risl=&pid=ImgRaw&r=0"
        width="120px"
        alt="profilepic"
      />

      <h3>Name: {props.username}</h3>

      <NavLink to="/Translation">Go to translation</NavLink>
      <button onClick={handleClearHist}>clear history</button>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default ProfileInfo;
