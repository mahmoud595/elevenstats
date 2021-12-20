import { useState, useCallback, useMemo, memo } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Tooltip, Typography } from "@mui/material";

import { shallowEqual, useSelector } from "react-redux";
import { LinearDeterminate } from "components/";
import Image from "next/image";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: ({ conceded }) => (conceded ? "2em 1em 0 2em" : "2.4em 2em 0 4em"),
    backgroundColor: palette.primary.main,
    borderRadius: "0px 0px 20px 20px",
    "& > div": {
      marginBottom: ({ conceded }) => (conceded ? "1.7em" : "3em"),
    },
  },
  image: {
    objectFit: "scale-down",
  },
  team: {
    color: "#FFF",
    fontWeight: 600,
    textTransform: "capitalize",
  },
  team1: {
    // color: "#FFF",

    textTransform: "uppercase",
    fontWeight: 600,
    position: "absolute",
    top: 0,

    left: 5,
    "@media (max-width:1265px)": {
      top: 1,
    },
    "@media (max-width:731px)": {
      top: 3,
    },
    "@media (max-width:600px)": {
      top: 1,
      fontSize: 8,
      lineHeight: "8px",
    },
  },
  imageContainer: {
    width: "6.3em",
    height: "8.4em",
    position: "relative",
    marginRight: ({ conceded }) => (conceded ? "2em" : "7em"),
  },
}));

export const GoalsCardBottomComp = memo(({ conceded }) => {
  const classes = useStyles({ conceded });
  const {
    localTeamName,
    localTeamLogo,
    localTeamScoredAverage,
    localTeamConcededAverage,
    visitorTeamName,
    visitorTeamLogo,
    visitorTeamScoredAverage,
    visitorTeamConcededAverage,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localTeamName, logoPath: localTeamLogo },
        goals: {
          scoredAverage: { home: localTeamScoredAverage },
          concededAverage: { home: localTeamConcededAverage },
        },
      },
      visitorTeamStats: {
        team: { name: visitorTeamName, logoPath: visitorTeamLogo },
        goals: {
          scoredAverage: { away: visitorTeamScoredAverage },
          concededAverage: { away: visitorTeamConcededAverage },
        },
      },
    } = h2h;
    return {
      localTeamName,
      localTeamLogo,
      localTeamScoredAverage,
      localTeamConcededAverage,
      visitorTeamName,
      visitorTeamLogo,
      visitorTeamScoredAverage,
      visitorTeamConcededAverage,
    };
  }, shallowEqual);

  const getValue = useCallback(
    (away) => {
      const localTeamValue = conceded
        ? localTeamConcededAverage
        : localTeamScoredAverage;
      const visitorTeamValue = conceded
        ? visitorTeamConcededAverage
        : visitorTeamScoredAverage;
      const sum = +localTeamValue + +visitorTeamValue;
      if (away) {
        return Math.round((+visitorTeamValue / sum) * 100);
      }
      return Math.round((+localTeamValue / sum) * 100);
    },
    [
      localTeamConcededAverage,
      localTeamScoredAverage,
      visitorTeamConcededAverage,
      visitorTeamScoredAverage,
      conceded,
    ]
  );
  const data = [
    {
      name: `${localTeamName} at home`,
      color: "#1BD47B",
      img: localTeamLogo,
      value: getValue(),
      goals: conceded ? localTeamConcededAverage : localTeamScoredAverage,
    },
    {
      name: `${visitorTeamName}  at away`,
      color: "#FB5266",
      img: visitorTeamLogo,
      value: getValue(true),
      goals: conceded ? visitorTeamConcededAverage : visitorTeamScoredAverage,
    },
  ];
  const renderData = useCallback(() => {
    return data.map(({ name, color, img, value, goals }, index) => (
      <Grid key={index} item container wrap="nowrap">
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className={classes.imageContainer}
        >
          <Image
            src={img}
            // width={63}
            // height={84}
            layout="fill"
            className={classes.image}
            alt={name}
          />
        </Grid>
        <Grid
          item
          xs={9}
          container
          direction="column"
          justifyContent="space-around"
        >
          <Grid item style={{ position: "relative" }}>
            <LinearDeterminate
              height="2.8em"
              borderRadius={100}
              colorPrimary={color}
              colorSecondary="#FFF"
              barRadius={100}
              value={value || 0}
            />
            <Typography variant="h4" color="primary" className={classes.team1}>
              {`${goals} goals / match`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.team}>
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    ));
  }, []);
  const memoizedRenderData = useMemo(() => renderData(), []);
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.root}
      wrap="nowrap"
    >
      {memoizedRenderData}
    </Grid>
  );
});
