import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { StatisticsContainer } from "../StatisticsContainer/StatisticsContainer";
import { OddsContainer } from "../OddsContainer/OddsContainer";
import { StreamsContainer } from "../StreamsContainer/StreamsContainer";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    marginTop: "2em",
  },
}));
export const ScreensContainer = ({ selected, screenSelected }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.cardsContainer}>
      <Grid
        item
        container
        style={{
          display: screenSelected === "statistics" ? "block" : "none",
        }}
      >
        <StatisticsContainer selected={selected} />
      </Grid>

      <Grid
        item
        container
        style={{ display: screenSelected === "odds" ? "block" : "none" }}
      >
        <OddsContainer />
      </Grid>
      <Grid
        item
        container
        style={{
          display: screenSelected === "STREAMS/TV" ? "block" : "none",
        }}
      >
        <StreamsContainer />
      </Grid>
    </Grid>
  );
};
