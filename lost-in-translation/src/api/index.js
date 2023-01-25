const apiKey = process.envi.REACT_APP_API_KEY
//What is this???????????
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
    
}


