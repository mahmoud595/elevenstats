import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

import { SideComp } from "../../../../HeadToHeadPage/FirstComp/SideComp/SideComp";
import { Team } from "../../../../HeadToHeadPage/FirstComp/MiddleComp/Team/Team";
// import { CompareBtn } from "components/HomePage/MatchesComp/CompareBtn/CompareBtn";

import { NewsPaper } from "public/index";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "35%",
    "@media (max-width: 960px)": {
      width: "45%",
    },
    backgroundColor: "#EBEBEB",
    position: "absolute",
    right: 0,
    zIndex: 1,
    paddingTop: 10,
    borderRadius: "0px 10px 10px 0px",
  },
  title: {
    fontWeight: 600,
  },
  newsTitle: {
    color: "#6B7281",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  newsTitleContainer: {
    background: `linear-gradient(to right, #B2B2B2, #EBEBEB)`,
    padding: "5px 25px",
  },
  cardsContainer: {
    // padding: '10px 5px',
    padding: "10px 0px 0px 0px",
    flex: 1,
    "& > div": {
      marginBottom: 10,
    },
  },
  newsContainer: {
    paddingLeft: 15,
    paddingTop: 10,
  },
}));

export const FixtureDetails = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item>
        <Typography color="primary" variant="h3" className={classes.title}>
          venue: Anfield, liverpool
        </Typography>
      </Grid>
      {[0, 1].map((index) => (
        <Grid
          container
          className={classes.cardsContainer}
          justifyContent="center"
          style={{ backgroundColor: index === 0 ? "#EBEBEB" : "#F5F5F5" }}
        >
          <Grid item container justifyContent="space-around">
            <Grid item xs={4}>
              <Team small />
            </Grid>
            <Grid item container xs={7}>
              <SideComp small />
            </Grid>
          </Grid>

          <Grid item container direction="column">
            <Grid item container>
              <Grid item className={classes.newsTitleContainer}>
                <Typography variant="h3" className={classes.newsTitle}>
                  News
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              className={classes.newsContainer}
              alignItems="center"
            >
              <Grid item xs={1}>
                <NewsPaper />
              </Grid>
              <Grid item>
                <Typography variant="h3" className={classes.newsTitle}>
                  Man U secured a place in the quarter-finals of..
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              className={classes.newsContainer}
              alignItems="center"
            >
              <Grid item xs={1}>
                <NewsPaper />
              </Grid>
              <Grid item>
                <Typography variant="h3" className={classes.newsTitle}>
                  Man U secured a place in the quarter-finals of..
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            style={{ marginBottom: 5 }}
          >
            <Grid item xs={5}>
              {/* <CompareBtn title="View Odds" small /> */}
            </Grid>
            <Grid item xs={5}>
              {/* <CompareBtn title="View Team" backgroundColor="#6B2262" small /> */}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
