import React, { useState, useCallback, useRef } from "react";

import WordButton from "../components/WordButton";

import { getWords } from "../utils/wordsVocabulary";
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
                <WordButton word={words.easy} wordChoose={wordChoose} difficulty={"easy"} points={1} />
                <WordButton word={words.medium} wordChoose={wordChoose} difficulty={"medium"} points={3} />
                <WordButton word={words.hard} wordChoose={wordChoose} difficulty={"hard"} points={5} />
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
