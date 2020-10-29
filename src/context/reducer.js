import { NEXT_ROUND, RESET } from "./actions";
import { initialState } from "./GlobalState";
import { initializeGame } from "../utils/gameFunctions";

const game = {
    cards: [],
    objective: null,
    
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_ROUND:
            initializeGame(game);
            return {
                score: state.score + 1,
                cards: game.cards,
                objective: game.objective,
            };
        case RESET:
            initializeGame(game);
            return {
                score: 0,
                cards: game.cards,
                objective: game.objective,
            };
        default:
            return state;
    }
}

export default Reducer;
