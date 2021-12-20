import {
  UPDATE_SCORE,
  FETCH_H2h_DATA,
  UPDATE_FIXTURE_STATS,
  UPDATE_EVENTS,
  UPDATE_FIXTURE_DETAILS,
  TOGGLE_DIALOG,
} from "../types/h2hTypes";

import { structureFixture } from "utils/helperFunctions/h2hHelperFunctions";
import apiAxios from "utils/apiAxios";

export const fetchH2hData = (data) => (dispatch) => {
  dispatch({
    type: FETCH_H2h_DATA,
    payload: data,
  });
};

export const upadteScore = (localTeamScore, visitorTeamScore) => (dispatch) => {
  dispatch({
    type: UPDATE_SCORE,
    payload: { localTeamScore, visitorTeamScore },
  });
};
export const upadteEvents = (events) => (dispatch) => {
  dispatch({
    type: UPDATE_EVENTS,
    payload: { events },
  });
};

export const updateFixtureStats =
  (stats, localTeamId, visitorTeamId) => (dispatch) => {
    let localTeamStats, visitorTeamStats;
    for (const team of stats) {
      if (team.team === localTeamId) {
        localTeamStats = {
          substitutions: team.substitutions ?? 0,
          corners: team.corners ?? 0,
          possessionTime: team.possessionTime ?? 0,
          penalties: team.penalties ?? 0,
          goals: team.goals ?? 0,
          goalAttempts: team.goalAttempts ?? 0,
          shots: {
            offGoal: team.shots?.offGoal ?? 0,
            onGoal: team.shots?.onGoal ?? 0,
            total: team.shots?.total ?? 0,
            blocked: team.shots?.blocked ?? 0,
            insideBox: team.shots?.insideBox ?? 0,
            outsideBox: team.shots?.outsideBox ?? 0,
          },
          goalKick: team.goalKick ?? 0,
          freeKick: team.freeKick ?? 0,
          offside: team.offsides ?? 0,
          throwIn: team.throwIn ?? 0,
          saves: team.saves ?? 0,
          yellowCards: team.yellowCards ?? 0,
          redCards: team.redCards ?? 0,
          attacks: {
            attacks: team.attacks?.attacks ?? 0,
            dangerousAttacks: team.attacks?.dangerousAttacks ?? 0,
          },
          team: team.team ?? 0,
          fixture: team.fixture ?? 0,
          fouls: team.fouls ?? 0,
          passes: {
            total: team.passes?.total ?? 0,
            accurate: team.passes?.accurate ?? 0,
            percentage: team.passes?.percentage ?? 0,
          },
        };
      } else if (team.team === visitorTeamId) {
        visitorTeamStats = {
          substitutions: team.substitutions ?? 0,
          corners: team.corners ?? 0,
          possessionTime: team.possessionTime ?? 0,
          penalties: team.penalties ?? 0,
          goals: team.goals ?? 0,
          goalAttempts: team.goalAttempts ?? 0,
          shots: {
            offGoal: team.shots?.offGoal ?? 0,
            onGoal: team.shots?.onGoal ?? 0,
            total: team.shots?.total ?? 0,
            blocked: team.shots?.blocked ?? 0,
            insideBox: team.shots?.insideBox ?? 0,
            outsideBox: team.shots?.outsideBox ?? 0,
          },
          goalKick: team.goalKick ?? 0,
          freeKick: team.freeKick ?? 0,
          offside: team.offsides ?? 0,
          throwIn: team.throwIn ?? 0,
          saves: team.saves ?? 0,
          yellowCards: team.yellowCards ?? 0,
          redCards: team.redCards ?? 0,
          attacks: {
            attacks: team.attacks?.attacks ?? 0,
            dangerousAttacks: team.attacks?.dangerousAttacks ?? 0,
          },
          team: team.team ?? 0,
          fixture: team.fixture ?? 0,
          fouls: team.fouls ?? 0,
          passes: {
            total: team.passes?.total ?? 0,
            accurate: team.passes?.accurate ?? 0,
            percentage: team.passes?.percentage ?? 0,
          },
        };
      }
    }
    dispatch({
      type: UPDATE_FIXTURE_STATS,
      payload: {
        localTeamStats,
        visitorTeamStats,
      },
    });
  };

export const toggleDialog = () => (dispatch) => {
  return dispatch({
    type: TOGGLE_DIALOG,
  });
};

export const updateFixtureDetails = (slug) => async (dispatch) => {
  try {
    const response = await apiAxios.get(
      `/fixtures/${slug}?includes=events,stats,venue`
    );

    if (!response?.data?.data) return;

    const fixture = structureFixture(response.data.data);

    dispatch({
      type: UPDATE_FIXTURE_DETAILS,
      payload: fixture,
    });
  } catch (e) {
    console.log(e);
  }
};
