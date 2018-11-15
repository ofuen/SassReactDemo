import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
    return (
        <div className="App section">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>

            <button className="button is-danger is-outlined">Hello</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
