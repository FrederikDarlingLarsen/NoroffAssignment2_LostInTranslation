function StartUpLogin(){

    return(
        
        <div className="loginBox">
        

        <form >
  <label>
    Name:
    <input className="loginForm" placeholder="Enter stuff here" type="text" name="name" />
  </label>
  <input className="loginButton" type="submit" value="Submit" />
</form> 

        </div>
        
    );
}


export default StartUpLogin;