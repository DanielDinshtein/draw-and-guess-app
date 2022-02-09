// import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";

import WelcomeView from "./views/WelcomeView";

function App() {

    const [headerTitle, setHeaderTitle] = useState("Draw & Guess");

    return (
        <div className="App">
            <Header headerTitle={headerTitle} />
            <WelcomeView onStartGame={setHeaderTitle}/>
        </div>
    );
}

export default App;
