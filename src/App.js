import React, { useRef } from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import usersReducer from "./store/reducers/users";
import gameReducer from "./store/reducers/game";
import gameStageReducer from "./store/reducers/gameStage";

import WelcomeView from "./views/WelcomeView";
import WordChoosingView from "./views/WordChoosingView";
import DrawingView from "./views/DrawingView";
import GuessingView from "./views/GuessingView";
import WaitingView from "./views/WaitingView";

import HealthCheck from "./components/HealthCheck";
import Header from "./components/Header";
import "./App.css";

import { userLogout, getBestGame } from "./utils/serverService";
import { END_POINTS } from "./utils/constants";

const rootReducer = combineReducers({
	users: usersReducer,
	game: gameReducer,
	gameStage: gameStageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const appInit = async () => {
	if (window.performance) {
		if (performance.navigation.type === 1) {
			// alert("This page is reloaded");
			const user_ID = localStorage.getItem("userID");
			const game_ID = localStorage.getItem("gameID");
			if (user_ID || game_ID) {
				await userLogout(game_ID, user_ID);
			}
			sessionStorage.clear();
		} else {
			// alert("This page is not reloaded");
		}
		const response = await getBestGame();
		const data = await response.json();

		const bestPoints = data.bestGame.totalPoints;
		const gameTime = data.bestGame.gameTime;
		const users = data.bestGame.users;

		localStorage.setItem("bestPoints", JSON.stringify(bestPoints));
		localStorage.setItem("gameTime", JSON.stringify(gameTime));
		localStorage.setItem("users", JSON.stringify(users));
	}
};
appInit().then((res) => {});

function App() {
	const intervalID = useRef();
	const location = useLocation();
	const isUserAuthenticated = store.getState().users.username;
	const { userID } = store.getState().users;
	const { gameID } = store.getState().game;
	let headerSubtitle = location.state?.subtitle ? location.state.subtitle : "Welcome";

	const checkEndPoint = END_POINTS.health;

	const changeStateHandler = async () => {
		localStorage.removeItem("gameID");
		localStorage.removeItem("userID");
	};

	return (
		<div className="App">
			<Provider store={store}>
				<Header subtitle={headerSubtitle} />
				{isUserAuthenticated && (
					<HealthCheck
						gameID={gameID}
						userID={userID}
						endPoint={checkEndPoint}
						refreshInterval={5000}
						intervalRef={intervalID}
						onChangeState={changeStateHandler}
					/>
				)}
				<Routes>
					<Route path="/" element={<WelcomeView />} />
					{isUserAuthenticated && (
						<>
							<Route path="/wordChoosing" element={<WordChoosingView />} />
							<Route path="/drawing" element={<DrawingView />} />
							<Route path="/guessing" element={<GuessingView />} />
							<Route path="/waiting" element={<WaitingView />} />
						</>
					)}
					<Route path="/*" element={<Navigate to={"/"} state={"Welcome"} />} />
				</Routes>
			</Provider>
		</div>
	);
}

export default App;
