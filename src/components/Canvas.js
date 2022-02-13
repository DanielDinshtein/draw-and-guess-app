import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import CanvasOptions from "./CanvasOptions";
import "../views/DrawingView.css";

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
					strokeColor={strokeColorState}
					canvasColor={canvasColorState}
					strokeWidth={strokeWidthState}
					eraserWidth={eraserWidthState}
					{...props}
				/>
			</div>
			<CanvasOptions canvasRef={canvas} propsState={canvasState} initialPropsState={initialProps} />
		</div>
	);
};

export default Canvas;
