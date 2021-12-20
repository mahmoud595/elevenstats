import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { LatestMatchesContainer } from "./LatestMatchesContainer/LatestMatchesContainer";
import { LatestNews } from "./LatestNews/LatestNews";

import { TopPlayersContainer } from "./TopPlayersContainer/TopPlayersContainer";

import { LeagueGroups } from "./LeagueGroups/LeagueGroups";

const useStyles = makeStyles(({ palette }) => ({
  overView: {
    "&>div": {
      marginTop: 30,
    },
  },
}));
export const OverView = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" className={classes.overView}>
      <LatestMatchesContainer />
      <LeagueGroups />
      <TopPlayersContainer />

      <LatestNews />
    </Grid>
  );
};
