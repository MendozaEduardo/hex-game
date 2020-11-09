import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card, Container, Grid, Paper } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core/useMediaQuery";

import DogeImg from "../assets/Doge.jpg";
import { Context } from "../context/GlobalState";
import { DogeComments } from "../utils/dogeComments";
import { getRandomIndex } from "../utils/gameFunctions";

function getDimension() {
    var shortestDimension = Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
    );

    console.log("Shortest Dimension: ", shortestDimension);
    return shortestDimension;
}

export default function Doge() {
    let dimensions = {
        width: null,
        height: null,
    };

    if (getDimension() < 500) {
        dimensions.width = 350;
        dimensions.height = 150;
    } else {
        dimensions.width = 650;
        dimensions.height = 350;
    }

    const useStyles = makeStyles({
        root: {
            paddingTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 800,
            maxHeight: 550,
        },
        dimensions,
    });

    const classes = useStyles();
    const [state] = useContext(Context);
    const { score, objective } = state;

    return (
        <Container className={classes.root} maxWidth="md">
            <Card>
                <CardMedia className={classes.dimensions} image={DogeImg} title="Doge" />
                <CardContent>
                    <Typography align="center" variant="h6" component="h4">
                        {score > 0
                            ? DogeComments[0][getRandomIndex(DogeComments)]
                            : DogeComments[1]}
                    </Typography>
                    <Typography align="center" variant="h6" component="h4">
                        <strong>Score:</strong>
                        {score}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
