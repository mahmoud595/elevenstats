import React from "react";
import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { FirstTopPlayer } from "./FirstTopPlayer/FirstTopPlayer";
import { OtherTopPlayer } from "./OtherTopPlayer/OtherTopPlayer";
const useStyles = makeStyles(({ palette }) => ({
  topPlayerCard: {
    flexDirection: "column",
    display: "flex",
  },
}));
export const TopPlayersCard = ({ width }) => {
  const classes = useStyles({ width });
  return (
    <Grid item className={classes.topPlayerCard}>
      <FirstTopPlayer />
      <OtherTopPlayer />
      <OtherTopPlayer third />
    </Grid>
  );
};
