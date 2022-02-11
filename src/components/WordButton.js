import React from "react";

import "../views/WordChoosingView.css";

const WordButton = (props) => {
    return (
        <div className="word-container">
            <button className="btn" id={props.difficulty} onClick={props.wordChoose}>
                {props.word}
            </button>
            <div className="word-difficulty">
                <p className="difficulty">{props.difficulty} - </p>
                <p className="points">{props.points} pt</p>
            </div>
        </div>
    );
};

export default WordButton;
