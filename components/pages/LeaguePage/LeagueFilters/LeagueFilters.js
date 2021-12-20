import { useState } from "react";
import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { BottomFiltersComp } from "./BottomFiltersComp/BottomFiltersComp";
import { TopFiltersComp } from "./TopFiltersComp/TopFiltersComp";
import { AllLeaguesComp } from "./AllLeaguesComp/AllLeaguesComp";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    background: "#FFF",
    padding: "2.4em 4.2em 1.5em 3.5em",
    borderRadius: 18,
    "& > div:first-child": {
      marginBottom: "2em",
    },
  },
}));

export const LeagueFilters = () => {
  const classes = useStyles();
  const [selectedLeague, setSelectedLeague] = useState("popular");

  return (
    <Grid container direction="column" className={classes.container}>
      <TopFiltersComp
        setSelectedLeague={setSelectedLeague}
        selectedLeague={selectedLeague}
      />
      {selectedLeague === "all leagues" ? (
        <AllLeaguesComp />
      ) : (
        <BottomFiltersComp />
      )}
    </Grid>
  );
};
