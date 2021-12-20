import React from "react";
import { Grid, useMediaQuery, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Link from "next/link";

import { TopPlayersCard } from "../OverView/TopPlayersContainer/TopPlayersCard/TopPlayersCard";
const useStyles = makeStyles(({ palette }) => ({
  topPlayersTab: {
    marginTop: "30px",
  },
  topPlayersText: {
    fontSize: "2.3em",
    fontWeight: 700,
    lineHeight: "29px",
    color: "#022A54",
  },
  topPlayersWrapper: {
    marginTop: "20px",
  },
  topPlayersCardGrid: {
    maxWidth: "31.1%",
    flexBasis: "31.1%",
    margin: "40px 2.1em",
    "@media(max-width:1345px)": {
      margin: "40px 1.5em",
    },
    "@media(max-width:960px)": {
      margin: "40px 1.2em",
    },
  },
}));
export const TopPlayersTab = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.topPlayersTab} direction="column">
      <Grid item>
        <Typography className={classes.topPlayersText}>Top Players</Typography>
      </Grid>
      <Grid
        item
        container
        // justifyContent="space-between"
        className={classes.topPlayersWrapper}
      >
        {new Array(20).fill(null).map((val, i) => (
          <Link href="/league/asd/topPlayers" key={i}>
            <Grid item className={classes.topPlayersCardGrid}>
              <TopPlayersCard />
            </Grid>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};
