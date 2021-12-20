import React from "react";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector, shallowEqual } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { TopComp } from "./TopComp/TopComp";
import { BotComp } from "./BotComp/BotComp";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles((theme) => ({
  botCompContainer: {
    flex: 1,
    margin: "7em 0 2.7em 0",
    padding: "0 5rem",
    "@media (max-width:1366px)": {
      margin: "4em 0 2.7 em 0",
      padding: "0 3rem",
    },
    "@media (max-width:640px)": {
      padding: 0,
    },
  },
}));

export const Form = () => {
  const classes = useStyles();
  const { localTeamFixtures, visitorTeamFixtures, localTeam, visitorTeam } =
    useSelector(({ h2h }) => {
      const {
        localTeamFixtures,
        visitorTeamFixtures,
        localTeamStats: { team: localTeam },
        visitorTeamStats: { team: visitorTeam },
      } = h2h;
      return { localTeamFixtures, visitorTeamFixtures, localTeam, visitorTeam };
    }, shallowEqual);

  return (
    <CompWrapper title="Form" tooltip>
      <Grid item container justifyContent="space-around">
        <TopComp />
      </Grid>
      <Grid item container className={classes.botCompContainer}>
        <BotComp teams={localTeamFixtures} team={localTeam} home />
        <BotComp teams={visitorTeamFixtures} team={visitorTeam} />
      </Grid>
    </CompWrapper>
  );
};
