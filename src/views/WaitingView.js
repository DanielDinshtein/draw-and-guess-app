import React, { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as gameStageActions from "../store/actions/gameStage";

import WordChoosingHealth from "../utils/checkHealth/wordChoosingHealth";
import { onWaitingStageChange } from "../utils/serverService";

import { ROLES, STAGES } from "../utils/constants";

import "./WaitingView.css";

const WaitingView = (props) => {
	const intervalID = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userID, playerRole } = useSelector((state) => state.users);

	let toStage;

	if (playerRole === ROLES.DRAW) {
		toStage = STAGES.WORD_CHOOSING;
	} else if (playerRole === ROLES.GUESS) {
		toStage = STAGES.GUESSING;
	}

	const changeStateHandler = useCallback(async () => {
		clearInterval(intervalID.current);

		if (toStage === STAGES.WORD_CHOOSING) {
			await dispatch(gameStageActions.waitingStageChange(userID));

			navigate("/wordChoosing", { state: { subtitle: "Word Choosing" } });
			//  TODO: Need This?
		} else if (toStage === STAGES.GUESSING) {
			await onWaitingStageChange(userID);

			navigate("/guessing", { state: { subtitle: "Guessing Draw" } });
		}
	}, [dispatch, navigate, toStage, userID]);

	return (
		<div className="waiting-view">
			<h2>Waiting View</h2>
			<WordChoosingHealth userID={userID} refreshInterval={2000} intervalRef={intervalID} onChangeState={changeStateHandler} />
		</div>
	);
};

export default WaitingView;
