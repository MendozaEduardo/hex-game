import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import { RESET } from "../context/actions";
import { Context } from "../context/GlobalState";

const GameToolbar = (props) => {
    const [state, dispatch] = useContext(Context);

    return (
        <AppBar className="toolbar" position="static">
            <Button
                id="reset"
                color="inherit"
                onClick={() => {
                    dispatch({ type: RESET });
                }}
            >
                Reset
            </Button>
        </AppBar>
    );
};
export default GameToolbar;
