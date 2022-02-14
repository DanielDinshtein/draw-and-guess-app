import { userLogin } from "../../utils/serverService";

export const LOGIN = "LOGIN";

export const login = (username) => {
	return async (dispatch) => {
		try {
			const response = await userLogin(username);

			const data = await response.json();

			if (response.status === 200) {
				const { gameID } = data.result.result;
				const { playerRole } = data.result.result.player;

				dispatch({ type: LOGIN, username: username, playerRole: playerRole, gameID: gameID });

				return playerRole;
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
