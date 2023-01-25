import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => (props) => {
  // Using user from useUser.
  const { user } = useUser();
  // Checks if there is a user.
  if (user !== null) {
    // If there is a user, then stay a current page(Component)
    return <Component {...props} />;
  } else {
    // Else navigate to the login page.
    return <Navigate to="/" />;
  }
};
export default withAuth;
