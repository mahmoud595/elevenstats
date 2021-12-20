import React, { useMemo, useCallback } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";
import { CardWrapper } from "components/pages/HeadToHeadPage/StatisticsContainer/CardsContainer/CardWrapper/CardWrapper";
import { Tv } from "public";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    marginTop: "50px",
    marginBottom: "100px",
  },
  text: {
    color: "#6B2262",
    fontSize: "1.8rem",
    fontWeight: "600",
    "@media (max-width: 1550px)": {
      fontSize: "1.1rem",
    },
  },
  tableContainer: {
    padding: "1rem 2rem 1rem 2rem",
    boxShadow: "0px -4px 12px -10px rgb(0 0 0 / 50%)",
    flex: 1,
  },
  grid: {
    marginTop: "1rem",
  },
  channel: {
    fontSize: "1.8rem",
    fontWeight: "400",
    color: "#6B7281",
    "@media (max-width: 1550px)": {
      fontSize: "1.4rem",
    },
  },
  svgGrid: {
    // width: "100%",
    // height: "100%",
    "&>svg": {
      //   width: "100%",
      //   height: "100%",
    },
  },
}));

// const data = [
//   "CANAL+ Sport 2 (Pol)",
//   "Digi Sport 1 (Hun)",
//   "PREMIER Sport (CZE)",
//   "S Sport",
//   "Sky Sport (Ger)",
//   "Sky Sports Main Event (UK/Irl)",
//   "Sky Sports Premier League (UK/Irl)",
//   "Sport TV (Por)",
//   "Ziggo Sport (Ned)",
// ];
export const StreamsContainer = () => {
  const classes = useStyles();
  const {
    fixture: { tvStations },
    localTeamStats,
    visitorTeamStats,
  } = useSelector(({ h2h }) => h2h, shallowEqual);
  const headerComp = useMemo(
    () => (
      <Grid item>
        <Typography className={classes.text}>
          Channels Showing {localTeamStats.team.name} and{" "}
          {visitorTeamStats.team.name}
        </Typography>
      </Grid>
    ),
    []
  );
  const renderData = useCallback(() => {
    return tvStations?.map(({ name }, i) => (
      <Grid item container key={i} className={classes.grid} wrap="nowrap">
        <Grid item xs={3} className={classes.svgGrid}>
          <Tv />
        </Grid>
        <Grid item>
          <Typography className={classes.channel}>{name}</Typography>
        </Grid>
      </Grid>
    ));
  }, [tvStations]);
  const dataMemo = useMemo(() => renderData(), [tvStations]);
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item md={5}>
        <CardWrapper headerComp={headerComp}>
          <Grid item container className={classes.tableContainer}>
            {dataMemo}
          </Grid>
        </CardWrapper>
      </Grid>
    </Grid>
  );
};
