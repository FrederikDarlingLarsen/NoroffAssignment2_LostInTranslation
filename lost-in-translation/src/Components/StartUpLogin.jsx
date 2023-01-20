import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { storageRead, storageSave } from "../utils/storage";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const usernameConfig = {
  required: true,
  minLength: 5,
};

const StartUpLogin = () => {

  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user, setUser} = useUser()

  const navigate = useNavigate()

  //local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

 // side effect
  useEffect(() => {
    if(user !== null){
      navigate('Profile')
    }
  }, [user, navigate])



 //event handlers
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave("translate-user", userResponse);
      setUser(userResponse)
    }
    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Too short. must be 5 chars</span>;
    }
  })();

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Type name here"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>
        <button type="submit" disabled={loading}>
          Continue
        </button>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError} </p>}
      </form>
    </div>
  );
};

export default StartUpLogin;
