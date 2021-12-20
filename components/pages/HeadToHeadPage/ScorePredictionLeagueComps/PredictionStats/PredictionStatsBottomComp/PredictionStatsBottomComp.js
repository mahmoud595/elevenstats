import { useCallback, useMemo } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useSelector, shallowEqual } from "react-redux";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";

import { StatsCard } from "./StatsCard/StatsCard";

const useStyles = makeStyles(({ palette }) => ({
  bottomComp: {
    minHeight: "20em",
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: "0px 0px 20px 20px",
    padding: "0 3em",
    // marginTop: '1em',
    // "@media (min-width: 1700px)": {
    //   marginTop: "1em",
    // },
    "@media (max-width: 1280px)": {
      padding: "0 2rem",
    },
    "@media (max-width: 960px)": {
      padding: "0 0.3rem",
      minHeight: "15em",
    },
  },
  teamsNameGridNotLive: {
    marginLeft: "0.9rem",
    "@media (max-width: 960px)": {
      marginLeft: "0.4rem",
    },
    "@media (max-width: 760px)": {
      marginLeft: "0.2rem",
    },
  },
  statsContainer1Live: {
    height: "100%",
    "& > div": {
      marginRight: "4em",
      "@media (max-width:1192px)": {
        marginRight: "2em",
      },
      "@media (max-width: 960px)": {
        marginRight: "2rem",
      },
      "@media (max-width: 860px)": {
        marginRight: "1.2rem",
      },
      "@media (max-width: 692px)": {
        marginRight: "0.8rem",
      },
      "@media (max-width: 600px)": {
        marginRight: "0 !important",
        // margin: " 0 15px 15px 15px !important",
      },
    },
  },
  statsContainer2Live: {
    height: "100%",

    "& > div:not(:last-child)": {
      marginRight: "4em",
      "@media (max-width:1192px)": {
        marginRight: "2em",
      },
      "@media (max-width: 960px)": {
        marginRight: "2rem",
      },
      "@media (max-width: 860px)": {
        marginRight: "1.2rem",
      },
      "@media (max-width: 692px)": {
        marginRight: "0.8rem",
      },
      "@media (max-width: 600px)": {
        marginRight: "0 !important",
      },
    },
  },

  leftComp: {
    flexBasis: "17%",
    maxWidth: "17%",

    alignSelf: "stretch",
    // paddingTop: '2em',
  },
  statsGrid: {
    "@media (max-width: 600px)": {
      maxWidth: "96px",
    },
  },
}));

export const PredictionStatsBottomComp = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const classes = useStyles({ sm });
  const {
    localTeamGoals,
    localTeamBTTS,
    visitorTeamGoals,
    visitorTeamBTTS,
    seasonStatsGoals,
    seasonStatsCards,
    localTeamCards,
    seasonStatsCorners,
    localTeamCorners,
    visitorTeamCards,
    visitorTeamCorners,
    seasonStatsBTTS,
  } = useSelector(
    ({ h2h }) => {
      const {
        localTeamStats: {
          goals: localTeamGoals,
          BTTS: localTeamBTTS,
          cards: localTeamCards,
          corners: localTeamCorners,
        },
        visitorTeamStats: {
          goals: visitorTeamGoals,
          BTTS: visitorTeamBTTS,
          cards: visitorTeamCards,
          corners: visitorTeamCorners,
        },
        seasonStats: {
          stats: {
            goals: seasonStatsGoals,
            cards: seasonStatsCards,
            corners: seasonStatsCorners,
            BTTS: seasonStatsBTTS,
          },
        },
      } = h2h;
      return {
        localTeamGoals,
        localTeamBTTS,
        visitorTeamGoals,
        visitorTeamBTTS,
        seasonStatsGoals,
        seasonStatsCards,
        localTeamCards,
        seasonStatsCorners,
        localTeamCorners,
        visitorTeamCards,
        visitorTeamCorners,
        seasonStatsBTTS,
      };
    },

    shallowEqual
  );

  const stats = [
    {
      percentage:
        calculateAvg(
          localTeamGoals.overPercentage["2_5"].total,
          visitorTeamGoals.overPercentage["2_5"].total
        ) + "%",

      avg: "Over 2.5",
      type: `League Avg: ${seasonStatsGoals.overPercentage["2_5"].total}%`,
      color: "#FB5266",
      gradColor: "#FF8391",
    },
    {
      percentage:
        calculateAvg(
          localTeamGoals.overPercentage["1_5"].total,
          visitorTeamGoals.overPercentage["1_5"].total
        ) + "%",
      avg: "Over 1.5",
      type: `League Avg: ${seasonStatsGoals.overPercentage["1_5"].total}%`,
      gradColor: "#FF8391",
      color: "#FB5266",
    },
    {
      percentage:
        calculateAvg(
          localTeamBTTS.BTTSPercentage.total,
          visitorTeamBTTS.BTTSPercentage.total
        ) + "%",
      avg: "BTTS",
      type: `League Avg: ${seasonStatsBTTS.BTTSPercentage.total}%`,
      gradColor: "#76EFB4",
      color: "#1BD47B",
    },
    {
      percentage: calculateAvg(
        localTeamGoals.goalsAverage.total,
        visitorTeamGoals.goalsAverage.total
      ),
      avg: "Goals / Match",
      type: `League Avg: ${seasonStatsGoals.goalsAverage.total}`,
      gradColor: "#76EFB4",
      color: "#1BD47B",
    },
    {
      percentage: calculateAvg(
        localTeamCards.cardsAverage.total,
        visitorTeamCards.cardsAverage.total
      ),
      avg: "Cards",
      type: `League Avg: ${seasonStatsCards.cardsAverage.total}`,
      color: "#FF9941",
      gradColor: "#FFD0A7",
    },
    {
      percentage: calculateAvg(
        localTeamCorners.cornersAverage.total,
        visitorTeamCorners.cornersAverage.total
      ),

      avg: "Corners",
      type: `League Avg: ${seasonStatsCorners.cornersAverage.total}`,
      gradColor: "#FF8391",
      color: "#FB5266",
    },
  ];

  const renderStatsCards1 = useCallback(() => {
    return stats.slice(0, 3).map((stat, i) => {
      return (
        <Grid key={i} item className={classes.statsGrid} xs={4}>
          <StatsCard
            key={i}
            perc={stat.percentage}
            avg={stat.avg}
            type={stat.type}
            gradColor={stat.gradColor}
            color={stat.color}
          />
        </Grid>
      );
    });
  }, [stats]);
  const renderStatsCards2 = useCallback(() => {
    return stats.slice(3, 6).map((stat, i) => {
      return (
        <Grid key={i} item className={classes.statsGrid} xs={4}>
          <StatsCard
            key={i}
            perc={stat.percentage}
            avg={stat.avg}
            type={stat.type}
            gradColor={stat.gradColor}
            color={stat.color}
          />
        </Grid>
      );
    });
  }, [stats]);
  const statsCardsMemo1 = useMemo(() => renderStatsCards1(), [stats]);
  const statsCardsMemo2 = useMemo(() => renderStatsCards2(), [stats]);

  return (
    // <Grid
    //   item
    //   container
    //   justifyContent="space-around"
    //   alignItems="center"
    //   className={classes.bottomComp}
    //   wrap={sm ? "wrap" : "nowrap"}
    // >
    <>
      <Grid item xs={12} sm={6}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          className={classes.statsContainer1Live}
          wrap="nowrap"
        >
          {statsCardsMemo1}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          className={classes.statsContainer2Live}
          wrap="nowrap"
        >
          {statsCardsMemo2}
        </Grid>
      </Grid>
    </>
    /* </Grid> */
  );
};
