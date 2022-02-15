export const END_POINTS = {
	/* player */
	login: "/players/login",

	/* game */
	initGame: "/games",
	drawDetails: "/games/draw",
	nextStage: "/games/stage",

	/* check health */
	checkHealth: "/health",
	checkStage: "/health/stage",
};

export const ROLES = {
	DRAW: "draw",
	GUESS: "guess",
};

export const PLAYER_ROLE = {
	role: ROLES.DRAW,
};

export const STAGES = {
	WAIT_FOR_SECOND: "wait for second player",
	WAIT_FOR_START_GUESSING: "wait for start guessing",
	WAIT_AFTER_DRAW: "wait after draw",
};

/* Check Health - Services */

export const checkAlive = {
	name: "health",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.checkHealth,
};

export const checkStageHealth = {
	name: "stage",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.checkStage,
};

export const refreshInterval = 2000;
