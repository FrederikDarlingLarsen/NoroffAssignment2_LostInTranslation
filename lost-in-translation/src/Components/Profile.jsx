import ProfileHistory from "./ProfileHistory";
import ProfileInfo from "./ProfileInfo";
import withAuth from "../higher-order-components/withAuth";

const Profile = () => {
  
  return (
    <>
      <h1>Profile</h1>

  
      <ProfileInfo />

 
      <ProfileHistory />
    </>
  );
};
export default withAuth(Profile);
