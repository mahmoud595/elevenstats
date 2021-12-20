import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";
const useStyles = makeStyles(({ palette }) => ({
  text: {
    color: "#6B7281",
    // fontWeight: "600",
    textTransform: "inherit",
    fontSize: "2.2em",
    lineHeight: "20px",
    "@media (max-width:640px)": {
      lineHeight: "16px",
      fontSize: "9px",
    },
  },
  textGrid: {
    paddingLeft: "2.6em",
    paddingTop: 5,
  },
  icon: {
    "@media (max-width:640px)": {
      "& svg": {
        width: 21,
        height: 21,
      },
    },
  },
}));

export const TeamNews = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        xs={2}
        container
        justifyContent="center"
        className={classes.icon}
      >
        {icon}
      </Grid>
      <Grid item xs={10} className={classes.textGrid}>
        <Typography variant="h4" className={classes.text}>
          {text}
        </Typography>
      </Grid>
    </>
  );
};
