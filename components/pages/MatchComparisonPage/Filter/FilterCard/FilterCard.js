import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Popper, Grid, Button } from '@mui/material';

import Tabs from '../TabsWrapper/TabsWrapper';
import League from '../League/League';
import Statistics from '../Statistics/Statistics';
import Counteries from '../Counteries/Counteries';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    height: '70vh',
    width: '60vw',
    padding: theme.spacing(1),
    backgroundColor: '#fff',
    borderRadius: 7,
    marginTop: 5,
  },
}));

const data = [
  {
    label: 'league',
    index: 0,
    component: <League />,
  },
  {
    label: 'Statistics',
    index: 1,
    component: <Statistics />,
  },
  {
    label: 'countries',
    index: 2,
    component: <Counteries />,
  },
];

const FilterCard = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.paper}>
      <Tabs data={data} main />
    </Grid>
  );
};

export default FilterCard;
