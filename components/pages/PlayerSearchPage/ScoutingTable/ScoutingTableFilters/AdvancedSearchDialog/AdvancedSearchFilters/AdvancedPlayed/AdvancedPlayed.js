import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ScoutingFilterButton } from '../../../ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton';
import { AdvancedInput } from '../../AdvancedInput/AdvancedInput';
const useStyles = makeStyles((theme) => ({
  btnGrid: {
    width: '20em',
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
export const AdvancedPlayedFilter = () => {
  const classes = useStyles();
  const [value, setValue] = useState();

  return (
    <Grid xs={3} item container alignItems="center" wrap="nowrap">
      <Grid item>
        <Typography className={classes.text}>90s PLAYED</Typography>
      </Grid>
      <Grid item className={classes.btnGrid}>
        {/* <ScoutingFilterButton text="Any" type="AdvancedPlayed" /> */}
        <AdvancedInput
          setValue={setValue}
          placeHolder="Enter value "
          value={value}
        />
      </Grid>
    </Grid>
  );
};
