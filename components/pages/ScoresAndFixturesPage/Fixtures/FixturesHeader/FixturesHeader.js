import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { DaysButtons } from "./DaysButtons/DaysButtons";
import { DatePicker } from "components";
import { SeasonButton } from "./SeasonButton/SeasonButton";
import { Search } from "components";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: "1em 0",
  },
  searchBtn: {
    backgroundColor: "#AD60A4",
    borderRadius: "4px",
    color: "white",
    padding: "0.9em 1em",
    "&:hover": {
      backgroundColor: "#AD60A4",
    },
  },
  btnText: {
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: "1.4rem",
    fontWeight: "600",
    "@media (max-width: 1660px)": {
      fontSize: "1.1rem",
    },
    "@media (max-width: 1400px)": {
      fontSize: "0.9rem",
    },
    "@media (max-width: 1074px)": {
      fontSize: "0.7rem",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.5rem",
    },
  },
}));

export const FixturesHeader = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item xs={2}>
        <Search
          backgroundColor="#AD60A4"
          color="#fff"
          title="Search"
          padding="0.5em 0"
        />
      </Grid>

      <DaysButtons />

      <Grid item xs={2}>
        <Grid container alignItems="center">
          <DatePicker fixtures />
        </Grid>
      </Grid>

      <SeasonButton />
    </Grid>
  );
};
