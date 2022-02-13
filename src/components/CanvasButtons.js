import React from "react";

import { buttonsHandlers, formProps } from "../utils/canvasUtils";

const CanvasButtons = (props) => {
	const { canvasRef, propsState } = props;

	return (
		<div id="canvas-buttons-comp">
			<div id="canvas-buttons-grid">
				{buttonsHandlers.map(([label, handler, themeColor]) => (
					<button key={label} className="canvas-btn-block" id={`btn-${themeColor}`} type="button" onClick={handler.bind(this, canvasRef)}>
						{label}
					</button>
				))}
			</div>
			<div id="canvas-form-grid">
				{formProps.map(([propType, propName]) => (
					<div key={`${propName}Div`}>
						<label className="canvas-form-label" key={`${propName}Label`}>
							{propName} - {propType === "range" && propsState[propName].value}
						</label>
						<input
							key={propName}
							type={propType}
							name={propName}
							id={`${propName}Input`}
							value={propsState[propName].value}
							onChange={(e) => {
								propsState[propName].setter(e.target.value);
							}}
							step="1"
							min="1"
							max="30"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CanvasButtons;
