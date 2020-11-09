import React, { useContext } from "react";
import { Context } from "../context/GlobalState";

const Banner = () => {
    const [state] = useContext(Context);
    let { objective } = state;

    return (
        <div className="banner">
            <h1>The Paw-some Hex Game</h1>
            <span id="colorDisplay">
                <strong>Objective: </strong>
                {objective ? objective : "RGB"}
            </span>
        </div>
    );
};

export default Banner;
