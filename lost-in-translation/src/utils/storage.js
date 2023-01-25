// Function for saving data to session storage
export const storageSave = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

// Function for reading data from session storage.
export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if(data){
        return JSON.parse(data)
     }
     return null
}