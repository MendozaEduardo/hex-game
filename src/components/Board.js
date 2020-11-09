import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";

import Card from "../components/Card";
import { Context } from "../context/GlobalState";

export default function Board() {
    const [dimension, setDimension] = useState(400);
    const [state] = useContext(Context);

    useEffect(resizeBoard, []);

    useEffect(() => {
        const resizeListener = window.addEventListener("resize", resizeBoard);
        return () => window.removeEventListener("resize", resizeListener);
    }, []);

    function resizeBoard() {
        setDimension(
            Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight)
        );
    }
    return (
        <Grid
            container
            spacing={0}
            className="board"
            direction="row"
            alignItems="center"
            justify="center"
        >
            {state.cards.map((card) => (
                <Card
                    color={card.color}
                    id={card.id}
                    key={card.id}
                    height={dimension / 8}
                    width={dimension / 8}
                />
            ))}
        </Grid>
    );
}
