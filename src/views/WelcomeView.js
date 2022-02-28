import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import ReactLoading from "react-loading";

import SubmitButton from "../components/SubmitButton";
import * as usersActions from "../store/actions/users";
import * as gameActions from "../store/actions/game";

import { ROLES } from "../utils/constants";
import "./WelcomeView.css";

const WelcomeView = (props) => {
	const usernameRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [users, setUsers] = useState();
	const [gameTime, setGameTime] = useState(-1);
	const [bestPoints, setBestPoints] = useState(-1);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setBestPoints(localStorage.getItem("bestPoints"));
		setGameTime(localStorage.getItem("gameTime"));
		setUsers(JSON.parse(localStorage.getItem("users")));
	}, []);

	const startGameHandler = async (event) => {
		event.preventDefault();
		const username = usernameRef.current.value;

		setLoading(true);

		try {
			const [playerRole, startTime] = await dispatch(usersActions.login(username));

			setLoading(false);
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
			<h3>Best Game :</h3>
			<div id="best-game-grid">
				<div className="form-grid-cell" id="best-game-cell">
					Player 1
				</div>
				<div className="form-grid-cell" id="best-game-cell">
					Player 2
				</div>
				<div className="form-grid-cell" id="best-game-cell">
					BestPoints
				</div>
				<div className="form-grid-cell" id="best-game-cell">
					GameTime
				</div>
				<div className="form-grid-cell">{users && users[0]}</div>
				<div className="form-grid-cell">{users && users[1]}</div>
				<div className="form-grid-cell">{bestPoints}</div>
				<div className="form-grid-cell">{gameTime} sec</div>
			</div>
			{loading && (
				<div id="loading">
					<ReactLoading type={"spin"} color={"#5aa8f0"} height={"33%"} width={"33%"} />
				</div>
			)}
		</div>
	);
};

export default WelcomeView;
