import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

import { LogoWhiteLarge } from "public";
const useStyles = makeStyles(({ palette }) => ({
  elevenstats: {
    "@media(max-width:600px)": {
      padding: 24,
      //   background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
      borderRadius: "24px 24px 0px 0px",
    },
  },
  txtGrid: {
    marginLeft: "1.8em",
  },
  text: {
    fontSize: "1.7rem",
    letterSpacing: "1px",
    background: "linear-gradient(0deg, #EAEDF2, #EAEDF2)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "@media(max-width:960px)": {
      fontSize: 11,
    },
  },
  statsTxt: {
    fontWeight: 800,
  },
  elevenStatsText: {},
  textGrid: {
    marginTop: 40,
    "@media(max-width:960px)": {
      marginTop: "20px",
    },
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
  elevenStatsText: {
    lineHeight: "24px",
    fontSize: "2.1em",
    whiteSpace: "normal",
    color: "#99A9BB",
    "@media(max-width:960px)": {
      fontSize: 11,
      lineHeight: "17px",
    },
    "@media(max-width:640px)": {
      fontSize: 9,
    },
  },
  logo: {
    "&>svg": {
      fill: "#FFf",
    },
    "@media(max-width:960px)": {
      "&>svg": {
        width: 31,
        height: 33,
      },
    },
  },
}));
export const ElevenStats = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="column"
      className={classes.elevenstats}
      sm={3}
    >
      <Grid item container alignItems="center">
        <Grid item className={classes.logo}>
          <LogoWhiteLarge />
        </Grid>
        <Grid item className={classes.txtGrid}>
          <span className={classes.text}>ELEVEN</span>
          <span className={`${classes.statsTxt} ${classes.text}`}>STATS</span>
        </Grid>
      </Grid>
      <Grid item className={classes.textGrid}>
        <Typography className={classes.elevenStatsText}>
          <span className={classes.eleventext}>ELEVEN</span>
          <span className={`${classes.elevenTxtStats} ${classes.eleventext}`}>
            STATS
          </span>{" "}
          - elevenstats.com. IN-PLAY odds, results yesterday. Experience the
          goals, cards and corners, statistics detail information for every
          match - actual football standings of worldwide leagues. You can filter
          the scores by country / competition. Follow English Premier League,
          UEFA Champions League 2021/2022, Europe League, Nations League and
          International Friendly football.
        </Typography>
      </Grid>
    </Grid>
  );
};
