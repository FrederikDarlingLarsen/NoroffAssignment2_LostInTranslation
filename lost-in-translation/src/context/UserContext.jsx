import { useContext, createContext, useState } from "react";
import { storageRead } from "../utils/storage";

// Creating a new context.
const UserContext = createContext();

// Creating a custom hook called useUser.
export const useUser = () => {
  return useContext(UserContext);
};

// The provder for the user is declared.
const UserProvider = ({ children }) => {
  // User and setUser are declared, and the user is read from session storage.
  const [user, setUser] = useState(storageRead("translate-user"));

  // state object is created.
  const state = {
    user,
    setUser,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
