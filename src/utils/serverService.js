import { END_POINTS } from "./constants";

const headers = { "Content-Type": "application/json" };

/* User -  Server Functions  */

export const userLogin = async (username) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.login;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: headers,
			credentials: "include",
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
			headers: headers,
			credentials: "include",
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
			headers: headers,
			credentials: "same-origin",
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

export const sendDrawDetails = async (gameID, userID, word, wordPoints, canvasPaths) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.finishDrawing;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: headers,
			credentials: "include",
			body: JSON.stringify({
				gameID: gameID,
				userID: userID,
				word: word,
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

export const sendGuessDetails = async (gameID, userID, wordPoints) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.finishGuess;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: headers,
			credentials: "include",
			body: JSON.stringify({
				gameID: gameID,
				userID: userID,
				wordPoints: wordPoints,
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

export const onWaitingCheckChange = async (gameID, userID) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.wordChoosing;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json", userID: userID },
			credentials: "include",
			body: JSON.stringify({
				changeState: true,
				gameID: gameID,
				userID: userID,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService-> onWaitingCheckChange";
		console.log(message);
		throw new Error(message);
	}
};

export const onGuessingCheckChange = async (gameID, userID) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.guessing;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json", userID: userID },
			credentials: "include",
			body: JSON.stringify({
				changeState: true,
				gameID: gameID,
				userID: userID,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService-> onGuessingCheckChange";
		console.log(message);
		throw new Error(message);
	}
};

export const updateServerOnStageChange = async (stage) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.health + "/" + stage;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: headers,
			credentials: "same-origin",
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
