import { userLogin, userLogout } from "../../utils/serverService";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (username) => {
	return async (dispatch) => {
		try {
			const response = await userLogin(username);

			const data = await response.json();

			if (response.status === 200) {
				const userID = data.user._id;
				const username = data.user.name;
				const playerRole = data.user.role;

				const gameID = data.user.gameSession._id;
				const startTime = data.user.gameSession.startTime;

				localStorage.setItem("userID", userID);
				localStorage.setItem("gameID", gameID);

				dispatch({ type: LOGIN, userID: userID, username: username, playerRole: playerRole, gameID: gameID });

				return [playerRole, startTime];
			} else if (response.status === 401) {
				let message = data.message;
				throw new Error(message);
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in users->login";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const logout = (gameID, userID) => {
	return async (dispatch) => {
		try {
			const response = await userLogout(gameID, userID);

			const data = await response.json();

			if (response.status === 200 || response.status === 202) {
				localStorage.removeItem("userID", userID);
				localStorage.removeItem("gameID", gameID);
				dispatch({ type: LOGOUT });
			} else if (response.status === 401) {
				let message = data.message;
				throw new Error(message);
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in users->login";
			console.log(message);
			throw new Error(message);
		}
	};
};
