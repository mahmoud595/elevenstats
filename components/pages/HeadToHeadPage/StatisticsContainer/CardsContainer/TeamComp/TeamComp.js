import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid } from "@mui/material";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "100%",
    flex: 1,
    // boxShadow: '2px 2px 10px -1px rgba(0,0,0,0.1)',
    // marginRight: "10px",
    padding: "0 0 0 1.4em",
    "@media (max-width:640px)": {
      padding: "0 0 4em 1.4em",
    },
  },
}));

import { TopComp } from "./TopComp/TopComp";
import { MidComp } from "./MidComp/MidComp";
import { TeamBottomComp } from "./TeamBottomComp/TeamBottomComp";
export const TeamComp = React.memo(({ bgColor, team, leagueName }) => {
  const classes = useStyles();
  // console.log(team.team);
  return (
    <Grid
      item
      container
      direction="column"
      wrap="nowrap"
      className={classes.root}

      //   justifyContent="space-between"
    >
      <TopComp
        bgColor={bgColor}
        teamName={team.team.name}
        teamLogo={team.team.logoPath}
        leagueName={leagueName}
      />
      <MidComp points={team.points.PPG} form={team.records.currentForm} />

      <TeamBottomComp
        team={{
          // matches: team.matches,
          records: team.records,
          cleanSheets: team.cleanSheets,
          BTTS: team.BTTS,
          failedToScore: team.failedToScore,
          goals: team.goals,
        }}
      />
    </Grid>
  );
});
