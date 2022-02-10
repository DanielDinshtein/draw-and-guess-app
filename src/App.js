import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk  from "redux-thunk";

import authReducer from "./store/reducers/auth";

import WelcomeView from "./views/WelcomeView";

import Header from "./components/Header";

import "./App.css";

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk ));

function App() {
    const [headerTitle, setHeaderTitle] = useState("Draw & Guess");

    return (
        <div className="App">
            <Provider store={store}>
                <Header headerTitle={headerTitle} />
                <WelcomeView onStartGame={setHeaderTitle} />
            </Provider>
        </div>
    );
}

export default App;
