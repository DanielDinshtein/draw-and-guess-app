import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useHealthCheck } from "@webscopeio/react-health-check";

import * as gameStageActions from "../store/actions/gameStage";

import { ROLES, STAGES } from "../utils/constants";
import { services } from "../utils/checkHealthUtils";

import "./WaitingView.css";

const WaitingView = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { username, playerRole } = useSelector((state) => state.users);

	let toStage;

	if (playerRole === ROLES.DRAW) {
		toStage = STAGES.WORD_CHOOSING;
	} else if (playerRole === ROLES.GUESS) {
		toStage = STAGES.GUESSING;
	}

	const onErrorHandler = useCallback(
		async ({ service, timestamp }) => {
			if (service.name === STAGES.WORD_CHOOSING) {
				await dispatch(gameStageActions.onServerStateChange(username, service.name));

				navigate("/wordChoosing", { state: { subtitle: "Word Choosing" } });
			} else if (service.name === STAGES.GUESSING) {
				await dispatch(gameStageActions.onServerStateChange(username, service.name));

				navigate("/guessing", { state: { subtitle: "Guessing Draw" } });
			}
		},
		[dispatch, navigate, username]
	);

	useHealthCheck({
		service: services[toStage],
		onSuccess: ({ service, timestamp }) => {
			console.log(`Service "${service.name}" is available since "${timestamp}" 🎉`);
		},
		onError: onErrorHandler,
		refreshInterval: 2000,
	});

	return (
		<div className="waiting-view">
			<h2>Waiting View</h2>
		</div>
	);
};

export default WaitingView;
