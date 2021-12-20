import React from "react";
import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

import { TabsFiltersBotComp } from "./TabsFiltersBotComp/TabsFiltersBotComp";
import { TabsFiltersTopComp } from "./TabFiltersTopComp/TabsFiltersTopComp";
import logoLeague from "public/logoLeague.png";

const useStyles = makeStyles(({ palette }) => ({
  tabsContainer: {
    marginTop: 16,
    background: "#fff",
    padding: "17px 0 0 3.6em",
    borderRadius: 18,
    position: "relative",
  },
  logo: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
}));

export const TabsFilters = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.tabsContainer}
      direction="column"
      wrap="nowrap"
    >
      <TabsFiltersTopComp />
      <TabsFiltersBotComp />
      <Grid item className={classes.logo}>
        <Image src={logoLeague} alt="logo" layout="fixed" />
      </Grid>
    </Grid>
  );
};
