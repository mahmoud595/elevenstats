import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  root: {},
  percentageGrid: {
    // width: "45px",
    backgroundColor: "#75B169",
    borderRadius: "4px",
    width: "100%",
  },
  percentage: {
    fontSize: "2.5rem",
    fontWeight: "600",

    textAlign: "center",
  },
  teamName: {
    // fontWeight: '800',
    textAlign: ({ right }) => (right ? "center" : "start"),
    whiteSpace: "break-spaces",
    "@media (max-width:640px)": {
      fontSize: 10,
    },
  },
  image: {
    objectFit: "scale-down",
  },
  imageContainer: {
    "@media (max-width:640px)": {
      marginRight: "3em",
    },
  },
}));

export const SideComp = ({ right, sm }) => {
  const classes = useStyles({ right });
  const { localTeamStats, visitorTeamStats } = useSelector(
    (state) => state.h2h
  );
  return (
    <Grid item xs={3}>
      <Grid
        container
        direction={sm ? "row" : "column"}
        alignItems="center"
        className={classes.root}
        wrap="nowrap"
      >
        <Grid item className={classes.imageContainer}>
          <Image
            width={sm ? 24 : 40}
            height={sm ? 30 : 53}
            className={classes.image}
            src={
              right
                ? `${visitorTeamStats.team.logoPath}`
                : `${localTeamStats.team.logoPath}`
            }
            alt={
              right
                ? `${visitorTeamStats.team.name}`
                : `${localTeamStats.team.name}`
            }
            layout={sm && "fixed"}
          />
        </Grid>

        <Grid item>
          <Typography variant="h5" className={classes.teamName}>
            {right
              ? `${visitorTeamStats.team.name}`
              : `${localTeamStats.team.name}`}
          </Typography>
        </Grid>

        {/* <Grid item className={classes.percentageGrid}>
          <Typography className={classes.percentage}>2.5</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.teamName}>
            HALF-TIME
          </Typography>
        </Grid> */}
      </Grid>
    </Grid>
  );
};
