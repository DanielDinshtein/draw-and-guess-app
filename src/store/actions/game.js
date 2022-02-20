import { sendDrawDetails, sendGuessDetails } from "../../utils/serverService";

import { ROLES } from "../../utils/constants";

export const START_GAME = "START_GAME";
export const FINISH_DRAW = "FINISH_DRAW";
export const FINISH_GUESS = "FINISH_GUESS";

export const startGame = (startTime) => {
	return { type: START_GAME, startTime: startTime };
};

export const finishDraw = (word, wordPoints, canvasPaths) => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;
			const { userID } = getState().users;
			const response = await sendDrawDetails(gameID, userID, word, wordPoints, canvasPaths);

			const data = await response.json();

			if (response.status === 200) {
				dispatch({ type: FINISH_DRAW, playerRole: ROLES.GUESS, canvasPaths: canvasPaths });
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			} else if (response.status === 404) {
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

export const finishGuess = (wordPoints) => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;
			const { userID } = getState().users;
			const response = await sendGuessDetails(gameID, userID, wordPoints);

			const data = await response.json();

			if (response.status === 200) {
				const { totalPoints } = data;

				dispatch({ type: FINISH_GUESS, playerRole: ROLES.DRAW, totalPoints: totalPoints });
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			} else if (response.status === 404) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			//  TODO: Error Handler
			console.log(err);
			let message = "Error in game->finishGuess";
			console.log(message);
			throw new Error(message);
		}
	};
};
