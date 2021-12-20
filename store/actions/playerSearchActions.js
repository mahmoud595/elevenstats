import { FETCH_PLAYERSEARCH_DATA } from "../types/playerSearchTypes";

export const fetchPlayerSearchData = (data) => (dispatch) => {
  dispatch({
    type: FETCH_PLAYERSEARCH_DATA,
    payload: data,
  });
};
