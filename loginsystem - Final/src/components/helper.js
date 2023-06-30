// This function takes the data object returned by the authentication API and stores it in the user's local storage
export const storeUser = (data) => {
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.user.username,
            email: data.user.email,
            jwt: data.jwt,    
        })
    );
};

// This function retrieves the user data from local storage and returns it
export const userData = () => {
    // Check if the user data exists in local storage, otherwise default to an empty object
    const stringFiedUser = localStorage.getItem("user")  || "{}";
    // Parse the user data into an object
    const user = JSON.parse(stringFiedUser);
    // Log the retrieved user data to the console for debugging purposes
    console.log("Retrieved user from local storage:", user);
    // Return the user data object
    return user;
};
