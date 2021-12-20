import React, { useState } from "react";

import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography, Hidden, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import { ElevenStats } from "./ElevenStats/ElevenStats";
import { PredictionsFor } from "./PredictionsFor/PredictionsFor";
import { Stats } from "./Stats/Stats";
import { About } from "./About/About";
import { Legal } from "./Legal/Legal";
import {
  WhiteFace,
  WhiteInstagram,
  WhiteTwitter,
  WhiteYouTube,
  LogoWhiteLarge,
} from "public";
import logo from "public/Logo.png";
import logoWhite from "public/logoWhite.png";

const useStyles = makeStyles(({ palette }) => ({
  footer: {
    background: "#022A54",
    padding: "50px 10em 0 10em",
    position: "relative",
    overflow: "hidden",
    "@media(max-width:640px)": {
      padding: "50px 5em 0 5em",
    },
    "@media(max-width:600px)": {
      padding: 0,
      background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
      borderRadius: " 24px 24px 0px 0px",
    },
  },
  topFooter: {
    padding: "0 0 55px 0",
    borderBottom: "1px solid #99A9BB",
    "@media(max-width:600px)": {
      padding: 0,
    },
  },
  followContainer: {
    marginTop: 55,
    "@media(max-width:600px)": {
      padding: "24px",
      margin: 0,
      background: "#022A54",
    },
  },
  linksGrid: {
    "@media (max-width:600px)": {
      borderBottom: "1px solid #99A9BB",
      paddingBottom: 24,
    },
  },
  rightComp: {
    flexBasis: "30%",
    maxWidth: "30%",
    "@media(max-width:600px)": {
      flexBasis: "100%",
      maxWidth: "100%",
    },
  },
  followText: {
    fontSize: "2.3em",
    color: "#fff",
    fontWeight: 700,
    lineHeight: "34px",
    "@media(max-width:960px)": {
      fontSize: 12,
    },
  },
  socialContainer: {
    "&>div:not(:first-child)": {
      marginLeft: "3em",
    },
    marginTop: 10,
  },
  social: {
    padding: "1.1em 1.1em 0.7em 1.1em",
    border: "1px solid #fff",
    borderRadius: "50%",
    cursor: "pointer",
    "@media(max-width:960px)": {
      padding: 5,
      "& svg": {
        width: 20,
        height: 20,
      },
    },
  },
  imageGrid: {
    position: "absolute",
    bottom: 0,
    right: "-10px",
  },
  bottomFooter: {
    padding: "20px 0",
  },
  eleventext: {
    letterSpacing: "1px",
    background: "linear-gradient(0deg, #EAEDF2, #EAEDF2)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: 600,
  },
  elevenTxtStats: {
    fontWeight: 800,
  },
  text: {
    fontSize: "2em",
    lineHeight: "34px",
    color: "#fff",
    "@media(max-width:640px)": {
      fontSize: "1.5em",
      lineHeight: "10px",
      whiteSpace: "nowrap",
    },
  },
  textGrid: {
    marginLeft: "1.3em",
  },
  bottomLinks: {
    "&>div:not(:first-child)": {
      marginLeft: "8em",
      "@media(max-width:640px)": {
        marginLeft: "4em",
      },
    },
  },
  bottomLink: {
    fontSize: "2em",
    fontWeight: 600,
    lineHeight: "34px",
    color: "#fff",
    whiteSpace: "nowrap",
    "@media(max-width:640px)": {
      fontSize: "1.5em",
    },
  },
  linkGrid: {
    cursor: "pointer",
  },
  linksContainer: {
    maxWidth: "74.7%",
    flexBasis: "74.7%",
    "@media (max-width:600px)": {
      maxWidth: "100%",
      flexBasis: "100%",

      padding: "24px",
      borderRadius: "24px 24px 0px 0px",
      background: "#022A54",
    },
  },
  aboutLegalGrid: {
    "@media (max-width:600px)": {
      marginTop: "20px ",
    },
  },
  logo: {
    "&>svg": {
      width: 24,
      height: 23,
      fill: "#fff",
    },
  },
}));
const social = [<WhiteInstagram />, <WhiteTwitter />];
const bottomLinks = [
  "Partners",
  "Contact Us",
  "About",
  "Help",
  "Privacy Policy",
];
export const Footer = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState();
  const xs = useMediaQuery("(max-width:600px)");
  return (
    <Grid item container className={classes.footer} direction="column">
      <Hidden smDown implementation="css">
        <Grid item className={classes.imageGrid}>
          <Image src={logo} />
        </Grid>
      </Hidden>
      <Grid
        item
        container
        className={classes.topFooter}
        justifyContent={xs ? "flex-start" : "space-between"}
        wrap={xs ? "wrap" : "nowrap"}
        direction={xs ? "column" : "row"}
      >
        <ElevenStats />
        <Grid
          item
          container
          direction="column"
          className={classes.linksContainer}
        >
          <Grid
            item
            container
            wrap={xs ? "wrap" : "nowrap"}
            justifyContent={xs ? "space-between" : "space-evenly"}
            className={classes.linksGrid}
          >
            <PredictionsFor clicked={clicked} setClicked={setClicked} />
            <Stats clicked={clicked} setClicked={setClicked} />
            <Grid
              item
              container
              direction="column"
              className={classes.rightComp}
            >
              <Grid
                item
                container
                justifyContent="space-between"
                className={classes.aboutLegalGrid}
              >
                <About clicked={clicked} setClicked={setClicked} />
                <Legal clicked={clicked} setClicked={setClicked} />
              </Grid>
              <Hidden smDown implementation="css">
                <Grid
                  item
                  container
                  className={classes.followContainer}
                  direction="column"
                >
                  <Grid item>
                    <Typography className={classes.followText}>
                      FOLLOW US
                    </Typography>{" "}
                  </Grid>
                  <Grid
                    item
                    container
                    className={classes.socialContainer}
                    alignItems="center"
                    wrap="nowrap"
                  >
                    {social.map((value, i) => (
                      <Grid item key={i} className={classes.social}>
                        <Link href="#">{value}</Link>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>

          <Hidden smUp>
            <Grid
              item
              container
              className={classes.followContainer}
              direction="column"
            >
              <Grid item>
                <Typography className={classes.followText}>
                  FOLLOW US
                </Typography>{" "}
              </Grid>
              <Grid
                item
                container
                className={classes.socialContainer}
                alignItems="center"
                wrap="nowrap"
              >
                {social.map((value, i) => (
                  <Grid item key={i} className={classes.social}>
                    <Link href="#">{value}</Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Hidden smDown implementation="css">
        <Grid
          item
          container
          alignItems="center"
          className={classes.bottomFooter}
          justifyContent="space-between"
          wrap="nowrap"
        >
          <Grid item container alignItems="center" wrap="nowrap">
            <Grid item className={classes.logo}>
              <LogoWhiteLarge />
            </Grid>
            <Grid item className={classes.textGrid}>
              <Typography className={classes.text}>
                <span className={classes.eleventext}>ELEVEN</span>
                <span
                  className={`${classes.elevenTxtStats} ${classes.eleventext}`}
                >
                  STATS
                </span>{" "}
                &#9400; all rights reserved
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            className={classes.bottomLinks}
            justifyContent="flex-end"
            wrap="nowrap"
          >
            {bottomLinks.map((link, i) => (
              <Grid item key={i} className={classes.linkGrid}>
                <Link href="#">
                  <Typography className={classes.bottomLink}>{link}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
