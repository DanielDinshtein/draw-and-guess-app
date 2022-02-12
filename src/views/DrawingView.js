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
			<div className="draw-word">
				<h2 id="draw"> You Need To Draw </h2>
				<h2>&nbsp;-&nbsp;{word}</h2>
			</div>
			<Canvas />
            <SubmitButton className="submit-btn">
                Send
            </SubmitButton>
		</div>
	);
};

export default DrawingView;
