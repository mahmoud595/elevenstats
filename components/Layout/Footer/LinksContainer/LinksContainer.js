import React, { useState } from "react";

import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

import { WhiteRightArrow } from "public";
const useStyles = makeStyles(({ palette }) => ({
  prediction: {
    maxWidth: ({ width }) => width || "19.2%",
    flexBasis: ({ width }) => width || "19.2%",
    "@media(max-width:600px)": {
      maxWidth: "37% !important",
      flexBasis: "37% !important",
    },
  },
  link: {
    fontSize: "2em",
    lineHeight: "34px",
    whiteSpace: "nowrap",
    "@media(max-width:960px)": {
      fontSize: 9,
    },
    "@media(max-width:600px)": {
      fontSize: 11,
    },
  },
  title: {
    fontSize: "2.3em",
    fontWeight: 700,
    lineHeight: "34px",
    whiteSpace: "nowrap",
    color: "#fff",
    "@media(max-width:960px)": {
      fontSize: 10,
    },
    "@media(max-width:600px)": {
      fontSize: 12,
      //   textAlign: ({ title }) =>
      //     ["STATS", "LEGAL"].includes(title) ? "center" : "flex-start",
      // },
    },
  },
  links: {
    marginTop: "24px",
    "@media(max-width:960px)": {
      marginTop: "0",
    },
    "@media(max-width:600px)": {
      //   alignItems: ({ title }) =>
      //     ["STATS", "LEGAL"].includes(title) ? "center" : "flex-start",
      // },
    },
  },
  arrowGrid: {
    marginLeft: "2em",
  },
  linkGrid: {
    cursor: "pointer",
    "@media(max-width:960px)": {
      "& svg": {
        width: 15,
        height: 15,
      },
    },
  },
}));

export const LinksContainer = ({
  clicked,
  setClicked,
  title,
  links,
  width,
}) => {
  const classes = useStyles({ width, title });
  const clickHandler = (link) => {
    setClicked(link);
  };
  return (
    <Grid item container direction="column" className={classes.prediction}>
      <Grid item>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item container className={classes.links} direction="column">
        {links.map((link, i) => (
          <Grid item key={i} onClick={() => clickHandler(link)}>
            <Link href="#">
              <Grid
                container
                alignItems="center"
                wrap="nowrap"
                className={classes.linkGrid}
              >
                <Grid item>
                  <Typography
                    className={classes.link}
                    style={{
                      color: `${link === clicked ? "#DFE4EA" : "#99A9BB"}`,
                    }}
                  >
                    {link}
                  </Typography>
                </Grid>
                {link === clicked ? (
                  <Grid
                    item
                    className={classes.arrowGrid}
                    container
                    alignItems="center"
                  >
                    <WhiteRightArrow />
                  </Grid>
                ) : (
                  <></>
                )}
              </Grid>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
