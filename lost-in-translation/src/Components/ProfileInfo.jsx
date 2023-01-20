import { NavLink } from "react-router-dom"

const ProfileInfo = ({logout}, {username}) => {


    const handleLogout = () => {
        if (window.confirm('Are you sure?')){
           logout()

        }

    }
    return(
        <div className="ProfileInfoBox">
         
        <img src="https://th.bing.com/th/id/R.09fddc66afa45a1df643f03376ead3fb?rik=MejUDTCafp3rQw&riu=http%3a%2f%2fwww.schibsted.pl%2fwp-content%2fthemes%2fschibsted-wp-theme%2fassets%2fimg%2favatar_placeholder.svg&ehk=YVll5daU2Wnv5QS2ylxMmkK%2bk9px380U17FLtmZqyc8%3d&risl=&pid=ImgRaw&r=0" width = "120px" alt="profilepic" />
        
         <h3>Name: {username}</h3>
        
        <NavLink to="/Translation">Go to translation</NavLink>
        <button>clear history</button>
        <button onClick={handleLogout}>log out</button>

        
        </div>
    )
}

export default ProfileInfo