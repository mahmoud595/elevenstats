import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { LatestMatchesCarrousel } from "./LatestMatchesCarrousel/LatestMatchesCarrousel";

const useStyles = makeStyles(({ palette }) => ({}));
export const LatestMatchesBottomComp = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.latestMatchesWrapper}>
      <LatestMatchesCarrousel />
    </Grid>
  );
};
