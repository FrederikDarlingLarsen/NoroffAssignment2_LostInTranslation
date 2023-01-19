

import { useForm } from "react-hook-form"

const usernameConfig = {
  required: true,
  minLength: 5
}

const StartUpLogin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    
  }

  console.log(errors)

  const errorMessage = (() => {
    if(!errors.username){
      return null
    }
    if(errors.username.type === 'required'){
      return <span>Required</span>
    }
    if(errors.username.type === 'minLength'){
      return <span>Too short. must be 5 chars
      </span>
    }
  })()

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit(onSubmit)}>
        
         <fieldset>
          <label htmlFor="username">Username:</label>
          <input 
          type="text"
          placeholder="Type name here"
           { ...register("username", usernameConfig)} />
           { errorMessage}
         </fieldset>
        <button type="submit">Continue</button>
        
      </form>

    </div>
  );
};

export default StartUpLogin;
