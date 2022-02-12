import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as usersActions from "../store/actions/users";

import "./WelcomeView.css";

const WelcomeView = (props) => {
    const username = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // TODO: Remember props.onStartGame func
    const startGameHandler = async (event) => {
        event.preventDefault();

        try {
            await dispatch(usersActions.login(username.current.value));
            const firstPlayer = JSON.parse(sessionStorage.getItem("firstPlayer"));

            if (firstPlayer) {
                if (firstPlayer === "yes") {
                    navigate("/wordChoosing", {state:"Word Choosing"});
                } else {
                    navigate("/waiting", {state:"Waiting Room"});
                }
            } else {
                navigate("/", {state:"Welcome"});
            }
        } catch (err) {
            // TODO: Error Handler
            console.log(err);
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
