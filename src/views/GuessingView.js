import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Canvas from "../components/Canvas";
import SubmitButton from "../components/SubmitButton";

import * as gameActions from "../store/actions/game";

import "./GuessingView.css";
import "./DrawingView.css";
import "./WelcomeView.css";
import "./WordChoosingView";

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
	const guessRef = useRef("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [showWrong, setShowWrong] = useState(false);

	const { word, wordPoints, canvasPaths } = useSelector((state) => state.gameStage);

	useEffect(() => {
		
		let paths = JSON.parse(canvasPaths);
		canvas.current.loadPaths(paths);
	}, [canvasPaths, word]);

	const onGuess = async () => {
		if (word === guessRef.current.value) {
			await dispatch(gameActions.finishGuess(wordPoints));

			navigate("/wordChoosing", { state: { subtitle: "Word Choosing" } });
		} else {
			setShowWrong(true);
		}
	};

	return (
		<div className="guessing-view">
			<h2>Guessing View</h2>
			<div id="canvas-container">
				<Canvas canvasRef={canvas} style={styles} {...initialProps}>
					<div className="user-name">
						<h4>Please Enter Your Guess</h4>
						<input
							type="text"
							id="input-username"
							ref={guessRef}
							required
							onInput={() => {
								setShowWrong(false);
							}}
						/>
					</div>
					<SubmitButton type="submit" id="send-draw-button" onClick={onGuess}>
						Guess
					</SubmitButton>
					{showWrong && (
						<div id="display-chosen-word-container">
							<p id="p-underline"></p>
							<p id="p-word">&nbsp;Guess Again&nbsp;</p>
						</div>
					)}
				</Canvas>
			</div>
		</div>
	);
};

export default GuessingView;
