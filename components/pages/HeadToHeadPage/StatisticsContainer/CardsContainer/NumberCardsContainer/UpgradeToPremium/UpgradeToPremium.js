import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

import { BecomePremiumBtn } from "../../BecomePremiumBtn/BecomePremiumBtn";
import { Lock } from "public/";
import { FeedBackBtn } from "components/Layout/NavBar/FeedBackBtn";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
    padding: "2.3vh 4rem 1.8vh 4rem",
    borderRadius: "0px 0px 20px 20px",
    // color: "#FFF",
    // "@media (max-width: 1620px)": {
    //   padding: "2em 2em",
    // },
  },
  svgContainer: {
    height: 38,
    width: 29,
    marginRight: "1.5rem",
    "& svg": {
      width: "120%",
      height: "100%",
      fill: "#1BD47B",
    },
  },
  profitText: {
    color: "#1BD47B",
    fontSize: 23,
    "@media (max-width: 900px)": {
      fontSize: 18,
    },
    fontWeight: 600,
    lineHeight: "23px",
  },
  upgradeText: {
    fontWeight: 700,
    fontSize: "3rem",
    textTransform: "capitalize",
    color: "#FFF",
    whiteSpace: "none !important",
    "@media (max-width: 1620px)": {
      fontSize: "2rem",
    },
  },
  uppperComp: {
    marginBottom: "1.3vh",
  },
  upgradeTextContainer: {
    marginRight: "4em",
  },
  unlockText: {
    color: "#FFF",
    fontSize: 14,
    "@media (max-width: 900px)": {
      fontSize: 12,
    },
    fontWeight: 700,
    whiteSpace: "none",
  },
}));

export const UpgradeToPremium = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.root}
      alignItems="center"
      wrap="nowrap"
      justifyContent="space-between"
    >
      <Grid item container direction="column">
        <Grid
          item
          container
          wrap="nowrap"
          alignItems="center"
          className={classes.uppperComp}
        >
          <Grid item className={classes.upgradeTextContainer}>
            <Typography className={classes.upgradeText}>
              upgrade To premium!
            </Typography>
          </Grid>

          <Grid item container alignItems="center" wrap="nowrap">
            <Grid item className={classes.svgContainer}>
              <Lock />
            </Grid>
            <Grid item>
              <Typography className={classes.unlockText}>
                UNLOCK Data
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.profitText}>
            Get The Profit &#62;
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <FeedBackBtn />
      </Grid>
    </Grid>
  );
};
