import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import usersReducer from "./store/reducers/users";
import gameReducer from "./store/reducers/game";

import WelcomeView from "./views/WelcomeView";
import WordChoosingView from "./views/WordChoosingView";
import DrawingView from "./views/DrawingView";
import GuessingView from "./views/GuessingView";
import WaitingView from "./views/WaitingView";

import Header from "./components/Header";
import "./App.css";

const rootReducer = combineReducers({
	users: usersReducer,
	game: gameReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

//  TODO: Thing on Better Place
const appInit = () => {
	//  Clear All Local Data
	sessionStorage.clear();

	//  TODO: Catch the Refresh & Notify Server
	// if (window.performance) {
	//     if (performance.navigation.type === 1) {
	//         alert("This page is reloaded");
	//     } else {
	//         alert("This page is not reloaded");
	//     }
	// }
};
appInit();

function App() {
	const location = useLocation();
	const isUserAuthenticated = store.getState().users.username;

	let headerSubtitle2 = location.state ? location.state : "Welcome";

	return (
		<div className="App">
			<Provider store={store}>
				<Header headerSubtitle={headerSubtitle2} />
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
