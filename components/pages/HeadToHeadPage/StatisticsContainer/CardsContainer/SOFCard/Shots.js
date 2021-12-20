import { useState, useMemo, memo } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CardTabs } from "../CardTabs/CardTabs";
import { getColor } from "utils/helperFunctions/h2hHelperFunctions";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
const useStyles = makeStyles(({ palette }) => ({
  tableContainer: {
    padding: "13px 0 9px 0",
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
  root: {
    "@media (max-width:1265px)": {
      marginBottom: "5em",
    },
  },
}));
const tabs = [
  { name: "Team Shots", xs: 6, index: 0 },
  { name: "Match Shots", xs: 6, index: 1 },
];
export const Shots = memo(() => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const {
    localTeamShots,
    localTeam,
    visitorTeamShots,
    visitorTeam,
    localTeamShotsPercentile,
    localTeamFoulsPercentile,
    localTeamPossessionPercentile,
    localTeamRecordsPercentile,
    visitorTeamShotsPercentile,
    visitorTeamFoulsPercentile,
    visitorTeamPossessionPercentile,
    visitorTeamRecordsPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        shots: localTeamShots,
        team: localTeam,
        fouls: localTeamFouls,
        possession: localTeamPossession,
        records: localTeamRecords,
      },
      visitorTeamStats: {
        shots: visitorTeamShots,
        team: visitorTeam,
        fouls: visitorTeamFouls,
        possession: visitorTeamPossession,
        records: visitorTeamRecords,
      },
      localTeamPercentile: {
        shots: localTeamShotsPercentile,
        fouls: localTeamFoulsPercentile,
        possession: localTeamPossessionPercentile,
        records: localTeamRecordsPercentile,
      },
      visitorTeamPercentile: {
        shots: visitorTeamShotsPercentile,
        fouls: visitorTeamFoulsPercentile,
        possession: visitorTeamPossessionPercentile,
        records: visitorTeamRecordsPercentile,
      },
    } = h2h;

    return {
      localTeamShots,
      localTeam,
      localTeamFouls,
      localTeamPossession,
      localTeamRecords,
      visitorTeamShots,
      visitorTeam,
      visitorTeamFouls,
      visitorTeamPossession,
      visitorTeamRecords,
      localTeamShotsPercentile,
      localTeamFoulsPercentile,
      localTeamPossessionPercentile,
      localTeamRecordsPercentile,
      visitorTeamShotsPercentile,
      visitorTeamFoulsPercentile,
      visitorTeamPossessionPercentile,
      visitorTeamRecordsPercentile,
    };
  }, shallowEqual);
  const teamsData = [
    { img: localTeam.logoPath, name: localTeam.name },
    {
      img: visitorTeam.logoPath,
      name: visitorTeam.name,
    },
    { name: "Average" },
  ];
  const teamShots = [
    {
      name: "Shots / Match",
      t1: localTeamShots.shotsAverage.total,
      t2: visitorTeamShots.shotsAverage.total,
      t1Color: localTeamShotsPercentile.shotsAverage.total,
      t2Color: visitorTeamShotsPercentile.shotsAverage.total,
      avg: calculateAvg(
        localTeamShots.shotsAverage.total,
        visitorTeamShots.shotsAverage.total,
        true
      ),
      avgColorColor: calculateAvg(
        localTeamShotsPercentile.shotsAverage.total,
        visitorTeamShotsPercentile.shotsAverage.total,
        true
      ),
    },
    {
      name: "Shots Conversion Rate",
      t1: localTeamShots.conversionRatePercentage.total + "%",
      t2: visitorTeamShots.conversionRatePercentage.total + "%",
      avg:
        calculateAvg(
          localTeamShots.conversionRatePercentage.total,
          visitorTeamShots.conversionRatePercentage.total
        ) + "%",
      t1Color: localTeamShotsPercentile.conversionRatePercentage.total,
      t2Color: visitorTeamShotsPercentile.conversionRatePercentage.total,
      avgColor:
        calculateAvg(
          localTeamShotsPercentile.conversionRatePercentage.total,
          visitorTeamShotsPercentile.conversionRatePercentage.total
        ) + "%",
    },
    {
      name: "Shots On Target / M",
      t1: localTeamShots.shotsOnTargetAverage.total,
      t2: visitorTeamShots.shotsOnTargetAverage.total,
      avg: calculateAvg(
        localTeamShots.shotsOnTargetAverage.total,
        visitorTeamShots.shotsOnTargetAverage.total,
        true
      ),
      t1Color: localTeamShotsPercentile.shotsOnTargetAverage.total,
      t2Color: visitorTeamShotsPercentile.shotsOnTargetAverage.total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.shotsOnTargetAverage.total,
        visitorTeamShotsPercentile.shotsOnTargetAverage.total,
        true
      ),
    },
    {
      name: "Shots Off Target / M",
      t1: localTeamShots.shotsOffTargetAverage.total,
      t2: visitorTeamShots.shotsOffTargetAverage.total,
      avg: calculateAvg(
        localTeamShots.shotsOffTargetAverage.total,
        visitorTeamShots.shotsOffTargetAverage.total,
        true
      ),
      t1Color: localTeamShotsPercentile.shotsOffTargetAverage.total,
      t2Color: visitorTeamShotsPercentile.shotsOffTargetAverage.total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.shotsOffTargetAverage.total,
        visitorTeamShotsPercentile.shotsOffTargetAverage.total,
        true
      ),
    },
    {
      name: "Shots Per Goal Scored",
      t1: localTeamShots.shotsPerGoal.total,
      t2: visitorTeamShots.shotsPerGoal.total,
      avg: calculateAvg(
        localTeamShots.shotsPerGoal.total,
        visitorTeamShots.shotsPerGoal.total,
        true
      ),
      t1Color: localTeamShotsPercentile.shotsPerGoal.total,
      t2Color: visitorTeamShotsPercentile.shotsPerGoal.total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.shotsPerGoal.total,
        visitorTeamShotsPercentile.shotsPerGoal.total,
        true
      ),
    },
    {
      name: "Team Shots Over 10.5",
      t1: localTeamShots.overForPercentage["10_5"].total + "%",
      t2: visitorTeamShots.overForPercentage["10_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overForPercentage["10_5"].total,
          visitorTeamShots.overForPercentage["10_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overForPercentage["10_5"].total,
      t2Color: visitorTeamShotsPercentile.overForPercentage["10_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overForPercentage["10_5"].total,
        visitorTeamShotsPercentile.overForPercentage["10_5"].total
      ),
    },
    {
      name: "Team Shots Over 11.5",
      t1: localTeamShots.overForPercentage["11_5"].total + "%",
      t2: visitorTeamShots.overForPercentage["11_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overForPercentage["11_5"].total,
          visitorTeamShots.overForPercentage["11_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overForPercentage["11_5"].total,
      t2Color: visitorTeamShots.overForPercentage["11_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overForPercentage["11_5"].total,
        visitorTeamShotsPercentile.overForPercentage["11_5"].total
      ),
    },
    {
      name: "Team Shots Over 12.5",
      t1: localTeamShots.overForPercentage["12_5"].total + "%",
      t2: visitorTeamShots.overForPercentage["12_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overForPercentage["12_5"].total,
          visitorTeamShots.overForPercentage["12_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overForPercentage["12_5"].total,
      t2Color: visitorTeamShotsPercentile.overForPercentage["12_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overForPercentage["12_5"].total,
        visitorTeamShotsPercentile.overForPercentage["12_5"].total
      ),
    },
    {
      name: "Team Shots Over 13.5",
      t1: localTeamShots.overForPercentage["13_5"].total + "%",
      t2: visitorTeamShots.overForPercentage["13_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overForPercentage["13_5"].total,
          visitorTeamShots.overForPercentage["13_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overForPercentage["13_5"].total,
      t2Color: visitorTeamShotsPercentile.overForPercentage["13_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overForPercentage["13_5"].total,
        visitorTeamShotsPercentile.overForPercentage["13_5"].total
      ),
    },
    {
      name: "Team Shots Over 14.5",
      t1: localTeamShots.overForPercentage["14_5"].total + "%",
      t2: visitorTeamShots.overForPercentage["14_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overForPercentage["14_5"].total,
          visitorTeamShots.overForPercentage["14_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overForPercentage["14_5"].total,
      t2Color: visitorTeamShotsPercentile.overForPercentage["14_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overForPercentage["14_5"].total,
        visitorTeamShotsPercentile.overForPercentage["14_5"].total
      ),
    },
    {
      name: "Team Shots Over 15.5",
      t1: localTeamShots.overForPercentage["15_5"].total + "%",
      t2: visitorTeamShots.overForPercentage["15_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overForPercentage["15_5"].total,
          visitorTeamShots.overForPercentage["15_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overForPercentage["15_5"].total,
      t2Color: visitorTeamShotsPercentile.overForPercentage["15_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overForPercentage["15_5"].total,
        visitorTeamShotsPercentile.overForPercentage["15_5"].total
      ),
    },
    {
      name: "Team Shots On Target 3.5+",
      t1: localTeamShots.overOnTargetForPercentage["3_5"].total + "%",
      t2: visitorTeamShots.overOnTargetForPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetForPercentage["3_5"].total,
          visitorTeamShots.overOnTargetForPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetForPercentage["3_5"].total,
      t2Color:
        visitorTeamShotsPercentile.overOnTargetForPercentage["3_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetForPercentage["3_5"].total,
        visitorTeamShotsPercentile.overOnTargetForPercentage["3_5"].total
      ),
    },
    {
      name: "Team Shots On Target 4.5+",
      t1: localTeamShots.overOnTargetForPercentage["4_5"].total + "%",
      t2: visitorTeamShots.overOnTargetForPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetForPercentage["4_5"].total,
          visitorTeamShots.overOnTargetForPercentage["4_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetForPercentage["4_5"].total,
      t2Color:
        visitorTeamShotsPercentile.overOnTargetForPercentage["4_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetForPercentage["4_5"].total,
        visitorTeamShotsPercentile.overOnTargetForPercentage["4_5"].total
      ),
    },
    {
      name: "Team Shots On Target 5.5+",
      t1: localTeamShots.overOnTargetForPercentage["5_5"].total + "%",
      t2: visitorTeamShots.overOnTargetForPercentage["5_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetForPercentage["5_5"].total,
          visitorTeamShots.overOnTargetForPercentage["5_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetForPercentage["5_5"].total,
      t2Color:
        visitorTeamShotsPercentile.overOnTargetForPercentage["5_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetForPercentage["5_5"].total,
        visitorTeamShotsPercentile.overOnTargetForPercentage["5_5"].total
      ),
    },
    {
      name: "Team Shots On Target 6.5+",
      t1: localTeamShots.overOnTargetForPercentage["6_5"].total + "%",
      t2: visitorTeamShots.overOnTargetForPercentage["6_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetForPercentage["6_5"].total,
          visitorTeamShots.overOnTargetForPercentage["6_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetForPercentage["6_5"].total,
      t2Color:
        visitorTeamShotsPercentile.overOnTargetForPercentage["6_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetForPercentage["6_5"].total,
        visitorTeamShotsPercentile.overOnTargetForPercentage["6_5"].total
      ),
    },
  ];

  // console.log();

  const matchShots = [
    {
      name: "Match Shots Over 23.5",
      t1: localTeamShots.overPercentage["23_5"].total + "%",
      t2: visitorTeamShots.overPercentage["23_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overPercentage["23_5"].total,
          visitorTeamShots.overPercentage["23_5"].total
        ) + "%",

      t1Color: localTeamShotsPercentile.overPercentage["23_5"].total,
      t2Color: visitorTeamShotsPercentile.overPercentage["23_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overPercentage["23_5"].total,
        visitorTeamShotsPercentile.overPercentage["23_5"].total
      ),
    },
    {
      name: "Match Shots Over 24.5",
      t1: localTeamShots.overPercentage["24_5"].total + "%",
      t2: visitorTeamShots.overPercentage["24_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overPercentage["24_5"].total,
          visitorTeamShots.overPercentage["24_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overPercentage["24_5"].total,
      t2Color: visitorTeamShotsPercentile.overPercentage["24_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overPercentage["24_5"].total,
        visitorTeamShotsPercentile.overPercentage["24_5"].total
      ),
    },
    {
      name: "Match Shots Over 25.5",
      t1: localTeamShots.overPercentage["25_5"].total + "%",
      t2: visitorTeamShots.overPercentage["25_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overPercentage["25_5"].total,
          visitorTeamShots.overPercentage["25_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overPercentage["25_5"].total,
      t2Color: visitorTeamShotsPercentile.overPercentage["25_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overPercentage["25_5"].total,
        visitorTeamShotsPercentile.overPercentage["25_5"].total
      ),
    },
    {
      name: "Match Shots Over 26.5",
      t1: localTeamShots.overPercentage["26_5"].total + "%",
      t2: visitorTeamShots.overPercentage["26_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overPercentage["26_5"].total,
          visitorTeamShots.overPercentage["26_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overPercentage["26_5"].total,
      t2Color: visitorTeamShotsPercentile.overPercentage["26_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overPercentage["26_5"].total,
        visitorTeamShotsPercentile.overPercentage["26_5"].total
      ),
    },
    {
      name: "Match Shots On Target Over 7.5",
      t1: localTeamShots.overOnTargetPercentage["7_5"].total + "%",
      t2: visitorTeamShots.overOnTargetPercentage["7_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetPercentage["7_5"].total,
          visitorTeamShots.overOnTargetPercentage["7_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetPercentage["7_5"].total,
      t2Color: visitorTeamShotsPercentile.overOnTargetPercentage["7_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetPercentage["7_5"].total,
        visitorTeamShotsPercentile.overOnTargetPercentage["7_5"].total
      ),
    },
    {
      name: "Match Shots On Target Over 8.5",
      t1: localTeamShots.overOnTargetPercentage["8_5"].total + "%",
      t2: visitorTeamShots.overOnTargetPercentage["8_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetPercentage["8_5"].total,
          visitorTeamShots.overOnTargetPercentage["8_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetPercentage["8_5"].total,
      t2Color: visitorTeamShotsPercentile.overOnTargetPercentage["8_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetPercentage["8_5"].total,
        visitorTeamShotsPercentile.overOnTargetPercentage["8_5"].total
      ),
    },
    {
      name: "Match Shots On Target Over 9.5",
      t1: localTeamShots.overOnTargetPercentage["9_5"].total + "%",
      t2: visitorTeamShots.overOnTargetPercentage["9_5"].total + "%",
      avg:
        calculateAvg(
          localTeamShots.overOnTargetPercentage["9_5"].total,
          visitorTeamShots.overOnTargetPercentage["9_5"].total
        ) + "%",
      t1Color: localTeamShotsPercentile.overOnTargetPercentage["9_5"].total,
      t2Color: visitorTeamShotsPercentile.overOnTargetPercentage["9_5"].total,
      avgColor: calculateAvg(
        localTeamShotsPercentile.overOnTargetPercentage["9_5"].total,
        visitorTeamShotsPercentile.overOnTargetPercentage["9_5"].total
      ),
    },
  ];

  const changeTab = (i) => {
    setActive(i);
  };
  return (
    <Grid item container className={classes.root}>
      <CompWrapper
        title="Shots"
        // noFlex={true}
        toolTipText={`${localTeam.name} and ${visitorTeam.name} Overall Match shots and team shots`}
        tooltip
        flex
        tabs={tabs}
        changeTab={changeTab}
      >
        <Grid
          item
          container
          className={classes.tableContainer}
          direction="column"
        >
          <CardTable
            data={active === 0 ? teamShots : matchShots}
            subTitle={active === 0 ? "Team Shots" : "Match shots"}
            // subTitleSize={5}
            // smallSubTitleSize={4}
            teamsData={teamsData}
            extended
            size={3}
            bigSize={6}
            minHeight="50px"
            rowPadding="0 2.8em"
            percentile
          />
        </Grid>
      </CompWrapper>
    </Grid>
  );
});
