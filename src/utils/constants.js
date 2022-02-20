export const END_POINTS = {
	/* player */
	login: "/users/login",
	

	/* game */
	initGame: "/games",
	chosenWord: "/games/chosenWord",

	finishDrawing: "/gameStage/draw",
	finishGuess: "/gameStage/guess",

	/* check health - server */
	health: "/health",

	/*  check health - stages */
	wordChoosing: "/health/wordChoosing",
	guessing: "/health/guessing",
};

export const ROLES = {
	DRAW: "draw",
	GUESS: "guess",
};

export const PLAYER_ROLE = {
	role: ROLES.DRAW,
};

export const STAGES = {
	WAITING: "waiting",
	WORD_CHOOSING: "wordChoosing",
	DRAWING: "drawing",
	GUESSING: "guessing",
};

export const GAME_STAGE = {
	stage: STAGES.WAITING,
};
