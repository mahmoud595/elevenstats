import { memo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Hidden, Typography } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { Card } from "./Card/Card";
import { MiddleComp } from "./MiddleComp/MiddleComp";
// import { math } from '@amcharts/amcharts4/core';
import { MobileCard } from "./MobileCard/MobileCard";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
const useStyles = makeStyles(({ palette }) => ({
  container: {
    padding: "1.8em 3em 0.9em 3em",
    "@media (max-width:640px)": {
      padding: "0 10px 16px 10px",
    },
  },
  row: {
    marginBottom: "1.8vh",
  },
  mobileRow: {
    marginTop: 10,
  },
}));

export const WhoIsLikelyCard = memo(() => {
  const classes = useStyles();
  const {
    localTeamGoals,
    loalTeamCleanSheets,
    localTeam,
    visitorTeamGoals,
    visitorTeamCleanSheets,
    visitorTeam,
    isCup,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        goals: localTeamGoals,
        cleanSheets: loalTeamCleanSheets,
        team: localTeam,
      },
      visitorTeamStats: {
        goals: visitorTeamGoals,
        cleanSheets: visitorTeamCleanSheets,
        team: visitorTeam,
      },
      fixture: {
        league: { isCup },
      },
    } = h2h;
    return {
      localTeamGoals,
      loalTeamCleanSheets,
      localTeam,
      visitorTeamGoals,
      visitorTeamCleanSheets,
      visitorTeam,
      isCup,
    };
  }, shallowEqual);

  const getValue = (
    team,
    localTeamValue = isCup ? "total" : "home",
    visitorTeamValue = isCup ? "total" : "away"
  ) => {
    const localTeamScorePercentage =
      localTeamGoals.scoredMatchesPercentage[localTeamValue];
    const localTeamCleanSheetsPercentage =
      loalTeamCleanSheets.cleanSheetsPercentage[localTeamValue];
    const visitorTeamScorePercentage =
      visitorTeamGoals.scoredMatchesPercentage[visitorTeamValue];
    const visitorTeamCleanSheetsPercentage =
      visitorTeamCleanSheets.cleanSheetsPercentage[visitorTeamValue];

    if (team === "home") {
      return +localTeamScorePercentage > 0
        ? visitorTeamCleanSheetsPercentage == 0
          ? 100
          : Math.round(
              (+localTeamScorePercentage /
                (+localTeamScorePercentage +
                  +visitorTeamCleanSheetsPercentage)) *
                100
            )
        : localTeamScorePercentage == 0 && visitorTeamCleanSheetsPercentage == 0
        ? 50
        : 0;
    } else if (team === "away") {
      return +visitorTeamScorePercentage > 0
        ? localTeamCleanSheetsPercentage == 0
          ? 0
          : Math.round(
              100 -
                (+visitorTeamScorePercentage /
                  (+localTeamCleanSheetsPercentage +
                    +visitorTeamScorePercentage)) *
                  100
            )
        : visitorTeamScorePercentage == 0 && localTeamCleanSheetsPercentage == 0
        ? 50
        : 100;
    }
  };
  const getChanceValue = (
    home,
    localTeamValue = isCup ? "total" : "home",
    visitorTeamValue = isCup ? "total" : "away"
  ) => {
    const localTeamScorePercentage =
      localTeamGoals.scoredMatchesPercentage[localTeamValue];
    const localTeamCleanSheetsPercentage =
      loalTeamCleanSheets.cleanSheetsPercentage[localTeamValue];
    const visitorTeamScorePercentage =
      visitorTeamGoals.scoredMatchesPercentage[visitorTeamValue];
    const visitorTeamCleanSheetsPercentage =
      visitorTeamCleanSheets.cleanSheetsPercentage[visitorTeamValue];
    if (home) {
      return localTeamScorePercentage - visitorTeamCleanSheetsPercentage < 40
        ? "Uncertainty"
        : localTeamScorePercentage - visitorTeamCleanSheetsPercentage > 60
        ? "High Chance"
        : "Medium Chance";
    } else {
      return visitorTeamScorePercentage - localTeamCleanSheetsPercentage < 40
        ? "Uncertainty"
        : visitorTeamScorePercentage - localTeamCleanSheetsPercentage > 60
        ? "High Chance"
        : "Medium Chance";
    }
  };
  // getValue();
  return (
    <CompWrapper
      title="Who is likely to score"
      tooltip
      backgroundColor="#022A54"
    >
      <Grid item container direction="column" className={classes.container}>
        {/* ============== i think this comp need to be looped and memoized========= */}
        <Hidden smDown implementation="css">
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.row}
          >
            <Grid item xs={3}>
              <Card
                color="#3EAAE7"
                bgColor="#E8F5FC"
                percentageColor="#3EAAE7"
                type={isCup ? "OverAll" : "Home"}
                team={localTeam}
                data={
                  isCup
                    ? localTeamGoals.scoredMatchesPercentage.total
                    : localTeamGoals.scoredMatchesPercentage.home
                }
              />
            </Grid>
            <Grid item xs={6}>
              <MiddleComp
                teamName={localTeam.name}
                value={getValue("home")}
                chance={getChanceValue(true)}
              />
            </Grid>
            <Grid item xs={3} container justifyContent="flex-end">
              <Card
                color="#D12FEC"
                bgColor="#F9E6FD"
                percentageColor="#D12FEC"
                team={visitorTeam}
                type={isCup ? "OverAll" : "Away"}
                data={
                  isCup
                    ? visitorTeamCleanSheets.cleanSheetsPercentage.total
                    : visitorTeamCleanSheets.cleanSheetsPercentage.away
                }
                dataType="Clean Sheets"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.row}
          >
            <Grid item xs={3}>
              <Card
                color="#3EAAE7"
                bgColor="#E8F5FC"
                percentageColor="#3EAAE7"
                team={localTeam}
                type={isCup ? "OverAll" : "Home"}
                data={
                  isCup
                    ? loalTeamCleanSheets.cleanSheetsPercentage.total
                    : loalTeamCleanSheets.cleanSheetsPercentage.home
                }
                dataType="Clean Sheets"
              />
            </Grid>
            <Grid item xs={6}>
              <MiddleComp
                teamName={visitorTeam.name}
                value={getValue("away")}
                chance={getChanceValue(false)}
              />
            </Grid>
            <Grid item xs={3} container justifyContent="flex-end">
              <Card
                color="#D12FEC"
                bgColor="#F9E6FD"
                percentageColor="#D12FEC"
                team={visitorTeam}
                type={isCup ? "OverAll" : "Away"}
                data={
                  isCup
                    ? visitorTeamGoals.scoredMatchesPercentage.total
                    : visitorTeamGoals.scoredMatchesPercentage.away
                }
              />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp implementation="css">
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.mobileRow}
          >
            <MobileCard
              color="#1BD47B"
              bgColor=" #E8FFF4"
              percentageColor="#1BD47B"
              type={isCup ? "OverAll" : "Home"}
              team={localTeam}
              data={
                isCup
                  ? localTeamGoals.scoredMatchesPercentage.total
                  : localTeamGoals.scoredMatchesPercentage.home
              }
            />
            <Grid item xs={6}>
              <MiddleComp
                teamName={localTeam.name}
                value={getValue("home")}
                chance={getChanceValue(true)}
              />
            </Grid>
            <MobileCard
              color="#FC7D58"
              bgColor="rgba(252, 125, 88, 0.3)"
              percentageColor="#FB5266"
              team={visitorTeam}
              type={isCup ? "OverAll" : "Away"}
              data={
                isCup
                  ? visitorTeamCleanSheets.cleanSheetsPercentage.total
                  : visitorTeamCleanSheets.cleanSheetsPercentage.away
              }
              dataType="Clean Sheets"
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.mobileRow}
          >
            <MobileCard
              color="#1BD47B"
              bgColor=" #E8FFF4"
              percentageColor="#1BD47B"
              type={isCup ? "OverAll" : "Home"}
              team={localTeam}
              data={
                isCup
                  ? loalTeamCleanSheets.cleanSheetsPercentage.total
                  : loalTeamCleanSheets.cleanSheetsPercentage.home
              }
            />
            <Grid item xs={6}>
              <MiddleComp
                teamName={localTeam.name}
                value={getValue("home")}
                chance={getChanceValue(true)}
              />
            </Grid>
            <MobileCard
              color="#FC7D58"
              bgColor="rgba(252, 125, 88, 0.3)"
              percentageColor="#FB5266"
              team={visitorTeam}
              type={isCup ? "OverAll" : "Away"}
              data={
                isCup
                  ? visitorTeamGoals.scoredMatchesPercentage.total
                  : visitorTeamGoals.scoredMatchesPercentage.away
              }
            />
          </Grid>
        </Hidden>
      </Grid>
    </CompWrapper>
  );
});
