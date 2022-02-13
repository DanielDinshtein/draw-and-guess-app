import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import CanvasButtons from "./CanvasButtons";
import "../views/DrawingView.css";

// const CANVAS_PROPS_UPDATE = "CANVAS_PROPS_UPDATE";

// const canvasReducer = (state, action) => {
// 	if (action.type === CANVAS_PROPS_UPDATE) {
// 		const updatedValues = {
// 			...state.inputValues,
// 			[action.input]: action.value,
// 		};
// 		return {

// 		};
// 	}
// 	return state;
// };

const styles = {
	border: "0.0625rem solid #9c9c9c",
	borderRadius: "0.25rem",
};

const Canvas = (props) => {
	let canvas = useRef();

	const [strokeColorState, setStrokeColorState] = useState("#000000");
	const [canvasColorState, setCanvasColorState] = useState("#FFFFFF");
	const [strokeWidthState, setStrokeWidthState] = useState(4);
	const [eraserWidthState, setEraserWidthState] = useState(8);

	const canvasState = {
		strokeColor: { value: strokeColorState, setter: setStrokeColorState },
		canvasColor: { value: canvasColorState, setter: setCanvasColorState },
		strokeWidth: { value: strokeWidthState, setter: setStrokeWidthState },
		eraserWidth: { value: eraserWidthState, setter: setEraserWidthState },
	};

	return (
		<div id="canvas-view">
			<div id="react-sketch">
				<ReactSketchCanvas
					ref={canvas}
					style={styles}
					strokeWidth={strokeWidthState}
					eraserWidth={eraserWidthState}
					strokeColor={strokeColorState}
					canvasColor={canvasColorState}
				/>
			</div>
			<CanvasButtons canvasRef={canvas} propsState={canvasState} />
		</div>
	);
};

export default Canvas;
