import { createHeaders } from ".";

// Geting the apiUrl form the .env file.
const apiUrl = process.env.REACT_APP_API_URL;

// An async function for adding translations to the API.
export const addTranslation = async (user, translation) => {
  try {
    // Awaiting a response from a fetch request.
    const response = await fetch(`${apiUrl}/${user.id}`, {
      // Using PATCH since an obejct has to updated.
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    });
    // If the response is not ok, then throw an error.
    if (!response.ok) {
      throw new Error(`Could not update translations`);
    }
    // getting the result as jdson?
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

export const clearHist = async (userId) => {
  try {
    // Awaiting a response from a fetch request.
    const response = await fetch(`${apiUrl}/${userId}`, {
      // Using PATCH since an obejct has to updated.
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    // If the response is not ok, then throw an error.
    if (!response.ok) {
      throw new Error(`Could not clear hist`);
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
