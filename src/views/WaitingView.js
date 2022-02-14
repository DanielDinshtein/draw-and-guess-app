import React from "react";
import { useSelector } from "react-redux";


import "./WaitingView.css";

const WaitingView = (props) => {
    const gameStage = useSelector((state) => state.gameStage.currentGameStage);

    console.log(gameStage);

    return (
        <div className="waiting-view">
            <h2>Waiting View</h2>
        </div>
    );
};

export default WaitingView;
