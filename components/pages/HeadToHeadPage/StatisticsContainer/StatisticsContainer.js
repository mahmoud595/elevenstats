import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";

// import StatisticsBotHeader from "components/HomePage/KeyStatistics/StatisticsHeader/StatisticsBotHeader/StatisticsBotHeader";
// import { CardsContainer } from "./CardsContainer/CardsContainerCopy";
import { CardsContainer } from "./CardsContainer/CardsContainer";
// import { Cards } from "./CardsContainer/Cards";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    // "&>div": {
    //   // marginTop: 40,
    //   height: "fit-content !important",
    //   "@media (max-width: 1600px)": {
    //     // marginTop: "20px",
    //   },
    // },
  },
}));
export const StatisticsContainer = React.memo(({ selected }) => {
  const classes = useStyles();
  // const [selected, setSelected] = useState("all");
  return (
    <Grid item container className={classes.root} alignItems="center">
      {/* <StatisticsBotHeader h2h changeSelected={setSelected} /> */}

      <CardsContainer selected={selected} />
      {/* <Cards selected={selected} /> */}
    </Grid>
  );
});
