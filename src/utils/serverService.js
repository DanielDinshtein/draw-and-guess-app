import { END_POINTS } from "./constants";

/* User -  Server Functions  */

export const userLogin = async (username) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.login;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->userLogin";
		console.log(message);
		throw new Error(message);
	}
};

/* Game -  Server Functions  */

export const initGameSession = async (gameID, username) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.initGame;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				gameID: gameID,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->initGameSession";
		console.log(message);
		throw new Error(message);
	}
};

/* Game Stage -  Server Functions  */

export const sendChosenWordDetails = async (gameID, word, wordPoints) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.chosenWord;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				gameID: gameID,
				word: word,
				wordPoints: wordPoints,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->sendChosenWordDetails";
		console.log(message);
		throw new Error(message);
	}
};

export const sendDrawDetails = async (gameID, wordPoints, canvasPaths) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.finishDrawing;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				gameID: gameID,
				wordPoints: wordPoints,
				canvasPaths: canvasPaths,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->sendDrawDetails";
		console.log(message);
		throw new Error(message);
	}
};

export const getCanvasPaths = async (gameID) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.guessingStage + `?gameID=${gameID}`;

	try {
		return await fetch(requestUrl, {
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->sendDrawDetails";
		console.log(message);
		throw new Error(message);
	}
};

export const notifyFinishGuess = async (gameID) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.guessingStage;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				gameID: gameID,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->sendDrawDetails";
		console.log(message);
		throw new Error(message);
	}
};

/* 'Health Check' - Game Stage Management  Server Functions  */

export const updateServerOnStageChange = async (stage) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.health + "/" + stage;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				changeState: true,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService-> updateServerOnStageChange";
		console.log(message);
		throw new Error(message);
	}
};
