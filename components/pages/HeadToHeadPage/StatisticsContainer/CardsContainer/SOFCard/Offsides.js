import { useState, useMemo, memo } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { CardTabs } from "../CardTabs/CardTabs";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles(({ palette }) => ({
  tableContainer: {
    padding: "13px 0 0.9vh 0",
    flex: 1,
    borderRadius: "0px 0px 20px 20px",
    background: "#fff",
    // boxShadow: '0px -4px 12px -10px rgb(0 0 0 / 50%)',
    // borderTop: '1px solid #EAEDF2',
    "& > div:nth-child(odd)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    "& > div:nth-child(1)": {
      background: "#F6F7FA",
      borderRadius: 8,
    },
  },
}));
const tabs = [
  { name: "Team Offsides", xs: 6, index: 0 },
  { name: "Match Offsides", xs: 6, index: 1 },
];

export const Offsides = memo(() => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  const {
    localTeamOffsides,
    visitorTeamOffsides,
    localTeam,
    visitorTeam,
    localTeamOffsidesPercentile,
    visitorTeamOffsidesPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: { offsides: localTeamOffsides, team: localTeam },
      visitorTeamStats: { offsides: visitorTeamOffsides, team: visitorTeam },
      localTeamPercentile: { offsides: localTeamOffsidesPercentile },
      visitorTeamPercentile: { offsides: visitorTeamOffsidesPercentile },
    } = h2h;

    return {
      localTeam,
      localTeamOffsides,
      visitorTeam,
      visitorTeamOffsides,
      localTeamOffsidesPercentile,
      visitorTeamOffsidesPercentile,
    };
  }, shallowEqual);
  const offsideStats = [
    {
      name: "Offsides / Match",
      t1: localTeamOffsides.offsidesAverage.total,
      t2: visitorTeamOffsides.offsidesAverage.total,
      avg: calculateAvg(
        localTeamOffsides.offsidesAverage.total,
        visitorTeamOffsides.offsidesAverage.total
      ),
      t1Color: localTeamOffsidesPercentile.offsidesAverage.total,
      t2Color: visitorTeamOffsidesPercentile.offsidesAverage.total,
      avgColor: calculateAvg(
        localTeamOffsidesPercentile.offsidesAverage.total,
        visitorTeamOffsidesPercentile.offsidesAverage.total
      ),
    },
    {
      name: "Over 2.5 Offsides",
      t1: localTeamOffsides.overPercentage["2_5"].total + "%",
      t2: visitorTeamOffsides.overPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamOffsides.overPercentage["2_5"].total,
          visitorTeamOffsides.overPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamOffsidesPercentile.overPercentage["2_5"].total,
      t2Color: visitorTeamOffsidesPercentile.overPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamOffsidesPercentile.overPercentage["2_5"].total,
          visitorTeamOffsidesPercentile.overPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5 Offsides",
      t1: localTeamOffsides.overPercentage["3_5"].total + "%",
      t2: visitorTeamOffsides.overPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamOffsides.overPercentage["3_5"].total,
          visitorTeamOffsides.overPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamOffsidesPercentile.overPercentage["3_5"].total,
      t2Color: visitorTeamOffsidesPercentile.overPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamOffsidesPercentile.overPercentage["3_5"].total,
          visitorTeamOffsidesPercentile.overPercentage["3_5"].total
        ) + "%",
    },
  ];
  const offsideStatsFor = [
    {
      name: "Offsides / Match",
      t1: localTeamOffsides.offsidesForAverage.total,
      t2: visitorTeamOffsides.offsidesForAverage.total,
      avg: calculateAvg(
        localTeamOffsides.offsidesForAverage.total,
        visitorTeamOffsides.offsidesForAverage.total
      ),
      t1Color: localTeamOffsidesPercentile.offsidesForAverage.total,
      t2Color: visitorTeamOffsidesPercentile.offsidesForAverage.total,
      avgColor: calculateAvg(
        localTeamOffsidesPercentile.offsidesForAverage.total,
        visitorTeamOffsidesPercentile.offsidesForAverage.total
      ),
    },
    {
      name: "Over 2.5 Offsides",
      t1: localTeamOffsides.overForPercentage["2_5"].total + "%",
      t2: visitorTeamOffsides.overForPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamOffsides.overForPercentage["2_5"].total,
          visitorTeamOffsides.overForPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamOffsidesPercentile.overForPercentage["2_5"].total,
      t2Color: visitorTeamOffsidesPercentile.overForPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamOffsidesPercentile.overForPercentage["2_5"].total,
          visitorTeamOffsidesPercentile.overForPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5 Offsides",
      t1: localTeamOffsides.overForPercentage["3_5"].total + "%",
      t2: visitorTeamOffsides.overForPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamOffsides.overForPercentage["3_5"].total,
          visitorTeamOffsides.overForPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamOffsidesPercentile.overForPercentage["3_5"].total,
      t2Color: visitorTeamOffsidesPercentile.overForPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamOffsidesPercentile.overForPercentage["3_5"].total,
          visitorTeamOffsidesPercentile.overForPercentage["3_5"].total
        ) + "%",
    },
  ];
  const teamsData = [
    { img: localTeam.logoPath },
    {
      img: visitorTeam.logoPath,
    },
    { name: "Average" },
  ];
  const changeTab = (i) => {
    setActive(i);
  };
  return (
    <Grid item container style={{ marginBottom: "5em", flex: 1 }}>
      <CompWrapper
        title="Offsides"
        // headerComp={Header}
        // background="#F6F7FA"
        // noFlex={true}
        // toolTipText={`${localTeam.name} and ${visitorTeam.name}  Overall Match offsides and team Offsides`}
        // tooltip
        flex={1}
        // tabs={tabs}
        // changeTab={changeTab}
      >
        <Grid
          item
          container
          className={classes.tableContainer}
          direction="column"
          // style={{ borderRadius: '20px' }}
        >
          <CardTable
            data={active === 0 ? offsideStatsFor : offsideStats}
            subTitle="Offside Stats"
            teamsData={teamsData}
            extended
            // subTitleSize={8}
            // smallSubTitleSize={4}
            size={2}
            bigSize={6}
            // active={active === 0}
            // isTeam={isTeam}
            minHeight="50px"
            rowPadding="0 2.8em"
            percentile
          />
        </Grid>
      </CompWrapper>
    </Grid>
  );
});
