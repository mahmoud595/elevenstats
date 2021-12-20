import {
  MATCH_TYPE,
  FETCH_MATCHES,
  FETCH_LEAGUE_MATCHES,
  GET_TIMEZONE_COUNTRY,
  SORT_DATA,
  CHANGE_SORT_VALUE,
} from "../types/homeTypes";

const initialState = {
  type: "All Leagues",
  matches: [],
  timeZone: null,
  date: null,
  sort: {
    by: null,
    order: null,
  },
  firstColumnSortValue: "over 0.5",
  secondColumnSortValue: "BTTS",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATCHES:
      return {
        ...state,
        matches: action.payload,
      };
    case MATCH_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case FETCH_LEAGUE_MATCHES:
      const allLeagues = [...state.matches];
      const league = allLeagues.filter(({ slug }) => {
        return slug === action.payload.leagueSlug;
      });
      league[0].fixtures = action.payload.fixtures;
      return {
        ...state,
        matches: [...state.matches, league],
      };
    case GET_TIMEZONE_COUNTRY:
      return {
        ...state,
        timeZone: action.payload.timeZone,
        date: action.payload.date,
      };
    case SORT_DATA:
      return {
        ...state,
        sort: action.payload,
      };
    case CHANGE_SORT_VALUE:
      // console.log(action.payload.i == 1);
      // console.log(action.payload.i == 2);
      return {
        ...state,
        // sort: { ...action.payload },
        firstColumnSortValue:
          action.payload.i == 1
            ? action.payload.name
            : state.firstColumnSortValue,
        secondColumnSortValue:
          action.payload.i == 2
            ? action.payload.name
            : state.secondColumnSortValue,
      };
    default:
      return state;
  }
};
