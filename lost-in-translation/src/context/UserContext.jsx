import { useContext, createContext, useState } from "react"
import { storageRead } from "../utils/storage"

// context object (exposing state)
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

// provider => the state (manageing)
const UserProvider = ({children}) => {

    const [user, setUser] = useState(storageRead('translate-user'))

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider