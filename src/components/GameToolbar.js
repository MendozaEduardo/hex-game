import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { RESET } from "../context/actions";
import { Context } from "../context/GlobalState";

const GameToolbar = (props) => {
    const [state, dispatch] = useContext(Context);

    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    id="reset"
                    color="inherit"
                    onClick={() => {
                        dispatch({ type: RESET });
                    }}
                >
                    Reset
                </Button>
            </Toolbar>
        </AppBar>
    );
};
export default GameToolbar;
