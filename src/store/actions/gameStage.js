import { START_GAME } from "./game";

import { onWaitingCheckChange, onGuessingCheckChange } from "../../utils/serverService";

export const WAITING_STAGE_CHANGE = "WAITING_STAGE_CHANGE";
export const SET_GAME_STAGE = "SET_GAME_STAGE";
export const SET_WORD_DETAILS = "SET_WORD_DETAILS";

export const waitingCheckChange = (userID) => {
	return async (dispatch, getState) => {
		try {
			const gameID = getState().game.gameID;
			const response = await onWaitingCheckChange(gameID, userID);

			const data = await response.json();
			if (response.status === 200) {
				const startTime = data.startTime;

				dispatch({ type: START_GAME, startTime: startTime });
			} else if (response.status === 400) {
				let message = "didn't update server on health";
				console.log(message);
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in gameStage->waitingStageChange";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const guessingCheckChange = (userID, canvasPaths) => {
	return async (dispatch, getState) => {
		try {
			const gameID = getState().game.gameID;
			const response = await onGuessingCheckChange(gameID, userID);

			const data = await response.json();
			if (response.status === 200) {
				const { word, wordPoints, canvasPaths } = data;

				dispatch({ type: SET_GAME_STAGE, word: word, wordPoints: wordPoints, canvasPaths: canvasPaths });
			} else if (response.status === 400) {
				let message = "didn't update server on health";
				console.log(message);
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in gameStage->waitingStageChange";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const setWordDetails = (word, wordPoints) => {
	return { type: SET_WORD_DETAILS, word: word, wordPoints: wordPoints };
};
