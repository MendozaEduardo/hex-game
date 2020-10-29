import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import DogeImg from "../assets/Doge.jpg";
import { Context } from "../context/GlobalState";
import { DogeComments } from "../utils/dogeComments";
import { getRandomIndex } from "../utils/gameFunctions";

const useStyles = makeStyles({
    root: {
        minWidth: 800,
    },
    media: {
        minHeight: 300,
    },
});

export default function Doge() {
    const classes = useStyles();
    const [state] = useContext(Context);
    const { score, objective } = state;

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={DogeImg} title="Doge" />
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h6" component="h4">
                            {score > 0
                                ? DogeComments[0][getRandomIndex(DogeComments[1])]
                                : DogeComments[1]}
                        </Typography>
                        <Typography align="center" gutterBottom variant="h6" component="h4">
                            Score: {score}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
