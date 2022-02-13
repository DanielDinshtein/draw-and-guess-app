import React from "react";
import { useSelector } from "react-redux";

import Canvas from "../components/Canvas";
import SubmitButton from "../components/SubmitButton";

import "./DrawingView.css";

const DrawingView = (props) => {
	let word = useSelector((state) => state.game.word);

	if (!word) {
		word = "wordToDraw";
	}

	return (
		<div className="drawing-view">
			<div id="word-to-draw-container">
				<h2 id="h2-light-underline"> You Need To Draw </h2>
				<h2>&nbsp;-&nbsp;{word}</h2>
			</div>
			<div id="canvas-container">
				<Canvas />
			</div>
			<SubmitButton id="send-draw-button">Send</SubmitButton>
		</div>
	);
};

export default DrawingView;
