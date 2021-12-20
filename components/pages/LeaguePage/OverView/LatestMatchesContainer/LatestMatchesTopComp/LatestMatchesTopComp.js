import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { SeeMore } from "public";
const useStyles = makeStyles(({ palette }) => ({
  seeGrid: {
    marginRight: "1.6em",
  },
  latestText: {
    fontSize: "2.3em",
    lineHeight: "29px",
    color: "#022A54",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  seeAllText: {
    fontSize: "2em",
    fontWeight: 600,
    lineHeight: "14px",
    color: "#246BFD",
  },
}));

export const LatestMatchesTopComp = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item>
        <Typography className={classes.latestText}>Latest {text}</Typography>
      </Grid>
      <Grid item container alignItems="center" justifyContent="flex-end">
        {/* <Link href="/matches"> */}

        <Grid item className={classes.seeGrid}>
          <Typography className={classes.seeAllText}>See all {text}</Typography>
        </Grid>
        <Grid item>
          <SeeMore />
        </Grid>
        {/* </Link> */}
      </Grid>
    </Grid>
  );
};
