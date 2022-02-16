import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Canvas from "../components/Canvas";
import SubmitButton from "../components/SubmitButton";

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

	const onGuess = () => {
		if (word === guessRef.current.value) {
			console.log("Yes");
		} else {
			console.log("guessing");
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
			</div>
		</div>
	);
};

export default GuessingView;
