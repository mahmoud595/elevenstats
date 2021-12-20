import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { AdvancedAttributes } from "./AdvancedAttributes/AdvancedAttributes";
import { AdvancedPositionsAgePhysicalFilters } from "./AdvancedPositionsAgePhysicalFilters/AdvancedPositionsAgePhysicalFilters";
import { AdvancedPositionsLeftGrid } from "./AdvancedPositionsLeftGrid/AdvancedPositionsLeftGrid";

const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    marginTop: "24px",
  },
}));

export const FiltersContainer = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.filtersContainer}>
      <AdvancedPositionsLeftGrid />
      <AdvancedPositionsAgePhysicalFilters />
      <AdvancedAttributes />
    </Grid>
  );
};
