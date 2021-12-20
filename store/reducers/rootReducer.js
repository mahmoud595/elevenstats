import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import { h2hReducer } from "./h2hReducer";
import { homeReducer } from "./homeReducer";
import { playerSearchReducer } from "./playerSearchReducer";
const combinedReducer = combineReducers({
  h2h: h2hReducer,
  home: homeReducer,
  playerSearch: playerSearchReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export default reducer;
