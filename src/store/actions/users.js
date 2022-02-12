//  TODO: Add serverService Functions

export const LOGIN = "LOGIN";

export const login = (username) => {
	return async (dispatch) => {
		const requestUrl = process.env.REACT_APP_SERVER_URL + "/players/login";

		try {
			const response = await fetch(requestUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: username,
				}),
			});

			const data = await response.json();

			if (response.status === 200) {
				const firstPlayer = data.newGame ? "yes" : "no";
				sessionStorage.setItem("firstPlayer", JSON.stringify(firstPlayer));
				dispatch({ type: LOGIN, username: username, firstPlayer: firstPlayer });
			} else if (response.status === 401) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			// TODO: Check The Reason To The Error
			let message = "Error in auth/authenticate";
			console.log(message);
			throw new Error(message);
		}
	};
};
