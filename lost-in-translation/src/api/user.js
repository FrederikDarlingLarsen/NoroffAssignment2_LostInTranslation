import {createHeaders} from "./index.js"

// Getting the api url from the .env file.
const apiUrl = process.env.REACT_APP_API_URL

// An async function checking for whether a user exists.
const checkForUser = async (username) => {
    try {
        // Awaiting a response from a fetch request attempting to fetch a specified user.
        const response = await fetch(`${apiUrl}?username=${username}`)
        // If the response is not ok then throw an error.
        if(!response.ok){
            throw new Error('Could not complete request.')
        }
        //?
        const data = await response.json()
        return [ null, data ]
    }
    catch(error){
        return [ error.message, null]
 
    }

}

// An async function for creating a user.
const createUser = async (username) => {
    try {
        // Awaiting a response from the API.
        const response = await fetch(apiUrl, {
            // Using POST since we want to add a new user object to the API
            method: 'POST',
            headers: createHeaders(),
            // Adding an object with a the username and an empty array to contain the translations.
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        // If the response is not ok then throw an error.
        if(!response.ok){
            throw new Error(`Could not create user with username ${username}`)
        }
        //?
        const data = await response.json()
        return [ null, data ]
    }
    catch(error){
        return [ error.message, [] ]
 
    }

}

// An async function for logging in the user.
export const loginUser = async (username) => {
    // the checkForUser function is first used to check whether the entered username exists.
    const [ checkError, user ] = await checkForUser(username)

    // If the error is not nul...?
    if(checkError !== null){
        return [ checkError, null ]
    }


    if (user.length > 0){
        return [ null, user.pop()]
    }

    // Create a new user with the createUser function.
    return await createUser(username)

}

// An async function 
export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        // If the response is not ok then throw an error.
        if(!response.ok){
            throw new Error ('not user fetched')
        }
        const user = await response.json()
        return [null, user]
    }
    catch (error) {
        return [error.message, null]
    }
}