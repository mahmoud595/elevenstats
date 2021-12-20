import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ScoutingFilterButton } from '../../../ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton';
const useStyles = makeStyles((theme) => ({
  btnGrid: {
    width: '19.5em',
    marginLeft: '2.7em',
    '@media (max-width:960px)': {
      width: '10em',
      marginLeft: '1em',
    },
  },
  text: {
    fontSize: '1.8em',
    lineHeight: '30px',
    fontWeight: 600,
    color: 'rgba(2, 42, 84, 0.6)',
    whiteSpace: 'nowrap',
    '@media (max-width:960px)': {
      fontSize: '1.4em',
    },
  },
}));
export const AdvancedSavedFilters = () => {
  const classes = useStyles();

  return (
    <Grid xs={3} item container alignItems="center" wrap="nowrap">
      <Grid item>
        <Typography className={classes.text}>SAVED FILTERS</Typography>
      </Grid>
      <Grid item className={classes.btnGrid}>
        <ScoutingFilterButton text="Any" type="AdvancedSavedFilters" />
      </Grid>
    </Grid>
  );
};
