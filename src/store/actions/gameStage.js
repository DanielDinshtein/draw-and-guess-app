import { updateServerOnStageChange, sendChosenWordDetails } from "../../utils/serverService";
import { STAGES } from "../../utils/constants";

export const SET_CURRENT_STAGE = "SET_CURRENT_STAGE";
export const SET_CHOSEN_WORD = "SET_CHOSEN_WORD";

export const setCurrentStage = (gameStage) => {
	return { type: SET_CURRENT_STAGE, gameStage: gameStage };
};

export const onServerStateChange = (username, stage) => {
	return async (dispatch) => {
		try {
			const response = await updateServerOnStageChange(stage);

			if (response.status === 200) {
				dispatch({ type: SET_CURRENT_STAGE, gameStage: stage });
			} else if (response.status === 400) {
				let message = "didn't update server on health";
				console.log(message);
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in users->updateStageChange";
			console.log(message);
			throw new Error(message);
		}
	};
};

export const setChosenWord = (word, wordPoints) => {
	return async (dispatch, getState) => {
		try {
			const { gameID } = getState().game;

			const response = await sendChosenWordDetails(gameID, word, wordPoints);

			const data = await response.json();

			if (response.status === 200) {
				dispatch(setCurrentStage(STAGES.DRAWING));
				dispatch({ type: SET_CHOSEN_WORD, word: word, wordPoints: wordPoints });
			} else if (response.status === 400) {
				let message = data.message;
				throw new Error(message);
			} else if (response.status === 404) {
				let message = data.message;
				throw new Error(message);
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
			let message = "Error in users->updateStageChange";
			console.log(message);
			throw new Error(message);
		}
	};
};
