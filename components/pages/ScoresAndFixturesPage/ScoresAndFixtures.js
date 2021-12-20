import { memo } from "react";
import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { Fixtures } from "./Fixtures/Fixtures";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    flex: 1,

    "& > div": {
      marginBottom: 30,
    },
  },
}));

export const ScoresAndFixtures = memo(() => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" className={classes.root}>
      <Fixtures />
    </Grid>
  );
});
