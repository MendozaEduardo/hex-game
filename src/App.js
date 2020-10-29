import React from "react";
import Home from "../src/pages/Home";
import Store from "./context/GlobalState";

function App() {
    return (
        <Store>
            <Home className="app"/>;
        </Store>
    );
}

export default App;
