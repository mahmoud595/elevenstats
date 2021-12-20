import { HYDRATE } from 'next-redux-wrapper';
import {
  FETCH_H2h_DATA,
  UPDATE_SCORE,
  UPDATE_FIXTURE_STATS,
  UPDATE_EVENTS,
  UPDATE_FIXTURE_DETAILS,
  TOGGLE_DIALOG,
} from '../types/h2hTypes';
const initialState = {
  openPastH2hDialog: false,
};

export const h2hReducer = (state = initialState, action) => {
  // console.log(action?.payload);
  switch (action.type) {
    case FETCH_H2h_DATA:
      return { ...state, ...action?.payload };
    case TOGGLE_DIALOG:
      return {
        ...state,
        openPastH2hDialog: !state.openPastH2hDialog,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        fixture: {
          ...state.fixture,
          scores: {
            ...state.fixture.scores,
            localTeamScore: action.payload.localTeamScore,
            visitorTeamScore: action.payload.visitorTeamScore,
          },
        },
      };
    case UPDATE_FIXTURE_STATS:
      return {
        ...state,
        visitorTeamStats: {
          ...state.visitorTeamStats,
          stats: {
            ...action.payload.visitorTeamStats,
          },
        },
        localTeamStats: {
          ...state.localTeamStats,
          stats: {
            ...action.payload.localTeamStats,
          },
        },
      };
    case UPDATE_EVENTS:
      return {
        ...state,
        fixture: {
          ...state.fixture,
          events: [...action.payload.events],
        },
      };
    case UPDATE_FIXTURE_DETAILS:
      return {
        ...state,
        fixture: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// {
//   team: {
//     records: {

//     }
//   }
// }
