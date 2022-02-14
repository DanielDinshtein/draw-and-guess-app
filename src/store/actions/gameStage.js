export const UPDATE_GAME_STAGE = "UPDATE_GAME_STAGE";

export const updateGameState = (gameStage) => {
	return { type: UPDATE_GAME_STAGE, gameStage: gameStage };
};
