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

  const { user, setUser } = useUser();

  const { register, handleSubmit } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async ({theMessage}) => {
    if (theMessage) {
      let translation = theMessage
      setMessage(translation);
      const [error, result] = await addTranslation(user, translation);
       
      storageSave('translation-user', result)
      setUser(result)
      
    
    
    } else {
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
