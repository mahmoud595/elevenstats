import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  firstPlayer: {
    padding: "0 3.5em 0 0",
    background: "#fff",
    // display: "flex",
    // direction: "column",
    borderRadius: "14px",
    "@media (max-width:960px)": {
      padding: "0 2em 0 0",
    },
  },
  firstTopPlayerBottom: {
    padding: "0 0 0 3.3em",
    "@media (max-width:960px)": {
      padding: "0 0 0 1.8em",
    },
  },
  header: {
    borderRadius: "14px 0",
    background: " #022A54",
    alignSelf: "flex-start",
  },
  headerText: {
    fontWeight: 600,
    fontSize: "1.6em",
    padding: "10px",
    letterSpacing: "2.5px",
    lineHeight: "7px",
    color: "#fff",
    textTransform: "uppercase",
    "@media (max-width:960px)": {
      fontSize: "1.2em",
      padding: "8px",
    },
  },
  playerDetails: {
    direction: "flex",
    flexDirection: "column",
    "&>div": {
      marginTop: 13,
      "@media (max-width:960px)": {
        marginTop: 9,
      },
    },
  },
  playerName: {
    fontSize: "2.3em",
    fontWeight: 600,
    lineHeight: "19px",
    color: "#022A54",
    "@media (max-width:960px)": {
      fontSize: "1.8em",
    },
    "@media (max-width:856px)": {
      textAlign: "center",
    },
  },
  teamNameGrid: {
    marginLeft: "1em",
  },
  teamName: {
    fontSize: "1.6em",
    lineHeight: "13px",
    color: "#022A54",
  },
  teamGrid: {
    display: "flex",
    alignItems: "center",
  },
  rating: {
    fontSize: "3em",
    fontWeight: 700,
    lineHeight: "19px",
    color: "#022A54",
    "@media (max-width:856px)": {
      textAlign: "center",
    },
  },
  imageGrid: {
    marginTop: "-18px",
    "@media (max-width:856px)": {
      marginTop: "-10px",
    },
  },
  ratingGrid: {
    marginBottom: "16px",
  },
}));
export const FirstTopPlayer = () => {
  const classes = useStyles();
  const sm = useMediaQuery("(max-width:856px)");
  return (
    <Grid item className={classes.firstPlayer} container direction="column">
      <Grid item className={classes.header}>
        <Typography className={classes.headerText}>
          Top rated players
        </Typography>
      </Grid>

      <Grid
        item
        container
        justifyContent={sm ? "center" : "space-between"}
        alignItems="center"
        className={classes.firstTopPlayerBottom}
      >
        <Grid item className={classes.playerDetails}>
          <Grid item>
            <Typography className={classes.playerName}>
              Mohamed Salah
            </Typography>
          </Grid>
          <Grid item className={classes.teamGrid}>
            <Grid item>
              <Image
                src="/teamCard.png"
                width={22}
                height={22}
                alt="teamName"
              />
            </Grid>
            <Grid item className={classes.teamNameGrid}>
              <Typography className={classes.teamName}>
                Manchester United
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.ratingGrid}>
            <Typography className={classes.rating}>8.1</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <Image src="/moSalah.png" width="88" height="122" alt="playerName" />
        </Grid>
      </Grid>
    </Grid>
  );
};
