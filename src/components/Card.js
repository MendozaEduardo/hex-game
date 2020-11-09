import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NEXT_ROUND, RESET } from "../context/actions";

import { Context } from "../context/GlobalState";

export default function Card({ height, width, color }) {
    const [state, dispatch] = useContext(Context);
    const { objective } = state;

    // Circle click logic, compare with global value for the goal, determine if it's right or wrong

    return (
        <div
            className="card"
            style={{ backgroundColor: color, width: width, height: height }}
            onClick={() => {
                color === objective ? dispatch({ type: NEXT_ROUND }) : dispatch({ type: RESET });
            }}
        />
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};
