export const END_POINTS = {
	/* player */
	login: "/players/login",

	/* game */
	initGame: "/games",
	drawDetails: "/games/draw",
	nextStage: "/games/stage",

	/* check health - server */
	health: "/health",

	/*  check health - stages */
	waiting: "/health/waiting",
	wordChoosing: "/health/wordChoosing",
	drawing: "/health/drawing",
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
