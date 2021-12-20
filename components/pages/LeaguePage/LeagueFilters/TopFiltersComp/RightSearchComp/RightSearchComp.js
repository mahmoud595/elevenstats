import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import { Search } from 'components';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '36em',
    '@media (max-width: 900px)': {
      width: '27em',
    },
  },
}));

export const RightSearchComp = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Search
        title="Search for a league"
        backgroundColor="#F6F7FA"
        borderRadius="40px"
        rowReverse
        padding="0 2em"
        color="#A1B5C9"
      />
    </Grid>
  );
};
