import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography, useMediaQuery } from "@mui/material";

import { SideComp } from "./SideComp/SideComp";
import { LinearDeterminate } from "components/";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: "#fff",
    padding: "1.9em 1.9em 2.7em 1.9em",
    backgroundColor: palette.primary.main,
    borderRadius: "0px 0px 20px 20px",
  },
  teamName: {
    fontWeight: "400",
    "@media (max-width: 1550px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width: 1350px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 1265px)": {
      fontSize: "1.4rem",
    },
  },
}));

export const WdlBottomComp = ({ localTeamPPGHT, visitorTeamPPGHT }) => {
  const classes = useStyles();
  const sm = useMediaQuery("(max-width:600px)");

  const value = () => {
    if (localTeamPPGHT == 0 && visitorTeamPPGHT == 0) {
      return 50;
    } else {
      return (+localTeamPPGHT / (+localTeamPPGHT + +visitorTeamPPGHT)) * 100;
    }
  };
  return (
    <Grid
      item
      container
      className={classes.root}
      alignItems="center"
      justifyContent="space-between"
      wrap="nowrap"
    >
      <SideComp sm={sm} />
      <Grid item sm={6} xs={4}>
        <LinearDeterminate
          height={sm ? "5em" : "2.8em"}
          borderRadius={100}
          colorPrimary="#1BD47B"
          colorSecondary="#FB5266"
          barRadius={100}
          value={value()}
        />
      </Grid>
      <SideComp right={true} sm={sm} />
    </Grid>
  );
};
