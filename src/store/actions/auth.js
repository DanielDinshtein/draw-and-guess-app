export const AUTHENTICATE = "AUTHENTICATE";

// const serverUrl = "";

export const authenticate = (username) => {
    return { type: AUTHENTICATE, username: username }
};

// TODO: Good One - Server
// export const authenticate = (username) => {
//     return async (dispatch) => {
//         const requestUrl = serverUrl + "/auth";
//         try {
//             const response = await fetch(requestUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     username: username,
//                 }),
//             });

//             if (response.status !== 200) {
//                 let message = "This username is already taken, please choose another one";
//                 throw new Error(message);
//             }

//             dispatch({ type: AUTHENTICATE, username: username });
//         } catch (err) {
//             // TODO: Check The Reason To The Error
//             let message = "Error in auth/authenticate";
//             throw new Error(message);
//         }
//     };
// };
