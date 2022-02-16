import { updateServerOnStageChange } from "../../utils/serverService";

export const SET_CURRENT_STAGE = "SET_CURRENT_STAGE";

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
