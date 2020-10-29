import React, { useReducer, createContext } from "react";
import { initializeGame } from "../utils/gameFunctions";
import Reducer from "./reducer";

const game = {
    cards: [],
    objective: null,
    
};

initializeGame(game);

export const initialState = {
    score: 0,
    cards: game.cards,
    objective: game.objective,
};

const GlobalState = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);

export default GlobalState;
