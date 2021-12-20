import React from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: "1.6em 4.4em 1.5em 4.4em",
    backgroundColor: "#F6F7FA",
    borderRadius: "45px",
  },
  title: {
    letterSpacing: "3.5px",
    lineHeight: "11px",
    fontWeight: 700,
    color: "#FC7D58",
  },
  time: {
    color: "#022A54",
    fontSize: "3.2em",
    fontWeight: 700,
    lineHeight: "18px",
    marginTop: "0.7em",
    // '@media (max-width: 1600px)': {
    //   lineHeight: '18px',
    //   marginTop: '0.7em',
    // },
    // marginTop: '0.9em',
    "@media (max-width:600px)": {
      marginTop: 5,
    },
  },
  spacing: {
    padding: "0 5px",
  },
}));
export const MatchTime = ({ minutes, seconds, hours }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Typography className={classes.title} variant="h4">
          STARTS IN
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.time}>
          {hours || "00"} <span className={classes.spacing}>:</span>
          {minutes || "00"}
          <span className={classes.spacing}>:</span>
          {seconds || "00"}
        </Typography>
      </Grid>
    </Grid>
  );
};
