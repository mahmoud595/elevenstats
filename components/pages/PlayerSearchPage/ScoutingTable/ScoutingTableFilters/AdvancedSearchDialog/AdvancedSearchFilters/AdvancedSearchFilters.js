import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { AdvancedSavedFilters } from "./AdvancedSavedFilters/AdvancedSavedFilters";
import { AdvancedCountryFilter } from "./AdvancedCountryFilter/AdvancedCountryFilter";
import { AdvancedPlayedFilter } from "./AdvancedPlayed/AdvancedPlayed";
import { AdvancedSeasonFilter } from "./AdvancedSeasonFilter/AdvancedSeasonFilter";

const useStyles = makeStyles((theme) => ({
  filtersGrid: {
    borderRadius: "14px",
    backgroundColor: "rgba(246, 247, 250, 0.6)",
    padding: "16px 7.3em",
    marginTop: "20px",
  },
}));
export const AdvancedSearchFilters = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.filtersGrid}>
      <Grid item container alignItems="center" justifyContent="space-between">
        <AdvancedSeasonFilter />
        <AdvancedCountryFilter />
        <AdvancedPlayedFilter />
        <AdvancedSavedFilters />
      </Grid>
    </Grid>
  );
};
