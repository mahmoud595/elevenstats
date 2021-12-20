import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";

import Btn from "components/Layout/Btn/Btn";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    flex: 1,
    marginTop: "4.7em",
    "@media only screen and (max-width:1440px)": {
      marginTop: "3em",
    },
    "@media only screen and (max-width:809px)": {
      marginTop: "2em",
    },
    "& > div": {
      // alignSelf: 'stretch',
      // flex: 1,
      height: "4.5em",
      "@media only screen and (max-width:600px)": {
        height: 31,
      },
    },
    "& > div:last-child": {
      "& > div": {
        paddingBottom: "2em",
      },
    },
  },

  headerGrid: {
    backgroundColor: "#266BFC",
    color: "#fff",
    borderRadius: "15px",

    padding: "0.3rem 1.2rem 0.3rem 1.1rem",
  },
  homeText: {
    fontSize: "1.4rem",
    fontWeight: "400",
    textAlign: "center",
    color: "#266BFC",
    "@media only screen and (max-width:1630px)": {
      fontSize: "1.1rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.4rem",
    },
    // '@media only screen and (max-width:1480px)': {
    //   fontSize: '1.2rem',
    // },
    "@media only screen and (max-width:640px)": {
      fontSize: "2.5em",
    },
  },
  overAllAwayText: {
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#6B7281",
    textAlign: "center",
    "@media only screen and (max-width:1680px)": {
      fontSize: "1.1rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.4rem",
    },
    // '@media only screen and (max-width:1480px)': {
    //   fontSize: '1.2rem',
    // },
    "@media only screen and (max-width:640px)": {
      fontSize: "2.5em",
    },
  },
  label: {
    color: "#A0B0CB",
  },
  headerTxt: {
    "@media only screen and (max-width:1630px)": {
      fontSize: "1.2rem",
    },
    "@media only screen and (max-width:1480px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.3rem",
    },
    "@media only screen and (max-width:809px)": {
      fontSize: "0.8rem",
    },
  },
  home: {
    alignSelf: "stretch",
    // background: "rgba(38, 107, 252, 0.06)",
    height: "100%",
    padding: "0 4rem",
    "@media only screen and (max-width:1280px)": {
      padding: "0 3rem",
    },
  },
  row: {
    "& > div:first-child": {
      paddingLeft: "1.2rem",
    },
  },
}));

const header = ["OVERALL", "HOME", "AWAY"];
const data = [
  { label: "WIN%", total: "total", home: "home", away: "away" },
  { label: "AVG", total: "-", home: "-", away: "-" },
  { label: "SCORED", total: "-", home: "-", away: "-" },
  { label: "CONCEDED", total: "-", home: "-", away: "-" },
  { label: "BTTS", total: "-", home: "-", away: "-" },
  { label: "XG", total: "-", home: "-", away: "-" },
  { label: "XGA", total: "-", home: "-", away: "-" },
  { label: "CS", total: "-", home: "-", away: "-" },
  { label: "FTS", total: "-", home: "-", away: "-" },
];
//asdasdasd
export const TeamBottomComp = ({ team }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      alignItems="center"
      direction="column"
      // justifyContent="space-around"
    >
      <Grid
        item
        container
        className={classes.header}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={3}></Grid>
        {header.map((header, i) => (
          <Grid
            item
            md={2}
            xs={2}
            key={i}
            container
            justifyContent="center"
            className={classes.headerGrid}
          >
            <Typography className={classes.headerTxt}>{header}</Typography>
          </Grid>
        ))}
      </Grid>
      {data.map((data, i) => (
        <Grid
          item
          container
          justifyContent="space-around"
          alignItems="center"
          key={i}
          className={classes.row}
          // style={{ height: "3.8vh" }}
        >
          <Grid item xs={3} container>
            <Typography
              className={`${classes.overAllAwayText} ${classes.label}`}
            >
              {data.label}
            </Typography>
          </Grid>
          <Grid item md={2} xs={2} container justifyContent="center">
            <Typography className={classes.overAllAwayText}>
              {i === 0
                ? team.records.winsPercentage.total + "%"
                : i === 1
                ? team.goals.goalsAverage.total
                : i === 2
                ? team.goals.scoredAverage.total
                : i === 3
                ? team.goals.concededAverage.total
                : i === 4
                ? team.BTTS.BTTSPercentage.total + "%"
                : i === 5
                ? team.goals.expected.total
                : i === 6
                ? team.goals.expectedAgainst.total
                : i === 7
                ? team.cleanSheets.cleanSheetsPercentage.total + "%"
                : i === 8
                ? team.failedToScore.failedToScorePercentage.total + "%"
                : data.total}
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            xs={2}
            className={classes.home}
            container
            alignItems="center"
            justifyContent="center"
            style={{
              borderRadius: i === 0 ? "20px 20px 0px 0px" : 0,
              background:
                i === 0
                  ? "rgba(38, 107, 252, 0.06)"
                  : i === 1
                  ? "rgba(38, 107, 252, 0.05)"
                  : i === 2
                  ? "rgba(38, 107, 252, 0.04)"
                  : i === 3
                  ? "rgba(38, 107, 252, 0.03)"
                  : i === 4
                  ? "rgba(38, 107, 252, 0.02)"
                  : i === 5
                  ? "rgba(38, 107, 252, 0.01)"
                  : "rgba(38, 107, 252, 0)",
            }}
          >
            <Typography className={classes.homeText}>
              {i === 0
                ? team.records.winsPercentage.home + "%"
                : i === 1
                ? team.goals.goalsAverage.home
                : i === 2
                ? team.goals.scoredAverage.home
                : i === 3
                ? team.goals.concededAverage.home
                : i === 4
                ? team.BTTS.BTTSPercentage.home + "%"
                : i === 5
                ? team.goals.expected.home
                : i === 6
                ? team.goals.expectedAgainst.home
                : i === 7
                ? team.cleanSheets.cleanSheetsPercentage.home + "%"
                : i === 8
                ? team.failedToScore.failedToScorePercentage.home + "%"
                : data.home}
            </Typography>
          </Grid>
          <Grid item md={2} xs={2} container justifyContent="center">
            <Typography className={classes.overAllAwayText}>
              {i === 0
                ? team.records.winsPercentage.away + "%"
                : i === 1
                ? team.goals.goalsAverage.away
                : i === 2
                ? team.goals.scoredAverage.away
                : i === 3
                ? team.goals.concededAverage.away
                : i === 4
                ? team.BTTS.BTTSPercentage.away + "%"
                : i === 5
                ? team.goals.expected.away
                : i === 6
                ? team.goals.expectedAgainst.away
                : i === 7
                ? team.cleanSheets.cleanSheetsPercentage.away + "%"
                : i === 8
                ? team.failedToScore.failedToScorePercentage.away + "%"
                : data.away}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
