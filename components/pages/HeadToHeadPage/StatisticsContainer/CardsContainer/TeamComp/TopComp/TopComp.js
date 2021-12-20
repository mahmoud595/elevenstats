import React, { memo } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    // margin: "0.3em",
    // padding: "0 1em",
    // boxShadow: "0px 0px 10px -1px rgba(0,0,0,0.1)",
  },
  content: {
    background: ({ bgColor }) => bgColor,
    borderRadius: "8px",
    padding: "0.8em 0 1em 5.7em",
    margin: "1em 0 0 10px",
    "@media only screen and (max-width:1440px)": {
      padding: "0.8vh 0 1vh 4.7rem",
    },
    "@media only screen and (max-width:1960px)": {
      padding: "0.7vh 0 0.9vh 3.7rem",
    },
    "@media only screen and (max-width:600px)": {
      margin: "1em 0 0 0",
    },
  },

  img: {
    objectFit: "scale-down",
  },
  rightSide: {
    paddingLeft: "3.4rem",
    "@media only screen and (max-width:1680px)": {
      paddingLeft: "1.4rem",
    },
    "@media only screen and (max-width:640px)": {
      paddingLeft: "4em",
    },
  },
  teamName: {
    fontSize: "1.8rem",
    color: "#022A54",
    fontWeight: "600",
    lineHeight: "25px",
    "@media only screen and (max-width:1440px)": {
      fontSize: "1.4rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.7rem",
    },
    "@media only screen and (max-width:655px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:640px)": {
      fontSize: "3em",
    },
  },
  leagueName: {
    color: "#022A54",
    fontWeight: 400,
    lineHeight: "22px",
    textTransform: "capitalize",
    "@media only screen and (max-width:1440px)": {
      fontSize: "1.2rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.5rem",
    },

    "@media only screen and (max-width:655px)": {
      fontSize: "0.8rem",
    },
    "@media only screen and (max-width:640px)": {
      fontSize: "2em",
    },
  },
}));
export const TopComp = memo(({ bgColor, teamName, teamLogo, leagueName }) => {
  const classes = useStyles({ bgColor });
  const sm = useMediaQuery("(max-width:640px)");

  return (
    <Grid item container className={classes.root}>
      <Grid
        item
        container
        className={classes.content}
        alignItems="center"
        wrap="nowrap"
      >
        <Grid
          item
          container
          className={classes.imageContainer}
          alignItems="center"
          justifyContent={sm ? "flex-end" : "center"}
          xs={3}
          sm={2}
        >
          <Image
            src={
              teamLogo ||
              "https://cdn.sportmonks.com/images//soccer/teams/8/8.png"
            }
            width={51}
            height={48}
            className={classes.img}
            alt={teamName}
          />
        </Grid>
        <Grid
          item
          container
          sm={9}
          xs={8}
          alignItems="center"
          justifyContent="center"
          direction="column"
          className={classes.rightSide}
        >
          <Grid item container>
            <Typography className={classes.teamName}>
              {teamName || "liverpool"}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography variant="h4" className={classes.leagueName}>
              {leagueName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});
