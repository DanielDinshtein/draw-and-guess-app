import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import * as authActions from '../store/actions/auth';

import "./WelcomeView.css";

const WelcomeView = (props) => {
    const username = useRef();

    const dispatch = useDispatch();

    // TODO: Remember props.onStartGame func
    const startGameHandler = async (event) => {
        event.preventDefault();

        try {
            await dispatch(authActions.authenticate(username.current.value));
            console.log(username.current.value);
        } catch (err) {
            // TODO: Error Handler
            console.log("We");
        }
    };

    return (
        <div className="welcome-view">
            <form onSubmit={startGameHandler}>
                <div className="user-name">
                    <h4>Please Enter Your User Name</h4>
                    <input type="text" className="user-input" placeholder="user name" ref={username} required />
                </div>
                <button type="submit" className="submit-btn">
                    Start Game
                </button>
            </form>
        </div>
    );
};

export default WelcomeView;
