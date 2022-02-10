import React from "react";

import { getWords } from "../utils/wordsVocabulary";

import "./WordChoosingView.css";

const WordChoosingView = (props) => {
    const words = getWords();

    return (
        <div className="word-choosing-view">
            <h3>Choose Word :</h3>
            <div className="choose-word">
                <div className="word-container">
                    <button
                        className="btn"
                        id="easy"
                        onClick={() => {
                            console.log("easy");
                        }}
                    >
                        {words.easy}
                    </button>
                    <div className="word-difficulty">
                        <p className="difficulty">easy - </p>
                        <p className="points">1 pt</p>
                    </div>
                </div>
                <div className="word-container">
                    <button
                        className="btn"
                        id="medium"
                        onClick={() => {
                            console.log("medium");
                        }}
                    >
                        {words.medium}
                    </button>
                    <div className="word-difficulty">
                        <p className="difficulty">medium - </p>
                        <p className="points">3 pt</p>
                    </div>
                </div>
                <div className="word-container">
                    <button
                        className="btn"
                        id="hard"
                        onClick={() => {
                            console.log("hard");
                        }}
                    >
                        {words.hard}
                    </button>
                    <div className="word-difficulty">
                        <p className="difficulty">hard - </p>
                        <p className="points">5 pt</p>
                    </div>
                </div>
            </div>
            <button
                className="start-drawing-btn"
                onClick={() => {
                    console.log("Start Drawing");
                }}
            >
                Start Drawing
            </button>
        </div>
    );
};

export default WordChoosingView;
