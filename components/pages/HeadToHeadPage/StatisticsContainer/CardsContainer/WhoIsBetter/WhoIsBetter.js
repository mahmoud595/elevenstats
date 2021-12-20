import { Grid, Tooltip, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { memo, useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
  middleTitleContainer: {
    textAlign: "center",
    background: "#1A3C60",
    padding: "1.4vh 4rem",
    "@media (max-width:640px)": {
      padding: "2.5em 5em 2.5em 4em",
    },
  },
  middleTitleText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 600,
    "@media only screen and (min-width:1330px) and (max-width:1560px)": {
      fontSize: "1.1rem",
    },
    "@media (max-width:640px)": {
      fontSize: "2.5em",
    },
  },
  middleTitleValue: {
    display: "inline",
    color: "#1BD47B",
    fontWeight: 600,
  },
}));

export const WhoIsBetter = memo(({ conceded, PPG }) => {
  const classes = useStyles();

  const {
    localTeamName,
    localTeamScoredAverage,
    localTeamConcededAverage,
    localTeamPPGHT,
    visitorTeamName,
    visitorTeamScoredAverage,
    visitorTeamConcededAverage,
    visitorTeamPPGHT,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localTeamName },
        goals: {
          scoredAverage: { home: localTeamScoredAverage },
          concededAverage: { home: localTeamConcededAverage },
        },
        points: {
          PPGHT: { home: localTeamPPGHT },
        },
      },
      visitorTeamStats: {
        team: { name: visitorTeamName },
        goals: {
          scoredAverage: { away: visitorTeamScoredAverage },
          concededAverage: { away: visitorTeamConcededAverage },
        },
        points: {
          PPGHT: { away: visitorTeamPPGHT },
        },
      },
    } = h2h;
    return {
      localTeamName,
      localTeamScoredAverage,
      localTeamConcededAverage,
      localTeamPPGHT,
      visitorTeamName,
      visitorTeamScoredAverage,
      visitorTeamConcededAverage,
      visitorTeamPPGHT,
    };
  }, shallowEqual);

  const calculateBetter = useCallback(
    (scored) => {
      const localTeamValue = conceded
        ? localTeamConcededAverage
        : PPG
        ? localTeamPPGHT
        : localTeamScoredAverage;
      const visitorTeamValue = conceded
        ? visitorTeamConcededAverage
        : PPG
        ? visitorTeamPPGHT
        : visitorTeamScoredAverage;

      if (localTeamValue == visitorTeamValue) {
        return (
          <>
            Both Teams are
            <span className={classes.middleTitleValue}> equal</span>
          </>
        );
      }

      let lowValue =
        localTeamValue > visitorTeamValue ? visitorTeamValue : localTeamValue;
      let highValue =
        localTeamValue > visitorTeamValue ? localTeamValue : visitorTeamValue;
      let residue = highValue - lowValue;

      let betterTeam, value;
      if (scored || PPG) {
        betterTeam =
          highValue == localTeamValue ? localTeamName : visitorTeamName;

        value = Math.round((residue / lowValue) * 100);
      } else {
        betterTeam =
          lowValue == localTeamValue ? localTeamName : visitorTeamName;
        value = Math.round((residue / highValue) * 100);
      }
      // console.log(value);
      return (
        <>
          {betterTeam}{" "}
          <span className={classes.middleTitleValue}>
            {" "}
            {value == "Infinity" ? 100 : value}% Better
          </span>
        </>
      );
    },
    [
      conceded,
      localTeamScoredAverage,
      PPG,
      localTeamPPGHT,
      localTeamConcededAverage,
      visitorTeamScoredAverage,
      visitorTeamConcededAverage,
      visitorTeamPPGHT,
    ]
  );
  return (
    <Grid
      item
      className={classes.middleTitleContainer}
      container
      // justifyContent="center"
    >
      <Typography className={classes.middleTitleText}>
        {calculateBetter(!conceded)}
        {` In
              Terms Of ${
                conceded
                  ? "Goals Conceded"
                  : PPG
                  ? " Half Time Form"
                  : "Goals Scored"
              } `}
      </Typography>
    </Grid>
  );
});
