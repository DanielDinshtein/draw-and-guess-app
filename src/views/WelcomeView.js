import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SubmitButton from "../components/SubmitButton";
import * as usersActions from "../store/actions/users";
import * as gameStageActions from "../store/actions/gameStage";

import { ROLES, STAGES } from "../utils/constants";
import "./WelcomeView.css";

const WelcomeView = (props) => {
	const username = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const startGameHandler = async (event) => {
		event.preventDefault();

		try {
			const loginResult = await dispatch(usersActions.login(username.current.value));

			let to = "/waiting";
			let state = { subtitle: "Waiting Room" };

			if (loginResult === ROLES.DRAW) {
				dispatch(gameStageActions.updateGameStage(STAGES.WAITING));
			} else if (loginResult === ROLES.GUESS) {
				dispatch(gameStageActions.updateGameStage(STAGES.WAITING));
			} else if (!loginResult) {
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
					<input type="text" id="input-username" placeholder="user name" ref={username} required />
				</div>
				<SubmitButton type="submit" id="start-game-btn">
					Start Game
				</SubmitButton>
			</form>
		</div>
	);
};

export default WelcomeView;
