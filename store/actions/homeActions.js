import {
  MATCH_TYPE,
  FETCH_MATCHES,
  FETCH_LEAGUE_MATCHES,
  GET_TIMEZONE_COUNTRY,
  SORT_DATA,
  CHANGE_SORT_VALUE,
} from "../types/homeTypes";
import { startEndDate } from "utils/helperFunctions/homeHelperFunctions";
import apiAxios from "utils/apiAxios";
export const getMatchesType = (type) => (dispatch) => {
  dispatch({
    type: MATCH_TYPE,
    payload: type,
  });
};

export const fetchMatches = (matches) => (dispatch) => {
  dispatch({
    type: FETCH_MATCHES,
    payload: matches,
  });
};

export const fetchLeagueMatches = (leagueSlug, date) => async (dispatch) => {
  try {
    const res = await apiAxios.get(
      `/fixtures?from=${startEndDate(date)[0]}&to=${
        startEndDate(date)[1]
      }&league=${leagueSlug}`
    );
    const data = res?.data?.data[0];
    const fixtures = data?.fixtures;
    dispatch({
      type: FETCH_LEAGUE_MATCHES,
      payload: { fixtures, leagueSlug },
    });
  } catch (e) {
    console.log(e);
  }
};

export const getTimeZoneCountry = (timeZone, date) => (dispatch) => {
  dispatch({
    type: GET_TIMEZONE_COUNTRY,
    payload: { timeZone, date },
  });
};

export const sortData = (sortType, title) => (dispatch) => {
  dispatch({
    type: SORT_DATA,
    payload: { by: title, order: sortType },
  });
};

export const changeSort = (name, i) => (dispatch) => {
  // console.log({ name, i });
  dispatch({
    type: CHANGE_SORT_VALUE,
    payload: { name, i },
  });
};
