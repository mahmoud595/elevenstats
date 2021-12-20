import { useCallback, memo, useMemo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";

import { SideComp } from "./SideComp/SideComp";
import { AngularChartV5 } from "components/Layout/Charts/AngularChart/AngularChartV5";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: "relative",
  },
  chartContainer: {
    height: "207px",
    width: "100%",
    minWidth: "",
    "@media (max-width:1366px)": {
      height: "166px",
    },
  },
}));
export const TopComp = memo(() => {
  const classes = useStyles();
  const {
    localTeamPoints,
    localTeamName,
    localTeamLogo,
    localTeamForm,
    visitorTeamPoints,
    visitorTeamName,
    visitorTeamLogo,
    visitorTeamForm,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        points: {
          PPG: { home: localTeamPoints },
        },
        team: { name: localTeamName, logoPath: localTeamLogo },
        records: {
          currentForm: { home: localTeamForm },
        },
      },
      visitorTeamStats: {
        points: {
          PPG: { away: visitorTeamPoints },
        },
        team: { name: visitorTeamName, logoPath: visitorTeamLogo },
        records: {
          currentForm: { away: visitorTeamForm },
        },
      },
    } = h2h;
    return {
      localTeamPoints,
      localTeamName,
      localTeamLogo,
      localTeamForm,
      visitorTeamPoints,
      visitorTeamName,
      visitorTeamLogo,
      visitorTeamForm,
    };
  }, shallowEqual);

  const getWinner = useCallback(() => {
    let value,
      homePPG = localTeamPoints,
      visitorPPG = visitorTeamPoints,
      homeTeam = localTeamName,
      visitorTeam = visitorTeamName;
    if (homePPG > visitorPPG) {
      if (visitorPPG == 0) return [homeTeam, -100];
      value = Math.round(((homePPG - visitorPPG) / visitorPPG) * 100);
      // if (value > 100) value = 100;
      return [homeTeam, -1 * value];
    } else if (visitorPPG > homePPG) {
      if (homePPG == 0) return [visitorTeam, 100];
      value = Math.round(((visitorPPG - homePPG) / homePPG) * 100);
      // if (value > 100) value = 100;
      // console.log(value);
      return [visitorTeam, value];
    } else {
      return null;
    }
  }, [localTeamPoints, visitorTeamPoints, localTeamName, visitorTeamName]);
  const winner = useMemo(
    () => getWinner(),
    [localTeamPoints, visitorTeamPoints, localTeamName, visitorTeamName]
  );
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      wrap="nowrap"
    >
      <SideComp
        form={localTeamForm.split("")}
        PPG={localTeamPoints}
        logo={localTeamLogo}
        backgroundColor={
          localTeamPoints > visitorTeamPoints ? "#1BD47B" : "#FB5266"
        }
      />
      <Grid item xs={8} className={classes.chartContainer}>
        <AngularChartV5 winner={winner} />
      </Grid>
      <SideComp
        right={true}
        form={visitorTeamForm.split("")}
        PPG={visitorTeamPoints}
        logo={visitorTeamLogo}
        teamName={visitorTeamName}
        backgroundColor={
          visitorTeamPoints > localTeamPoints ? "#1BD47B" : "#FB5266"
        }
      />
    </Grid>
  );
});
