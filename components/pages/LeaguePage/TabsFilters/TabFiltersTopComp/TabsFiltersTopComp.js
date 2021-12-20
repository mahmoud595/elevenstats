import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

import premierLeague from "public/premierLeague.png";
import { SeasonPicker } from "./SeasonPicker/SeasonPicker";

const useStyles = makeStyles(({ palette }) => ({
  LeagueNameContainer: {
    marginLeft: "2.5em",
  },
  countryName: {
    fontSize: "1.8em",
    lineHeight: "12px",
    color: "#022A54",
    textTransform: "uppercase",
  },
  leagueName: {
    fontSize: "2em",
    lineHeight: "17px",
    fontWeight: 700,
    color: "#022A54",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  leagueGrid: {
    marginTop: "4px",
  },
}));

export const TabsFiltersTopComp = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.topComp} wrap="nowrap">
      <Grid item>
        <Image src={premierLeague} alt="premierLeague" layout="fixed" />
      </Grid>
      <Grid item className={classes.LeagueNameContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.countryName}>England</Typography>
          </Grid>
          <Grid item className={classes.leagueGrid}>
            <Typography className={classes.leagueName}>
              PREMIER LEAGUE
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <SeasonPicker />
    </Grid>
  );
};
