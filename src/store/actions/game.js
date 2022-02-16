import { initGameSession, sendDrawDetails, notifyFinishGuess } from "../../utils/serverService";

import { ROLES, STAGES } from "../../utils/constants";

export const INIT_GAME = "INIT_GAME";
export const FINISH_DRAW = "FINISH_DRAW";
export const FINISH_GUESS = "FINISH_GUESS";

export const initGame = (username) => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;

			// timeStarted =?   gameID =?
			const response = await initGameSession(gameID, username);

			const data = await response.json();

			if (response.status === 200) {
				const { id } = data.result;
				const { timeStarted } = data.result;

				dispatch({ type: INIT_GAME, gameID: id, timeStarted: timeStarted });
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			//  TODO: Error Handler
			console.log(err);
			let message = "Error in game->startGame";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const finishDraw = (wordPoints, canvasPaths) => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;
			const response = await sendDrawDetails(gameID, wordPoints, canvasPaths);

			const data = await response.json();

			if (response.status === 200) {
				dispatch({ type: FINISH_DRAW, playerRole: ROLES.GUESS, gameStage: STAGES.WAITING });
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

export const finishGuess = () => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;
			const response = await notifyFinishGuess(gameID);

			const data = await response.json();

			console.log(data);
			console.log(data?.result);
			console.log(data?.result?.totalPoints);

			if (response.status === 200) {
				dispatch({ type: FINISH_GUESS, playerRole: ROLES.DRAW, gameStage: STAGES.WORD_CHOOSING, totalPoints: data?.result?.newTotalPoints });
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
