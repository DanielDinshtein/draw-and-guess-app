import React from "react";

import "../views/WordChoosingView.css";

const WordButton = (props) => {
	const { word, difficulty, points, onWordSelect } = props;

	return (
		<div id="word-button-comp">
			<button className="btn" id={difficulty} onClick={() => onWordSelect(word, points)}>
				{word}
			</button>
			<div id="word-info-container">
				<p id="p-difficulty">{difficulty} - </p>
				<p>{points} pt</p>
			</div>
		</div>
	);
};

export default WordButton;
