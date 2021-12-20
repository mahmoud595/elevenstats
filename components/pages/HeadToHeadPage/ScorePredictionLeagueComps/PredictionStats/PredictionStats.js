import { memo } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { useSelector, shallowEqual } from "react-redux";
import { Grid, Hidden, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

import { PredictionStatsBottomComp } from "./PredictionStatsBottomComp/PredictionStatsBottomComp";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "fit-content",
    position: "relative",
    background: palette.primary.main,
    borderRadius: 20,
  },
  topComp: {
    backgroundColor: "#3C5E83",
    color: "white",
    borderRadius: "12px 0px 12px 0px",
    textTransform: "uppercase",
    padding: "5px 3.2em 4px 3.2em",
    alignSelf: "flex-start",
    "@media (max-width: 960px)": {
      // height: 20,
      padding: "5px 15px",
    },
    "@media (max-width: 740px)": {
      // height: 17,
      padding: "5px 10px",
    },
    "@media (max-width: 600px)": {
      // height: 17,
      padding: "10px 12px",
    },
  },
  title: {
    "@media (max-width: 1680px)": {
      fontSize: ({ live }) => !live && "1.2rem",
    },
    "@media (max-width: 1440px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width: 1280px)": {
      fontSize: ({ live }) => (live ? "0.9rem" : "1rem"),
    },
    "@media (max-width: 960px)": {
      fontSize: "0.7rem !important",
      letterSpacing: 2,
    },
    "@media (max-width: 600px)": {
      fontSize: "10px !important",
      letterSpacing: 2.5,
      fontWeight: 600,
    },
  },
  img: {
    "@media (max-width:600px)": {
      objectFit: "cover",
    },
    // "@media (max-width: 7600px)": {
    //   width: 11,
    //   height: 17,
    // },
  },
  teamNotLive: {
    paddingLeft: "0.3rem",
    "@media (max-width: 960px)": {
      paddingLeft: "0",
    },
    "@media (max-width:600px)": {
      background: "linear-gradient(0deg, #072C5C 0%, #0C3B6E 100%)",
      padding: "5px 0 6px 0",
      borderRadius: 30,
      margin: "0 2em",
    },
  },
  bottomComp: {
    minHeight: "20em",
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: "0px 0px 20px 20px",
    padding: "0 6.8em",
    margin: "10px 0 37px 0",
    // marginTop: '1em',
    // "@media (min-width: 1700px)": {
    //   marginTop: "1em",
    // },
    "@media (max-width: 1280px)": {
      padding: "0 2rem",
      margin: "13px 0 37px 0",
      // margin: 0,
    },
    "@media (max-width: 960px)": {
      padding: "0 0.3rem",
      minHeight: "15em",
      margin: "5px 0 25px 0",
    },
  },
  vs: {
    color: "#1BD47B",
    backgroundColor: "rgba(27, 212, 123, 0.3)",
    padding: "0.5rem 0.7rem 0.5rem 0.6rem",
    borderRadius: "50%",
    fontSize: "1.4rem",
    "@media (max-width: 1680px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width: 1280px)": {
      fontSize: "0.9rem",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.6rem",
      padding: "0.4rem 0.6rem 0.4rem 0.4rem",
    },
  },

  teamsName: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "2.5em",
    "@media (max-width:1192px)": {
      fontSize: "2em",
    },
    "@media (max-width:960px)": {
      fontSize: "1.3em",
    },
    "@media (max-width:600px)": {
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: 0,
    },
  },
  teamsContainer: {
    margin: "2px 0 0px 0",
    paddingTop: 4,

    "@media (max-width:1100px)": {
      margin: 0,
    },
    "@media (max-width:600px)": {
      padding: "3em 6px 3em 0",
    },
  },
  vsContainer: {
    margin: "21px 0",
    "@media (max-width:960px)": {
      margin: "10px 0",
    },
  },
  imgContainer: {
    margin: "0 10px 0 0",
    display: "flex",
    position: "relative",
    width: 21,
    height: 21,
    "@media (max-width:600px)": {
      width: 15,
      height: 19,
      margin: "0 10px",
    },
  },
}));
export const PredictionStats = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const classes = useStyles({ sm });

  const { localTeam, visitorTeam } = useSelector(({ h2h }) => {
    const {
      localTeamStats: { team: localTeam },
      visitorTeamStats: { team: visitorTeam },
    } = h2h;
    return { localTeam, visitorTeam };
  }, shallowEqual);

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container wrap="wrap" alignItems="center">
        <Grid item className={classes.topComp}>
          <Typography variant="subtitle2" className={classes.title}>
            Prediction Stats
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-around"
          alignItems="center"
          className={classes.bottomComp}
          wrap={sm ? "wrap" : "nowrap"}
        >
          <Grid item className={classes.teamsContainer} xs={12} sm={3}>
            <Grid
              container
              alignItems={sm ? "center" : "flex-start"}
              wrap="nowrap"
              direction={sm ? "row" : "column"}
            >
              <Grid item className={classes.teamNotLive} xs={6} sm="auto">
                <Grid
                  container
                  alignItems={sm ? "center" : "flex-start"}
                  direction={sm ? "row-reverse" : "row"}
                  wrap={sm ? "nowrap" : "wrap"}
                >
                  <Grid item className={classes.imgContainer}>
                    <Image
                      src={localTeam.logoPath}
                      // width={27}
                      // height={27}
                      layout="fill"
                      className={classes.img}
                      alt={localTeam.name}
                      // layout="fixed"
                    />
                  </Grid>
                  <Grid item className={classes.teamsNameGridNotLive}>
                    <Grid container alignItems="center">
                      <Typography className={classes.teamsName}>
                        {localTeam.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Hidden smDown implementation="css">
                <Grid item className={classes.vsContainer}>
                  <Typography className={classes.vs} variant="h5">
                    VS
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item className={classes.teamNotLive} xs={6} sm="auto">
                <Grid
                  container
                  alignItems="center"
                  wrap={sm ? "nowrap" : "wrap"}
                >
                  <Grid item className={classes.imgContainer}>
                    <Image
                      src={visitorTeam.logoPath}
                      // width={27}
                      // height={27}
                      className={classes.img}
                      // layout="fixed"
                      layout="fill"
                      alt={visitorTeam.name}
                    />
                  </Grid>
                  <Grid item className={classes.teamsNameGridNotLive}>
                    <Grid container alignItems="center">
                      <Typography className={classes.teamsName}>
                        {visitorTeam.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <PredictionStatsBottomComp />
        </Grid>
      </Grid>
    </Grid>
  );
};
