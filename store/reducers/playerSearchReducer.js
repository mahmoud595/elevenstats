import { FETCH_PLAYERSEARCH_DATA } from "store/types/playerSearchTypes";

const initialState = {};

export const playerSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERSEARCH_DATA:
      return { ...state, ...action?.payload };
    default:
      return state;
  }
};
