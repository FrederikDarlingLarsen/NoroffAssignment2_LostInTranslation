// import TranslationEnter from "./TranslationEnter";
import TranslationShow from "./TranslationShow";
import withAuth from "../higher-order-components/withAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addTranslation } from "../api/translations";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";

const Translation = () => {
  // Destructuring the user and setUser from useUser hook.
  const { user, setUser } = useUser();

  // Getting register, handleSubmit and reset from the useForm hook.
  const { register, handleSubmit, reset } = useForm();

  // Creating a message and setting the local state of the message to "".
  const [message, setMessage] = useState("");

  // Function that handles the submission of the message to the translator.
  const onSubmit = async (data) => {

    // Checking the validity of the message.
    let valid = data.theMessage.match(/^[A-Za-z\s]*$/)

    // Giving the user an alert if the message is not valid.
    if(!valid){
      alert('Please enter a valid message(only english letters and spaces)')
      return
    }

    if (data.theMessage) {
      const toLower = data.theMessage.toLowerCase()
      setMessage(toLower);
      // Adding the translation to the API.
      const [error, result] = await addTranslation(user, data.theMessage);
      // Saving to session storage and setting the user.
      storageSave("translation-user", result);
      setUser(result);
    } else {
      // If nothing at all has been entered then alert the user.
      alert("Please enter something");
    }
    // Resetting the input.
    reset({
      theMessage: "",
    });
  };

  // Returning JSX with the submission form for the translation and the 
  // component TranslationShow that showcase the entered text as sign language.
  return (
    <>
      <h1>Translation</h1>

      <div className="aBox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="EnterText"
            placeholder="Enter your text here"
            type="text"
            {...register("theMessage")}
          />
          <button type="submit" className="transBtn">
            Enter
          </button>
        </form>
      </div>

      <TranslationShow msg={message} />
    </>
  );
};
// Using the higher order function withAuth to redirect the user to the login page if they are not logged in.
export default withAuth(Translation);