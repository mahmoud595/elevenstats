import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

import { MaskGroup } from "./MaskGroup";
import { BecomePremiumBtn } from "../BecomePremiumBtn/BecomePremiumBtn";
import { Lock } from "public/";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "100%",
    // flex: 1,
    background: " linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
    borderRadius: "20px",
    overflow: "hidden",
    // marginTop: ({ isOdds }) => !isOdds && "45px",
  },
  leftComp: {
    padding: ({ isOdds }) =>
      isOdds ? "1.8rem 5rem 2.1rem" : "5.8em 0 10em 3.5em",
    "@media (max-width: 1550px)": {
      padding: ({ isOdds }) =>
        isOdds ? "1.6rem 5rem 1.8rem" : "8.2em 0 8em 3.5em ",
    },
    "@media (max-width: 1280px)": {
      padding: ({ isOdds }) =>
        isOdds ? "1.4rem 3rem 1.6rem" : "4em 0 8em 3.5em ",
    },
    "@media (max-width: 960px)": {
      padding: ({ isOdds }) =>
        isOdds ? "1.2rem 2rem 1.4rem" : "4em 0 8em 3.5em ",
    },
  },
  topText: {
    fontSize: ({ isOdds }) => (isOdds ? "3rem" : "2.8rem"),
    fontWeight: ({ isOdds }) => (isOdds ? "700" : "800"),
    color: "#fff",
    whiteSpace: "normal",
    lineHeight: ({ isOdds }) => (isOdds ? "41px" : "34px"),
    "@media (max-width: 1680px)": {
      fontSize: "2.4rem !important",
      lineHeight: "28px !important",
    },
    "@media (max-width: 1265px)": {
      fontSize: "1.8rem !important",
    },
  },
  midText: {
    color: "#fff",
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: ({ isOdds }) => (isOdds ? "22px" : "24px"),
    "@media (max-width: 1644px)": {
      lineHeight: "16px !important",
    },
    // lineHeight: "200%"
  },
  longTextContainer: {
    margin: ({ isOdds }) => (isOdds ? "0 0 2rem 0" : "20px 0"),
    "@media (max-width: 960px)": {
      margin: ({ isOdds }) => (isOdds ? "0 0 1rem 0" : "20px 0"),
    },
  },
  mask: {
    marginBottom: "-50px",
  },
  lockIcon: {
    paddingTop: "41px",
    flex: 1,
    fill: "#fff",
  },
  right: {
    paddingLeft: ({ isOdds }) => isOdds && "5rem",
    "@media (max-width: 960px)": {
      paddingLeft: ({ isOdds }) => isOdds && "2rem",
    },
  },
}));
export const Upgrade = React.memo(({ isOdds }) => {
  const classes = useStyles({ isOdds });
  return (
    <Grid item container className={classes.root}>
      <Grid
        item
        container
        direction={isOdds ? "row" : "column"}
        className={classes.leftComp}
        justifyContent={isOdds ? "space-between" : "flex-start"}
        xs={isOdds ? 12 : 8}
        alignItems={isOdds && "center"}
      >
        <Grid item className={classes.top} container xs={isOdds && 6}>
          <Typography className={classes.topText}>
            Upgrade To Premium! Extra 300 Profitable Leagues. + Corner Stats &
            Cards
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={isOdds && 6}
          justifyContent={isOdds && "space-between"}
          className={classes.right}
        >
          <Grid item container className={classes.longTextContainer}>
            <Typography variant="h4" className={classes.midText}>
              Premium Will Get You More Wins. 300 Extra Leagues Known To Be
              Profitable And Less Tracked By The Bookies.
              {!isOdds &&
                "Plus, You Get Corner Stats And Card Stats Along With CSV Downloads."}{" "}
              Subscribe Today!
            </Typography>
          </Grid>
          <Grid item container xs={isOdds && 6}>
            <BecomePremiumBtn />
          </Grid>
        </Grid>
      </Grid>

      {!isOdds && (
        <Grid
          item
          container
          className={classes.rightComp}
          xs={4}
          direction="column"
          justifyContent="flex-end"
        >
          {/* <Grid item className={classes.lockIcon} container justifyContent="center">
            <Lock />
          </Grid> */}
          <Grid item className={classes.mask}>
            <MaskGroup />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
});
