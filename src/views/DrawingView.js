import React from "react";

import Canvas from "../components/Canvas";

import "./DrawingView.css";

const DrawingView = (props) => {
    return (
        <div className="drawing-view">
            <h2>Drawing View</h2>
            <Canvas />
        </div>
    );
};

export default DrawingView;
