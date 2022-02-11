import React, { useState, useCallback, useRef } from "react";

import { getWords } from "../utils/wordsVocabulary";

import WordButton from "../components/WordButton";

import "./WordChoosingView.css";

const words = getWords();

const WordChoosingView = (props) => {
    const [word, setWord] = useState("");
    const startDisabled = useRef(true);

    const wordChoose = useCallback((event) => {
        setWord(words[event.target.id]);
        startDisabled.current = false;
    }, []);

    const onStartDrawingHandler = () => {
        console.log(startDisabled.current);
    };

    return (
        <div className="word-choosing-view">
            <h3>Choose Word :</h3>
            <div className="choose-word">
                <WordButton word={words.easy} difficulty={"easy"} wordChoose={wordChoose} points={1} />
                <div className="word-container">
                    <button className="btn" id="easy" onClick={wordChoose}>
                        {words.easy}
                    </button>
                    <div className="word-difficulty">
                        <p className="difficulty">easy - </p>
                        <p className="points">1 pt</p>
                    </div>
                </div>
                <div className="word-container">
                    <button className="btn" id="medium" onClick={wordChoose}>
                        {words.medium}
                    </button>
                    <div className="word-difficulty">
                        <p className="difficulty">medium - </p>
                        <p className="points">3 pt</p>
                    </div>
                </div>
                <div className="word-container">
                    <button className="btn" id="hard" onClick={wordChoose}>
                        {words.hard}
                    </button>
                    <div className="word-difficulty">
                        <p className="difficulty">hard - </p>
                        <p className="points">5 pt</p>
                    </div>
                </div>
            </div>
            <div className="show-word">
                <p id="word-chose">The word you chose</p>
                <p>&nbsp;-&nbsp;{word}</p>
            </div>
            <button className="start-drawing-btn" disabled={startDisabled.current} onClick={onStartDrawingHandler}>
                Start Drawing
            </button>
        </div>
    );
};

export default WordChoosingView;
