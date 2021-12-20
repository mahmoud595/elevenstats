import { Grid, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { TeamComp } from "./TeamComp";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
}));
export const TeamCompContainer = () => {
  const classes = useStyles();
  const {
    localTeamStats,
    visitorTeamStats,
    leagueName,
    localTeamColor,
    visitorTeamColor,
  } = useSelector(({ h2h }) => {
    const {
      fixture: {
        league: { name: leagueName },
        colors: {
          localTeam: { color: localTeamColor },
          visitorTeam: { color: visitorTeamColor },
        },
      },
      localTeamStats,
      visitorTeamStats,
    } = h2h;
    return {
      leagueName,
      localTeamStats,
      visitorTeamStats,
      localTeamColor,
      visitorTeamColor,
    };
  }, shallowEqual);
  const sm = useMediaQuery("(max-width:640px)");
  return (
    <Grid container className={classes.root} direction={sm ? "column" : "row"}>
      <TeamComp
        bgColor={`linear-gradient(270deg, rgba(62, 170, 231, 0) 0%, ${localTeamColor} 100%)`}
        team={localTeamStats}
        leagueName={leagueName}
      />
      <TeamComp
        bgColor={`  linear-gradient(270deg, rgba(209, 47, 236, 0) 0%, ${visitorTeamColor} 100%)`}
        team={visitorTeamStats}
        leagueName={leagueName}
      />
    </Grid>
  );
};
