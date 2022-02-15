import { getNextStage } from "../../utils/serverService";

export const SET_CURRENT_STAGE = "SET_CURRENT_STAGE";
export const SET_NEXT_STAGE = "SET_NEXT_STAGE";

export const setCurrentStage = (gameStage) => {
	return { type: SET_CURRENT_STAGE, gameStage: gameStage };
};

export const setNextStage = () => {
	return async (dispatch, getState) => {
		try {
			const [gameID, username] = getState((state) => {
				const { gameID } = state.game;
				const { username } = state.users;

				return [gameID, username];
			});


			const response = await getNextStage(gameID, username);

			const data = await response.json();

			if (response.status === 200) {

				console.log(data);
				// const { gameID } = data.result.result;
				// const { playerRole } = data.result.result.player;

				// dispatch({ type: SET_NEXT_STAGE, username: username, playerRole: playerRole, gameID: gameID });

				// return playerRole;
			} else if (response.status === 401) {
				let message = data.message;
				throw new Error(message);
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			}
			// return { type: UPDATE_GAME_STAGE, gameStage: gameStage };
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in users->setNextStage";
			console.log(message);
			throw new Error(message);
		}
	};
};
