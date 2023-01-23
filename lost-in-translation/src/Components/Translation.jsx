// import TranslationEnter from "./TranslationEnter";
import TranslationShow from "./TranslationShow";
import withAuth from "../higher-order-components/withAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addTranslation } from "../api/translations";
import { useUser } from "../context/UserContext";

const Translation = () => {

  const { user } = useUser();

  const { register, handleSubmit } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    if (data.theMessage) {
      let translation = data.theMessage
      setMessage(translation);
      const [error, result] = await addTranslation(user, translation);
    } else {
      alert("Please enter something");
    }
  };
  

  return (
    <>
      <h1>Translation</h1>

      <div className="EnterTrans">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="EnterText"
            placeholder="Enter your text here"
            type="text"
            {...register("theMessage")}
          />
          <button type="submit">Enter</button>
        </form>
      </div>

      <TranslationShow msg={message} />
    </>
  );
};
export default withAuth(Translation);
