import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

import { NewsDate } from "public";
const useStyles = makeStyles(({ palette }) => ({
  newsBottomContainer: {
    marginTop: 15,
  },
  img: {
    // objectFit: "scale-down",
    borderRadius: "14px",
  },
  newsTextGrid: {
    marginTop: 12,
  },
  newsText: {
    fontSize: "2.1em",
    lineHeight: "19px",
    color: "#022A54",
    whiteSpace: "normal",
    fontWeight: 600,
  },
  dateContainer: {
    display: "flex",
    marginTop: "20px",
    alignItems: "center",
  },
  dateGrid: {
    marginLeft: "1.3em",
  },
  newsBottomGrid: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "31.2%",
    margin: "0 3.3em",
    "@media(max-width:1074px)": {
      margin: "0 1.5em",
    },
  },
  dateText: {
    fontSize: "2.1em",
    lineHeight: "17px",
    color: "rgba(2, 42, 84, 0.5)",
    fontWeight: 600,
    // "@media (min-width:1680px)": {
    //   fontSize: "3em",
    //   lineHeight: "25px",
    // },
  },
  imageContainer: {
    maxWidth: "100%",
    position: "relative",
    height: "30.6em",
    "@media (max-width:1280px)": {
      height: "22em",
    },
    // "@media (min-width:1680px)": {
    //   height: "38.2em",
    // },
  },
  img: {
    borderRadius: 14,
  },
}));

export const LatestNewsBottomComp = () => {
  const classes = useStyles();
  const lg = useMediaQuery("(min-width:1745px)");
  return (
    <Grid
      item
      container
      className={classes.newsBottomContainer}
      justifyContent={"space-between"}
      wrap="nowrap"
    >
      {new Array(3).fill(null).map((value, i) => (
        <Grid item key={i} className={classes.newsBottomGrid}>
          <Grid item className={classes.imageContainer}>
            <Image
              src={"/manchester.png"}
              // width={360}
              // height={184}
              className={classes.img}
              layout="fill"
              alt="news"
            />
          </Grid>
          <Grid item className={classes.newsTextGrid}>
            <Typography className={classes.newsText}>
              Man Utd must not take their foot off the gas en route to the
              Europa League final
            </Typography>
          </Grid>
          <Grid item className={classes.dateContainer}>
            <Grid item>
              <NewsDate />
            </Grid>
            <Grid item className={classes.dateGrid}>
              <Typography className={classes.dateText}>04 MAY 2021</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
