import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// This config object defines the parameters that must be true in order to create a username.
const usernameConfig = {
  required: true,
  minLength: 5,
};

const StartUpLogin = () => {
  // The hooks for the form.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Destructuring user and setUser() from useUser.
  const { user, setUser } = useUser();

  // Getting the navigate() function fron useNavigate.
  const navigate = useNavigate();

  // The local states.
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // The side effects.
  useEffect(() => {
    // If there is a user, navigate to profile.
    if (user !== null) {
      navigate("Profile");
    }
  }, [user, navigate]);

  // Handling the submission of the form.
  const onSubmit = async ({ username }) => {
    // Set loading to true.
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    // If the response is not null store the user in session storage and set the user.
    if (userResponse !== null) {
      storageSave("translate-user", userResponse);
      setUser(userResponse);
    }
    // Set the loading to false.
    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    // If the error is of type "required" then return a span element telling the user that a username is required.
    if (errors.username.type === "required") {
      return <span>A username is required.</span>;
    }
    // If the error is of type "minLength" return a span element telling the user that their
    // username is too short and how long it must be.
    if (errors.username.type === "minLength") {
      return <span>Username is too short. must be atleast 5 characters.</span>;
    }
  })();

  return (
    <div className="aBox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username"></label>
          <input
            className="loginForm"
            type="text"
            placeholder="Type name here"
            {...register("username", usernameConfig)}
          />
          <button className="loginButton" type="submit" disabled={loading}>
            Continue
          </button>
        </fieldset>
        {errorMessage}

        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError} </p>}
      </form>
    </div>
  );
};

export default StartUpLogin;
