import { NavLink } from "react-router-dom";

const HeaderProfile = ({ username }) => {
  return (
    <div className="profilePic">
      {/* Linking to the profile */}
      <NavLink to="/Profile">
        <img
          src="https://th.bing.com/th/id/R.09fddc66afa45a1df643f03376ead3fb?rik=MejUDTCafp3rQw&riu=http%3a%2f%2fwww.schibsted.pl%2fwp-content%2fthemes%2fschibsted-wp-theme%2fassets%2fimg%2favatar_placeholder.svg&ehk=YVll5daU2Wnv5QS2ylxMmkK%2bk9px380U17FLtmZqyc8%3d&risl=&pid=ImgRaw&r=0"
          width="60px"
          alt="profilepic"
        />
        <p>{username}</p>
      </NavLink>
    </div>
  );
};

export default HeaderProfile;
