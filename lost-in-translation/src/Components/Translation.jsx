// import TranslationEnter from "./TranslationEnter";
import TranslationShow from "./TranslationShow";
import withAuth from "../higher-order-components/withAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addTranslation } from "../api/translations";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
import { NavLink } from "react-router-dom";

const Translation = () => {

  // Destructuring the user and setUser from useUser hook.
  const { user, setUser } = useUser();

  // Getting register and handSubmit from the useForm hook.
  const { register, handleSubmit } = useForm();

  // Creating a meesage and setting the local state of the message to "".
  const [message, setMessage] = useState("");

  // Function that handles to submission of the message to the translator.
  const onSubmit = async ({theMessage}) => {

    // Checks if there is a message
    if (theMessage) {

      // Checks if any valid characters have been entered (change this??)
      if(theMessage.toLowerCase() !== theMessage.toUpperCase() ){
      let translation = theMessage//change this???
      // Setting the messsage to the entered message.
      setMessage(translation);
      // Adding the translation to the API
      const [result] = await addTranslation(user, translation);
      // Saving the user with the updated translations to session storage and setting the user.
      storageSave('translation-user', result)
      setUser(result)
      
      }
      else{
        // If nothing valid has been entered then alert the user.
        alert("Please enter something valid!");
      }
    
    } else {
      // If nothing at all has been entered then alert the user.
      alert("Please enter something");
    }
  };
  
  

  return (
    <>
      <h1>Translation</h1>

      <div><NavLink to="/Profile">Go to profile</NavLink></div>

      <div className="aBox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="EnterText"
            placeholder="Enter your text here"
            type="text"
            {...register("theMessage")}
          />
          <button type="submit" className="transBtn">Enter</button>
        </form>
      </div>

      <TranslationShow msg={message} />
    </>
  );
};
export default withAuth(Translation);
