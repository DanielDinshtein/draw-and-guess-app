import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Canvas from "../components/Canvas";
import CanvasOptions from "../components/CanvasOptions";
import SubmitButton from "../components/SubmitButton";

import * as gameActions from "../store/actions/game";

import "./DrawingView.css";

const styles = {
	border: "0.0625rem solid #9c9c9c",
	borderRadius: "0.25rem",
};

const initialProps = {
	strokeColor: "#000000",
	canvasColor: "#FFFFFF",
	strokeWidth: 4,
	eraserWidth: 8,
};

const DrawingView = (props) => {
	const canvas = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [strokeColorState, setStrokeColorState] = useState("#000000");
	const [canvasColorState, setCanvasColorState] = useState("#FFFFFF");
	const [strokeWidthState, setStrokeWidthState] = useState(4);
	const [eraserWidthState, setEraserWidthState] = useState(8);

	const propsStates = {
		strokeColor: { value: strokeColorState, setter: setStrokeColorState },
		canvasColor: { value: canvasColorState, setter: setCanvasColorState },
		strokeWidth: { value: strokeWidthState, setter: setStrokeWidthState },
		eraserWidth: { value: eraserWidthState, setter: setEraserWidthState },
	};

	const { word, wordPoints } = useSelector((state) => state.gameStage);

	const sendDrawHandler = async () => {
		try {
			const canvasPaths = await canvas.current.exportPaths();

			await dispatch(gameActions.finishDraw(wordPoints, JSON.stringify(canvasPaths)));
			navigate("/waiting", { state: { subtitle: "Waiting Room" } });
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
		}
	};

	return (
		<div className="drawing-view">
			<div id="word-to-draw-container">
				<h2 id="h2-light-underline"> You Need To Draw </h2>
				<h2>&nbsp;-&nbsp;{word}</h2>
			</div>
			<div id="canvas-container">
				<Canvas
					canvasRef={canvas}
					style={styles}
					strokeColor={strokeColorState}
					canvasColor={canvasColorState}
					strokeWidth={strokeWidthState}
					eraserWidth={eraserWidthState}
				>
					<div>
						<CanvasOptions canvasRef={canvas} propsState={propsStates} initialPropsState={initialProps} />

						<SubmitButton id="send-draw-button" onClick={sendDrawHandler}>
							Send
						</SubmitButton>
					</div>
				</Canvas>
			</div>
		</div>
	);
};

export default DrawingView;
