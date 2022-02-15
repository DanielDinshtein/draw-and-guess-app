import { initGameSession, sendDrawDetails } from "../../utils/serverService";

export const SEND_DRAW = "SEND_DRAW";
export const START_GAME = "START_GAME";
export const INIT_GAME = "INIT_GAME";

// NOTE: Need This??
export const initGame = (username) => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;

			const response = await initGameSession(gameID, username);

			const data = await response.json();

			console.log(data);

			dispatch({
				type: START_GAME,
			});
		} catch (err) {
			//  TODO: Error Handler
			console.log(err);
			let message = "Error in game->startGame";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const startGame = (playerRole, word, wordPoints) => {
	return async (dispatch, getState) => {
		try {
			const username = getState().users.username;
			const response = await initGameSession(username, playerRole, word);

			console.log(response);

			dispatch({
				type: START_GAME,
				word: word,
				wordPoints: wordPoints,
				playerRole: playerRole,
			});
		} catch (err) {
			//  TODO: Error Handler
			console.log(err);
			let message = "Error in game->startGame";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const sendDraw = (word, wordPoints, canvasPath) => {
	return async (dispatch, getState) => {
		try {
			const username = getState().users.username;
			const response = await sendDrawDetails(username, word, wordPoints, canvasPath);

			const data = await response.json();

			//  TODO: Edit this
			if (response.status === 200) {
				console.log(data);
			} else if (response.status === 401) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			//  TODO: Error Handler
			console.log(err);
			let message = "Error in game->sendDraw";
			console.log(message);
			throw new Error(message);
		}
	};
};
