import React from "react";

import Banner from "../components/Banner";
import GameToolbar from "../components/GameToolbar";
import Board from "../components/Board";
import Doge from "../components/Doge";

const Home = () => {
    return (
        <>
            <React.StrictMode>
                <Banner/>
                <GameToolbar />
                <Doge />
                <Board />
            </React.StrictMode>
        </>
    );
};

export default Home;
