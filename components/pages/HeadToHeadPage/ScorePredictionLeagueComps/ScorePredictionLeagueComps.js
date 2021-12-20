import { useState, useEffect, memo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";

import { PredictionStats } from "./PredictionStats/PredictionStats";
import { ScoreTable } from "./ScoreTable/ScoreTable";
import { LiveScore } from "./LiveScore/LiveScore";
import { LeagueTableWrapper } from "./LeagueTableWrapper/LeagueTableWrapper";
import { TrendContainer } from "./TrendContainer/TrendContainer";
const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    marginTop: "11em",

    flexDirection: "row",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  container: {
    height: "100%",
    paddingRight: "5em",
    [breakpoints.down("sm")]: {
      paddingRight: 0,
      // marginBottom: '5em',
    },
    // "& >div:first-child": {
    //   marginBottom: "5em",
    // },
  },
  liveScoreContainer: {
    [breakpoints.down("sm")]: {
      marginTop: "5em",
    },
  },
}));

export const ScorePredictionLeagueComps = memo(() => {
  const classes = useStyles();
  const { fixtureStatus } = useSelector(({ h2h }) => {
    const {
      fixture: {
        time: { status: fixtureStatus },
      },
    } = h2h;
    return {
      fixtureStatus,
    };
  }, shallowEqual);
  const [live, setLive] = useState(
    ["FT", "LIVE", "HT", "FT_PEN", "AET", "PEN_LIVE"].includes(fixtureStatus)
  );

  useEffect(() => {
    setLive(
      ["FT", "LIVE", "HT", "FT_PEN", "AET", "PEN_LIVE"].includes(fixtureStatus)
    );
  }, [fixtureStatus]);

  return (
    <>
      <Grid item container className={classes.root}>
        <Grid item sm={12} md={8} style={{ width: "100%" }}>
          <Grid
            container
            direction="column"
            className={classes.container}
            justifyContent="space-between"
          >
            {live && <ScoreTable />}

            <LeagueTableWrapper live={live} />
          </Grid>
        </Grid>
        <Grid item sm={12} md={4} className={classes.liveScoreContainer}>
          <LiveScore
            title={
              live
                ? ["LIVE", "HT", "PEN_LIVE"].includes(fixtureStatus)
                  ? "Live Score"
                  : "Match Events"
                : "Match Events"
            }
            live={live}
            setLive={setLive}
          />
        </Grid>
      </Grid>
      <TrendContainer />
      <div id="cardsContainer" style={{ display: "flex", width: "100%" }}>
        <PredictionStats />
      </div>
    </>
  );
});
