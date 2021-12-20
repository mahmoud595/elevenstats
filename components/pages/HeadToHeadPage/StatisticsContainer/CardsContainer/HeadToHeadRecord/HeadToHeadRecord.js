import React from "react";
import { useCallback, useMemo, useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, useMediaQuery, Hidden } from "@mui/material";
import Image from "next/image";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { toggleDialog } from "store/actions/h2hActions";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { Btn } from "../../../../..";
import { PieChart } from "components/Layout/Charts/PieChart/PieChart";
import { PredictionStats } from "../../../ScorePredictionLeagueComps/PredictionStats/PredictionStats";
import { StatsCard } from "components/";
import { NoRecordData } from "public";
import { PieChartV5 } from "components/Layout/Charts/PieChart/PieChartV5";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
const useStyles = makeStyles(({ palette }) => ({
  img: {
    width: "80%",
    height: "100%",
  },
  team: {
    letterSpacing: "1.25px",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: 12,
    whiteSpace: "normal",
    "@media (max-width: 600px)": {
      fontSize: 8,
      lineHeight: "16px",
    },
  },
  vsContainer: {
    backgroundColor: ({ recordData }) => recordData && "#E7EEF4",
    color: palette.primary.main,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: "50%",
    maxWidth: 55,
    height: 55,
    "@media (max-width: 600px)": {
      height: 29,
    },
  },
  vsText: {
    fontWeight: 600,
    textTransform: "uppercase",
    "@media (max-width: 600px)": {
      fontSize: 10,
      lineHeight: "33px",
    },
  },
  teamContainer: {
    height: "70%",
    paddingBottom: "1.5rem",
  },
  article: {
    fontSize: 12,
    whiteSpace: "break-spaces",
    color: "#6B7281",
    textTransform: "none",
    lineHeight: "16px",
    "@media (max-width: 600px)": {
      fontSize: "10px",
      lineHeight: "16px",
    },
  },
  articleContainer: {
    // paddingLeft: "2em",
    marginBottom: "3em",
    "@media (max-width:1265px)": {
      marginTop: ({ recordData }) => (recordData ? "0" : "5em"),
    },
    "@media (max-width: 600px)": {
      margin: "8em 0",
    },
  },
  bottom: {
    background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
    color: "#FFFFFF",
    padding: "3.3em 3.5em 4.1em 3.1em",
    borderRadius: "0px 0px 20px 20px",
  },
  bottomUpperText: {
    fontSize: 24,

    //   fontSize: 19,
    // },
    fontWeight: 600,
    // "@media only screen and (max-width:965px)": {
    //   fontSize: 19,
    // },
    // "@media only screen and (max-width:774px)": {
    //   fontSize: 15,
    // },
  },
  bottomLowerText: {
    fontSize: 24,
    // "@media only screen and (max-width:1540px)": {
    //   fontSize: 19,
    // },
    fontWeight: 400,
    // "@media only screen and (max-width:965px)": {
    //   fontSize: 19,
    // },
  },
  btnText: {
    fontSize: 21,
    fontWeight: 600,
    lineHeight: "29px",
    textTransform: "uppercase",
    // "@media only screen and (min-width:1360px) and (max-width:1950px)": {
    //   fontSize: 18,
    // },
    "@media only screen and (max-width:1540px)": {
      fontSize: 16,
    },
    // "@media only screen and (max-width:774px)": {
    //   fontSize: 14,
    // },
    "@media (max-width: 600px)": {
      fontSize: 10,
      color: "#fff",
    },
  },
  predictionContainer: {
    background: " linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
    padding: "2rem 0",
    "@media (max-width: 600px)": {
      background: "#fff",
    },
  },
  cardsContainer: {
    padding: "0 3em",
  },
  statsContainer1: {
    height: "100%",
    "& > div": {
      marginRight: 15,
      "@media (max-width: 600px)": {
        marginRight: "0 !important",
      },
    },
  },
  statsContainer2: {
    height: "100%",
    "& > div:not(:last-child)": {
      marginRight: 15,
      "@media (max-width: 600px)": {
        marginRight: "0 !important",
      },
    },
  },
  image: {
    objectFit: "scale-down",
  },
  imageContainer: {
    flex: 1,
    marginBottom: "1.5em",
  },
  statsGrid: {
    width: "136px",
    "@media (max-width: 600px)": {
      maxWidth: "96px",
    },
  },
  bottomComp: {
    padding: "0 2em",
  },
  chartGrid: {
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  topComp: {
    flex: 2,
    paddingLeft: "2em",
    "@media (max-width: 600px)": {
      padding: "0 6em",
    },
  },
  articleNoData: {
    fontSize: "3em",
    lineHeight: "16px",
    color: "rgba(2, 42, 84, 0.5)",
    textAlign: "center",
    textTransform: "capitalize",
  },
}));

export const HeadToHeadRecord = React.memo(() => {
  const dispatch = useDispatch();
  const sm = useMediaQuery("(max-width:600px)");

  const { localName, localLogo, visitorName, visitorLogo, headToheadStats } =
    useSelector(({ h2h }) => {
      const {
        localTeamStats: {
          team: { name: localName, logoPath: localLogo },
        },
        visitorTeamStats: {
          team: { name: visitorName, logoPath: visitorLogo },
        },
        headToheadStats,
      } = h2h;
      return {
        localName,
        localLogo,
        visitorName,
        visitorLogo,
        headToheadStats,
      };
    }, shallowEqual);
  const [recordData, setRecordData] = useState(
    headToheadStats.matches.matchesPlayed.total !== 0
  );
  const classes = useStyles({ sm, recordData });

  const data = [
    {
      team: "WIN",
      value: headToheadStats.records.wins.home,
      href: localLogo,
      color:
        headToheadStats.records.wins.home > headToheadStats.records.wins.away
          ? "rgba(27, 212, 123, 1)"
          : "rgba(251, 82, 102, 1)",
    },
    {
      team: "WIN",
      value: headToheadStats.records.wins.away,
      href: visitorLogo,
      color:
        headToheadStats.records.wins.home > headToheadStats.records.wins.away
          ? "rgba(251, 82, 102, 1)"
          : "rgba(27, 212, 123, 1)",
    },
    {
      team: "DRAW",
      value: headToheadStats.records.draws.home,
      color: "rgba(246, 194, 5, 1)",
      // href:
      //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_sweden.svg',
    },
  ];

  const stats = [
    {
      percentage: `${headToheadStats.goals.overPercentage["1_5"].total}%`,
      avg: "OVER 1.5",
      type: `${headToheadStats.goals.over["1_5"].total}/${headToheadStats.matches.matchesPlayed.total} MATCHES`,
      gradColor: "#FFD9DF",
      color: "#D6435C",
    },
    {
      percentage: `${headToheadStats.goals.overPercentage["2_5"].total}%`,
      avg: "OVER 2.5",
      type: `${headToheadStats.goals.over["2_5"].total}/${headToheadStats.matches.matchesPlayed.total} MATCHES`,
      color: "#D6435C",
      gradColor: "#FFD9DF",
    },
    {
      percentage: `${headToheadStats.goals.overPercentage["3_5"].total}%`,
      avg: "OVER 3.5",
      type: `${headToheadStats.goals.over["3_5"].total}/${headToheadStats.matches.matchesPlayed.total} MATCHES`,
      color: "#FF9941",
      gradColor: "#FFE5CF",
    },
    {
      percentage: `${headToheadStats.BTTS.BTTSPercentage.total}%`,
      avg: "BTTS",
      type: `${headToheadStats.BTTS.BTTS.total}/${headToheadStats.matches.matchesPlayed.total} MATCHES`,
      gradColor: "#EEFFE5",
      color: "#75B169",
    },
    {
      percentage: `${headToheadStats.cleanSheets.cleanSheetsPercentage.away}%`,
      avg: "CLEAN SHEETS",
      type: visitorName,
      gradColor: "#EEFFE5",
      color: "#75B169",
    },
    {
      percentage: `${headToheadStats.cleanSheets.cleanSheetsPercentage.home}%`,
      avg: "CLEAN SHEETS",
      type: localName,
      gradColor: "#FFD9DF",
      color: "#D6435C",
    },
  ];

  const renderStatsCards1 = useCallback(() => {
    return stats.slice(0, 3).map((stat, i) => {
      return (
        <Grid item className={classes.statsGrid} xs={4} key={i}>
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
        <Grid item className={classes.statsGrid} xs={4} key={i}>
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

  const handleBtnClick = useCallback(() => {
    return dispatch(toggleDialog());
  }, [dispatch]);

  return (
    <CompWrapper
      title="Head to head record"
      toolTipText={`${localName} vs ${visitorName}  Past H2H Fixtures and Stats.`}
      tooltip
    >
      <Grid
        item
        container
        className={classes.topComp}
        justifyContent="space-between"
      >
        <Grid
          item
          container
          direction="column"
          sm={recordData ? 6 : 12}
          wrap="nowrap"
        >
          <Grid
            item
            container
            className={classes.teamContainer}
            alignItems="center"
            justifyContent="space-between"
            wrap={!recordData ? "nowrap" : "wrap"}
          >
            <Grid
              item
              xs={5}
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                // style={{ flex: 1 }}
                className={classes.imageContainer}
              >
                <Image
                  src={localLogo}
                  width={sm ? 52 : 88}
                  height={sm ? 70 : 116}
                  className={classes.image}
                  alt={localName}
                />
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="primary"
                  className={classes.team}
                >
                  {localName}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={1}
              sm={2}
              justifyContent="center"
              alignItems="center"
              className={classes.vsContainer}
            >
              {recordData ? (
                <Typography className={classes.vsText} variant="body2">
                  VS
                </Typography>
              ) : (
                <NoRecordData />
              )}
            </Grid>

            <Grid
              item
              xs={5}
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                // style={{ flex: 1 }}
                className={classes.imageContainer}
              >
                <Image
                  src={visitorLogo}
                  width={sm ? 52 : 88}
                  height={sm ? 70 : 116}
                  className={classes.image}
                  alt={visitorName}
                />
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="primary"
                  className={classes.team}
                >
                  {visitorName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.articleContainer}>
            {recordData ? (
              <Typography className={classes.article}>
                {`${localName} vs ${visitorName}’s head to head record show that of the ${headToheadStats.matches.matchesPlayed.total} meetings they’ve had,  ${localName} has won ${headToheadStats.records.wins.home} times and ${visitorName} has won ${headToheadStats.records.wins.away} times. ${headToheadStats.records.draws.home} fixtures between ${localName} and ${visitorName} ended in a draw.`}
              </Typography>
            ) : (
              <Typography className={classes.articleNoData}>
                previous match data between these 2 teams are not available
              </Typography>
            )}
          </Grid>
        </Grid>
        {recordData ? (
          <Grid item sm={6} className={classes.chartGrid}>
            <PieChartV5
              id="fjksdhjkhgio"
              data={data}
              innerRadius={0}
              strokeWidth={2}
              legendPosition="right"
              legendValign="middle"
              h2h={true}
            />
          </Grid>
        ) : null}
      </Grid>
      {recordData ? (
        <>
          <Grid
            item
            container
            alignItems="center"
            className={classes.predictionContainer}
          >
            <Grid
              item
              container
              justifyContent="space-around"
              alignItems="center"
              className={classes.bottomComp}
              wrap={sm ? "wrap" : "nowrap"}
            >
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  justifyContent="space-around"
                  alignItems="center"
                  className={classes.statsContainer1}
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
                  className={classes.statsContainer2}
                  wrap="nowrap"
                >
                  {statsCardsMemo2}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            className={classes.bottom}
            justifyContent={sm ? "center" : "space-between"}
          >
            <Hidden smDown implementation="css">
              <Grid item container direction="column">
                <Typography className={classes.bottomUpperText} variant="body2">
                  {localName}{" "}
                  <span
                    style={{ display: "inline", textTransform: "none" }}
                    className={classes.bottomLowerText}
                  >
                    vs
                  </span>{" "}
                  {visitorName}
                </Typography>
                <Typography className={classes.bottomLowerText}>
                  Past H2H Results & Fixtures
                </Typography>
              </Grid>
            </Hidden>
            <Grid item sm={3}>
              <Btn
                backgroundColor={sm ? "transparent" : "#FFFF"}
                width="100%"
                borderRadius={sm ? "4px" : "50px"}
                padding={sm ? "0 3em" : "1.5em 0"}
                onClick={handleBtnClick}
                borderColor={sm && "#fff"}
              >
                <Typography color="primary" className={classes.btnText}>
                  View PAST H2H
                </Typography>
              </Btn>
            </Grid>
          </Grid>
        </>
      ) : null}
    </CompWrapper>
  );
});
