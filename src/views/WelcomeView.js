import React, { useRef } from "react";

import "./WelcomeView.css";

const WelcomeView = (props) => {
    const userName = useRef();

    // TODO: Remember props.onStartGame func
    const startGameHandler = (event) => {
        event.preventDefault();
        console.log(userName.current.value);
    };

    return (
        <div className="welcome-view">
            <form onSubmit={startGameHandler}>
                <div className="user-name">
                    <h4>Please Enter Your User Name</h4>
                    <input type="text" className="user-input" placeholder="user name" ref={userName} required />
                </div>
                <button type="submit" className="submit-btn">
                    Start Game
                </button>
            </form>
        </div>
    );
};

export default WelcomeView;
