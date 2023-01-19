import StartUpLogin from "./StartUpLogin";
import logo from '../Logo-Hello.png';

const StartUp = () => {
    return(
        <>
        {/* <h2>This is the startup page</h2> */}
        <br />

        <StartUpLogin/>
        
        <img src={logo} alt="hello" width="300px" />

        
        </>
    );

}

export default StartUp;