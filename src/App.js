import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import authReducer from "./store/reducers/auth";

import WelcomeView from "./views/WelcomeView";
import WordChoosingView from "./views/WordChoosingView";
import DrawingView from "./views/DrawingView";
import GuessingView from "./views/GuessingView";
import WaitingView from "./views/WaitingView";

import Header from "./components/Header";

import "./App.css";

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    // TODO: Maybe Game state ?
    const [headerSubtitle, setHeaderTitle] = useState("Welcome");

    return (
        <div className="App">
            <Provider store={store}>
                <Header headerSubtitle={headerSubtitle} />
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomeView onStartGame={setHeaderTitle} />} />
                        <Route path="/wordChoosing" element={<WordChoosingView />} />
                        <Route path="/drawing" element={<DrawingView />} />
                        <Route path="/guessing" element={<GuessingView />} />
                        <Route path="/waiting" element={<WaitingView />} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
