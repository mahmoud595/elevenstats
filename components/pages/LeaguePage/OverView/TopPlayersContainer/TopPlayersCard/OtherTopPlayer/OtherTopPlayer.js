import React from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  otherTopPlayerContainer: {
    padding: ({ third }) =>
      third ? "21px 3.3em 10px 3.3em" : "14px 3.3em 15px 3.3em",
    background: ({ third }) => (third ? "#EAEDF2" : "#F6F7FA"),
    borderRadius: " 0 0 14px 14px",
    marginTop: ({ third }) => (third ? "-7px" : "0"),
    zIndex: ({ third }) => (third ? "1" : "2"),
    "@media (max-width:960px)": {
      padding: ({ third }) =>
        third ? "21px 2em 10px 2em" : "14px 2em 15px 2em",
    },
  },
  playerDetails: {
    display: "flex",
    alignItems: "center",
  },
  teamPlayerGrid: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1.3em",
  },
  playerName: {
    fontSize: "1.5em",
    fontWeight: 600,
    lineHeight: "10px",
    color: "#022A54",
    textTransform: "uppercase",
  },
  teamNameGrid: {
    marginLeft: "0.8em",
  },
  teamName: {
    fontSize: "1.5em",
    lineHeight: "13px",
  },
  teamDetails: {
    display: "flex",
    marginTop: 8,
  },
  score: {
    fontSize: "2.3em",
    lineHeight: "19px",
    fontWeight: 700,
    color: "#022A54",
  },
}));

export const OtherTopPlayer = ({ third }) => {
  const classes = useStyles({ third });

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      className={classes.otherTopPlayerContainer}
      alignItems="center"
    >
      <Grid item className={classes.playerDetails}>
        <Grid item>
          <Image
            src="/playerFace.png"
            width={35}
            height={35}
            alt="player name"
          />
        </Grid>
        <Grid item className={classes.teamPlayerGrid}>
          <Grid item>
            <Typography className={classes.playerName}>
              BRUNO FERNANDES
            </Typography>
          </Grid>
          <Grid item className={classes.teamDetails}>
            <Grid item>
              <Image
                src="/teamCard.png"
                width={12}
                height={12}
                alt="team name"
              />
            </Grid>
            <Grid item className={classes.teamNameGrid}>
              <Typography className={classes.teamName}>Ajax</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography className={classes.score}>7.8</Typography>
      </Grid>
    </Grid>
  );
};
