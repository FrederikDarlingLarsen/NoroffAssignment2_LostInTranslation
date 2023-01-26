const apiKey = process.env.REACT_APP_API_KEY;

// Function to be used for fetch requests.
export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  };
};
