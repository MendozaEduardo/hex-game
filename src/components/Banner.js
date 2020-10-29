import React, { useContext } from "react";
import { Context } from "../context/GlobalState";

const Banner = () => {
    const [state] = useContext(Context);
    let { objective } = state;

    return (
        <div>
            <h1>
                The Paw-some
                <br />
                <span id="colorDisplay">{objective ? objective : "RGB"}</span>
                <br />
                Hex Game
            </h1>
        </div>
    );
};

export default Banner;
