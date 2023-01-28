import { NavLink } from "react-router-dom";

const HeaderProfile = ({ username }) => {
  return (
    <div className="profilePic">
      {/* Linking to the profile */}
      <NavLink to="/Profile">
        <img
          src="/profileImg.png"
          width="60px"
          alt="profilepic"
        />
        <p>{username}</p>
      </NavLink>
    </div>
  );
};

export default HeaderProfile;
