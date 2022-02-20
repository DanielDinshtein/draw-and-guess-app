import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SubmitButton from "../components/SubmitButton";
import * as usersActions from "../store/actions/users";
import * as gameActions from "../store/actions/game";

import { ROLES } from "../utils/constants";
import "./WelcomeView.css";

const WelcomeView = (props) => {
	const usernameRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const startGameHandler = async (event) => {
		event.preventDefault();
		const username = usernameRef.current.value;

		try {
			const [playerRole, startTime] = await dispatch(usersActions.login(username));

			let to;
			let state;

			if (playerRole === ROLES.DRAW) {
				to = "/waiting";
				state = { subtitle: "Waiting Room" };
			} else if (playerRole === ROLES.GUESS) {
				dispatch(gameActions.startGame(startTime));
				to = "/waiting";
				state = { subtitle: "Waiting Room" };
			} else {
				to = "/";
				state = { subtitle: "Welcome" };
			}

			navigate(to, { state: state });
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
		}
	};

	return (
		<div className="welcome-view">
			<form onSubmit={startGameHandler}>
				<div className="user-name">
					<h4>Please Enter Your User Name</h4>
					<input type="text" id="input-username" placeholder="user name" ref={usernameRef} required />
				</div>
				<SubmitButton type="submit" id="start-game-btn">
					Start Game
				</SubmitButton>
			</form>
		</div>
	);
};

export default WelcomeView;
