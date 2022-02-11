export const LOGIN = "LOGIN";

// const serverUrl = "";

export const login = (username) => {
    let firstPlayer = "no";
    if (username === "daniel") {
        firstPlayer = "yes";
    }
    sessionStorage.setItem("firstPlayer", JSON.stringify(firstPlayer));
    return { type: LOGIN, username: username, firstPlayer: firstPlayer };
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
//             // TODO: Response.json() -> data -> firstPlayer
//             if (response.status !== 200) {
//                 let message = "This username is already taken, please choose another one";
//                 throw new Error(message);
//             }

//             sessionStorage.setItem("authenticated", JSON.stringify("yes"));
//             dispatch({ type: AUTHENTICATE, username: username, firstPlayer });
//         } catch (err) {
//             // TODO: Check The Reason To The Error
//             let message = "Error in auth/authenticate";
//             throw new Error(message);
//         }
//     };
// };
