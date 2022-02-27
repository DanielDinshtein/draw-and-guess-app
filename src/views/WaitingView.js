import React, { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as gameStageActions from "../store/actions/gameStage";

import StageCheck from "../components/StageCheck";

import { ROLES, STAGES, END_POINTS } from "../utils/constants";

import "./WaitingView.css";

const WaitingView = (props) => {
	const intervalID = useRef();
	const canvasPaths = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [gameID, userID, playerRole] = useSelector((state) => {
		const { userID, playerRole } = state.users;
		const { gameID } = state.game;

		return [gameID, userID, playerRole];
	});

	let toStage;
	let checkEndPoint;
	let message = "";

	if (playerRole === ROLES.DRAW) {
		toStage = STAGES.WORD_CHOOSING;
		checkEndPoint = END_POINTS.wordChoosing;
		message = "Wait for another player to join";
	} else if (playerRole === ROLES.GUESS) {
		toStage = STAGES.GUESSING;
		checkEndPoint = END_POINTS.guessing;
		message = "It's another player's turn. Wait for his drawing";
	}

	const changeStateHandler = useCallback(async () => {
		clearInterval(intervalID.current);

		if (toStage === STAGES.WORD_CHOOSING) {
			await dispatch(gameStageActions.waitingCheckChange(userID));

			navigate("/wordChoosing", { state: { subtitle: "Word Choosing" } });
		} else if (toStage === STAGES.GUESSING) {
			await dispatch(gameStageActions.guessingCheckChange(userID, canvasPaths.current));

			navigate("/guessing", { state: { subtitle: "Guessing Draw" } });
		} else {
			navigate("/", { state: { subtitle: "Welcome view" } });
		}
	}, [dispatch, navigate, toStage, userID]);

	return (
		<div className="waiting-view">
			<h3>{message}</h3>
			<StageCheck
				gameID={gameID}
				userID={userID}
				endPoint={checkEndPoint}
				refreshInterval={2000}
				intervalRef={intervalID}
				canvasRef={canvasPaths}
				onChangeState={changeStateHandler}
			/>
		</div>
	);
};

export default WaitingView;
