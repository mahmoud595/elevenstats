import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { Search } from "../../../..";
import MainFilters from "../MainFilters/MainFilters";

const useStyles = makeStyles(({ palette }) => ({
  search: {
    border: "1px solid #D1D5DB",

    borderRadius: 7,
  },
  titleContainer: {
    color: palette.primary.main,
  },
  mainFiltersWrapper: {
    marginTop: "1em",
  },
}));

const FilterTabWrapper = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ height: "100%" }} wrap="nowrap">
      <Grid item container justifyContent="space-between">
        <Grid item className={classes.titleContainer}>
          <Typography variant="caption">{title}</Typography>
        </Grid>
        <Grid item className={classes.search}>
          <Search
            backgroundColor="#FFFFFF"
            color="#6B7281"
            title="search league"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="flex-start"
        spacing={2}
        className={classes.mainFiltersWrapper}
        style={{ height: "100%", overflowY: "scroll" }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default FilterTabWrapper;
