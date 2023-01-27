import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { clearHist } from "../api/translations";

const ProfileInfo = (props) => {
  // Destructuring the user and the setUser() method.
  const { user, setUser } = useUser();

  const navigate = useNavigate();

  // Function that asks the user if they want to logout before executing the logout() function.
  const handleLogout = () => {
    if (window.confirm("Are you sure that you want to log out?")) {
      props.logout();
    }
  };

  // Function handling the clearing of the history on click.
  const handleClearHist = async () => {
    if (!window.confirm("Are you sure that you want to clear your history?")) {
      return;
    }
    const [err] = await clearHist(user.id);
    if (err !== null) {
      return;
    }
    const updatedUser = {
      ...user,
      translations: [],
    };

    storageSave(updatedUser);
    setUser(updatedUser);
  };

  // Function for handling navigation to the translation page when clicking a button.
  const handleNavigation = () => {
    navigate("/Translation");
  };

  return (
    <div className="aBox">
      <img
        src="https://th.bing.com/th/id/R.09fddc66afa45a1df643f03376ead3fb?rik=MejUDTCafp3rQw&riu=http%3a%2f%2fwww.schibsted.pl%2fwp-content%2fthemes%2fschibsted-wp-theme%2fassets%2fimg%2favatar_placeholder.svg&ehk=YVll5daU2Wnv5QS2ylxMmkK%2bk9px380U17FLtmZqyc8%3d&risl=&pid=ImgRaw&r=0"
        width="120px"
        alt="profilepic"
      />
      <h3>{props.username}</h3>
      <button onClick={handleNavigation} className="profileButton">
        Go to translation
      </button>
      <button className="profileButton" onClick={handleClearHist}>
        clear history
      </button>
      <button className="profileButton" onClick={handleLogout}>
        log out
      </button>
    </div>
  );
};

export default ProfileInfo;
