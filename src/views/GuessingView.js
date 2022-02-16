import React, { useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import Canvas from "../components/Canvas";
import SubmitButton from "../components/SubmitButton";

import { getCanvasPaths } from "../utils/serverService";

import "./GuessingView.css";

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

	const { gameID } = useSelector((state) => state.game);

	useEffect(() => {
		const getCanvas = async (gameID) => {
			let result = await getCanvasPaths(gameID);

			const data = await result.json();

			let paths = JSON.parse(data.canvasPaths);
			canvas.current.loadPaths(paths);
		};
		getCanvas(gameID);
	}, [gameID]);

	const onGuess = () => {
		console.log("guessing");
	};

	return (
		<div className="guessing-view">
			<h2>Guessing View</h2>
			<Canvas canvasRef={canvas} style={styles} {...initialProps}>
				<div className="user-name">
					<h4>Please Enter Your Guess</h4>
					<input type="text" id="input-username" ref={guessRef} required />
				</div>
				<SubmitButton type="submit" id="start-game-btn" onClick={onGuess}>
					Guess
				</SubmitButton>
			</Canvas>
		</div>
	);
};

export default GuessingView;
