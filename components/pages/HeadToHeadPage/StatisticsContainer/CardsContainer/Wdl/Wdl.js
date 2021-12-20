import React, { memo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { WhoIsBetter } from "../WhoIsBetter/WhoIsBetter";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { WdlBottomComp } from "./WdlBottomComp/WdlBottomComp";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles(({ palette }) => ({
  tableContainer: {
    flex: 1,
    // padding: '0 1em',
    "& > div:nth-child(odd)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    "& > div:nth-child(1)": {
      background: "#F6F7FA",
      borderRadius: 8,
      marginTop: 10,
    },
  },
  middleTitleContainer: {
    textAlign: "center",
    backgroundImage: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
    padding: "1.2vh 3em",
  },
  middleTitleText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 600,
    "@media only screen and (min-width:1330px) and (max-width:1560px)": {
      fontSize: "1.1rem",
    },
  },
  middleTitleValue: {
    display: "inline",
    color: "#1BD47B",
    fontWeight: 600,
  },
}));
export const Wdl = memo(() => {
  const classes = useStyles();
  const {
    localTeamStats,
    visitorTeamStats,
    localTeamPercentile,
    visitorTeamPercentile,
  } = useSelector((state) => state.h2h);
  const teamsData = [
    { img: localTeamStats.team.logoPath },
    {
      img: visitorTeamStats.team.logoPath,
    },
  ];
  const data = [
    {
      name: "Win% 1H",
      t1: localTeamStats.records.leadingHTPercentage.total + "%",
      t2: visitorTeamStats.records.leadingHTPercentage.total + "%",
      t1Color: localTeamPercentile.records.leadingHTPercentage.total,
      t2Color: visitorTeamPercentile.records.leadingHTPercentage.total,
    },
    {
      name: "Win% 2H",
      t1: localTeamStats.records.wins2HTPercentage.total + "%",
      t2: visitorTeamStats.records.wins2HTPercentage.total + "%",
      t1Color: localTeamPercentile.records.wins2HTPercentage.total,
      t2Color: visitorTeamPercentile.records.wins2HTPercentage.total,
    },
    {
      name: "Draw% 1H",
      t1: localTeamStats.records.drawingHTPercentage.total + "%",
      t2: visitorTeamStats.records.drawingHTPercentage.total + "%",
      t1Color: localTeamPercentile.records.drawingHTPercentage.total,
      t2Color: visitorTeamPercentile.records.drawingHTPercentage.total,
    },
    {
      name: "Draw% 2H",
      t1: localTeamStats.records.draws2HTPercentage.total + "%",
      t2: visitorTeamStats.records.draws2HTPercentage.total + "%",
      t1Color: localTeamPercentile.records.draws2HTPercentage.total,
      t2Color: visitorTeamPercentile.records.draws2HTPercentage.total,
    },
    {
      name: "Loss% 1H",
      t1: localTeamStats.records.trailingHTPercentage.total + "%",
      t2: visitorTeamStats.records.trailingHTPercentage.total + "%",
      t1Color: localTeamPercentile.records.trailingHTPercentage.total,
      t2Color: visitorTeamPercentile.records.trailingHTPercentage.total,
    },
    {
      name: "Loss% 2H",
      t1: localTeamStats.records.losses2HTPercentage.total + "%",
      t2: visitorTeamStats.records.losses2HTPercentage.total + "%",
      t1Color: localTeamPercentile.records.losses2HTPercentage.total,
      t2Color: visitorTeamPercentile.records.losses2HTPercentage.total,
    },
  ];
  return (
    <CompWrapper title="FIRST/SECOND HALF WDL" tooltip flex>
      <Grid item container className={classes.tableContainer}>
        <CardTable
          subTitle="1H/2H WDL"
          data={data}
          teamsData={teamsData}
          minHeight="4.6vh"
          rowPadding="0 4.6em 0 2.7em"
          percentile
          // smallSubTitleSize={5}
        />
      </Grid>
      {/* <Grid
        item
        className={classes.middleTitleContainer}
        container
        // justifyContent="center"
      >
        <Typography className={classes.middleTitleText}>
          Liverpool Is
          <span className={classes.middleTitleValue}>+150% Better</span> In
          Terms Of Goals Scored
        </Typography>
      </Grid> */}
      <WhoIsBetter PPG={true} />
      <WdlBottomComp
        localTeamPPGHT={localTeamStats.points.PPGHT.home}
        visitorTeamPPGHT={visitorTeamStats.points.PPGHT.away}
      />
    </CompWrapper>
  );
});
