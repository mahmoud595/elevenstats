import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid } from "@mui/material";
import { OddsMarketCard } from "../StatisticsContainer/CardsContainer/OddsMarketCard/OddsMarketCard";
import { Upgrade } from "../StatisticsContainer/CardsContainer/Upgrade/Upgrade";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    "&>div": {
      margin: "20px 0",
      // paddingLeft: '3em',
      // minWidth: "330px",
    },
  },
}));
export const OddsContainer = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      justifyContent="space-between"
    >
      <Grid item xs={12}>
        <Upgrade isOdds={true} />
      </Grid>
      <Grid item xs={12}>
        <OddsMarketCard isOdds={true} />
      </Grid>
    </Grid>
  );
};
