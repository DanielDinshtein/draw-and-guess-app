import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Canvas from "../components/Canvas";
import SubmitButton from "../components/SubmitButton";

import * as gameActions from "../store/actions/game";

import { getCanvasPaths } from "../utils/serverService";

import "./GuessingView.css";
import "./DrawingView.css";
import "./WelcomeView.css";

const styles = {
	border: "0.0625rem solid #9c9c9c",
	borderRadius: "0.25rem",
};

const initialProps = {
	strokeColor: "#000000",
	canvasColor: "#FFFFFF",
	strokeWidth: 0,
	eraserWidth: 0,
};

const GuessingView = (props) => {
	const canvas = useRef();
	const guessRef = useRef();
	const wrongGuessMsg = useRef("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [word, setWord] = useState("");

	const { gameID } = useSelector((state) => state.game);

	useEffect(() => {
		const getCanvas = async (gameID) => {
			let result = await getCanvasPaths(gameID);

			const data = await result.json();
			let paths = JSON.parse(data.result.canvasPaths);
			let guessingWord = data.result.currentWord;

			setWord(guessingWord);
			canvas.current.loadPaths(paths);
		};
		getCanvas(gameID);
	}, [gameID, word]);

	const onGuess = async () => {
		if (word === guessRef.current.value) {
			await dispatch(gameActions.finishGuess());
			navigate("/wordChoosing", { state: { subtitle: "Word Choosing" } });
		} else {
			wrongGuessMsg.current.value = "Guess Again";
		}
	};

	return (
		<div className="guessing-view">
			<h2>Guessing View</h2>
			<div id="canvas-container">
				<Canvas canvasRef={canvas} style={styles} {...initialProps}>
					<div className="user-name">
						<h4>Please Enter Your Guess</h4>
						<input type="text" id="input-username" ref={guessRef} required />
					</div>
					<SubmitButton type="submit" id="send-draw-button" onClick={onGuess}>
						Guess
					</SubmitButton>
				</Canvas>
				{wrongGuessMsg}
			</div>
		</div>
	);
};

export default GuessingView;
