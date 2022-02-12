import { initGameSession } from "../../utils/serverService";

export const START_GAME = "START_GAME";

export const startGame = (playerRole, word, wordPoints) => {
	return async (dispatch, getState) => {
		const username = getState().users.username;
		const response = await initGameSession(username, playerRole, word);

		console.log(response);

		return {
			type: START_GAME,
			word: word,
			wordPoints: wordPoints,
			playerRole: playerRole,
		};
	};
};
