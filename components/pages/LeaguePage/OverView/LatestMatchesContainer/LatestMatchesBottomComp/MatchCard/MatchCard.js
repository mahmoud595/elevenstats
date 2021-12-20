import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

import { Team } from "./Team/Team";
const useStyles = makeStyles(({ palette }) => ({
  card: {
    background: "#fff",
    borderRadius: "18px",
    padding: "12px 4em 14px 2.8em",

    "@media (max-width:1255px)": {
      padding: "12px 3em 14px 1.8em",
    },
    "@media (max-width:1074px)": {
      padding: "8px 2em 10px 1.5em",
    },
    "@media(max-width:730px)": {
      padding: "5px",
    },
  },
  dateGrid: {
    padding: "4px 1.5em",
    background: "rgba(161, 181, 201, 0.12)",
    borderRadius: "18px",
  },
  date: {
    fontSize: "1.6em",
    fontWeight: 600,
    lineHeight: "12px",
    color: "#022A54",
  },
  bottom: {
    marginTop: 10,
  },
  score: {
    fontSize: "3em",
    lineHeight: "29px",
    fontWeight: 600,
    color: "#022A54",
    letterSpacing: "3px",
    whiteSpace: "nowrap",
    "@media (max-width:1074px)": {
      fontSize: "2em",
    },
  },
  scoreGrid: {
    margin: "0 0 15px 0",
  },
}));

export const MatchCard = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.card}>
      <Grid container direction="column">
        <Grid item container justifyContent="center">
          <Grid item className={classes.dateGrid}>
            <Typography className={classes.date}>Apr 29</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.bottom}
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Team />
          <Grid item className={classes.scoreGrid}>
            <Typography className={classes.score}>
              6{"  "}-{"  "}3
            </Typography>
          </Grid>
          <Team />
        </Grid>
      </Grid>
    </Grid>
  );
};
