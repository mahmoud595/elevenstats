import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { CardTabs } from "../CardTabs/CardTabs";
// import { BottomUpgradeContainer } from '../BottomUpgradeContainer/BottomUpgradeContainer';
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    flex: 1,
    padding: "10px 2em 17px 2em",
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
  { name: "Match Corners", xs: 6, index: 0 },
  { name: "1st half/ 2nd half", xs: 6, index: 1 },
];
// const tableData = [
//   { name: "Over 6", t1: "-", t2: "-" },
//   { name: "Over 7", t1: "-", t2: "-" },
//   { name: "Over 8", t1: "-", t2: "-" },
//   { name: "Over 9", t1: "-", t2: "-" },
//   { name: "Over 10", t1: "-", t2: "-" },
//   { name: "Over 11", t1: "-", t2: "-" },
//   { name: "Over 12", t1: "-", t2: "-" },
//   { name: "Over 13", t1: "-", t2: "-" },
// ];

export const NumberOfCornersCard = React.memo(() => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const {
    localTeamStats,
    visitorTeamStats,
    localTeamPercentile,
    visitorTeamPercentile,
  } = useSelector((state) => state.h2h);
  const teamsData = [
    {
      img: localTeamStats.team.logoPath,
      name: localTeamStats.team.name,
    },

    {
      img: visitorTeamStats.team.logoPath,
      name: visitorTeamStats.team.name,
    },
    { name: "Average" },
  ];

  const tableData = [
    {
      name: "Over 6",
      t1: localTeamStats.corners.overPercentage["6_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["6_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["6_5"].total,
          visitorTeamStats.corners.overPercentage["6_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["6_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["6_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["6_5"].total,
          visitorTeamPercentile.corners.overPercentage["6_5"].total
        ) + "%",
    },
    {
      name: "Over 7",
      t1: localTeamStats.corners.overPercentage["7_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["7_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["7_5"].total,
          visitorTeamStats.corners.overPercentage["7_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["7_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["7_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["7_5"].total,
          visitorTeamPercentile.corners.overPercentage["7_5"].total
        ) + "%",
    },
    {
      name: "Over 8",
      t1: localTeamStats.corners.overPercentage["8_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["8_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["8_5"].total,
          visitorTeamStats.corners.overPercentage["8_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["8_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["8_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["8_5"].total,
          visitorTeamPercentile.corners.overPercentage["8_5"].total
        ) + "%",
    },
    {
      name: "Over 9",
      t1: localTeamStats.corners.overPercentage["9_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["9_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["9_5"].total,
          visitorTeamStats.corners.overPercentage["9_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["9_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["9_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["9_5"].total,
          visitorTeamPercentile.corners.overPercentage["9_5"].total
        ) + "%",
    },
    {
      name: "Over 10",
      t1: localTeamStats.corners.overPercentage["10_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["10_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["10_5"].total,
          visitorTeamStats.corners.overPercentage["10_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["10_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["10_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["10_5"].total,
          visitorTeamPercentile.corners.overPercentage["10_5"].total
        ) + "%",
    },
    {
      name: "Over 11",
      t1: localTeamStats.corners.overPercentage["11_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["11_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["11_5"].total,
          visitorTeamStats.corners.overPercentage["11_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["11_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["11_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["11_5"].total,
          visitorTeamPercentile.corners.overPercentage["11_5"].total
        ) + "%",
    },
    {
      name: "Over 12",
      t1: localTeamStats.corners.overPercentage["12_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["12_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["12_5"].total,
          visitorTeamStats.corners.overPercentage["12_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["12_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["12_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["12_5"].total,
          visitorTeamPercentile.corners.overPercentage["12_5"].total
        ) + "%",
    },
    {
      name: "Over 13",
      t1: localTeamStats.corners.overPercentage["13_5"].total + "%",
      t2: visitorTeamStats.corners.overPercentage["13_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overPercentage["13_5"].total,
          visitorTeamStats.corners.overPercentage["13_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overPercentage["13_5"].total,
      t2Color: visitorTeamPercentile.corners.overPercentage["13_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overPercentage["13_5"].total,
          visitorTeamPercentile.corners.overPercentage["13_5"].total
        ) + "%",
    },
  ];
  console.log(tableData);
  const fisrtHalf = [
    {
      name: "FH Average",
      t1: localTeamStats.corners.cornersHTAverage.total,
      t2: visitorTeamStats.corners.cornersHTAverage.total,
      avg: calculateAvg(
        localTeamStats.corners.cornersHTAverage.total,
        visitorTeamStats.corners.cornersHTAverage.total
      ),
      t1Color: localTeamPercentile.corners.cornersHTAverage.total,
      t2Color: visitorTeamPercentile.corners.cornersHTAverage.total,
      avgColor: calculateAvg(
        localTeamPercentile.corners.cornersHTAverage.total,
        visitorTeamPercentile.corners.cornersHTAverage.total
      ),
    },
    {
      name: "Over 4",
      t1: localTeamStats.corners.overHTPercentage["4_5"].total + "%",
      t2: visitorTeamStats.corners.overHTPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overHTPercentage["4_5"].total,
          visitorTeamStats.corners.overHTPercentage["4_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overHTPercentage["4_5"].total,
      t2Color: visitorTeamPercentile.corners.overHTPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overHTPercentage["4_5"].total,
          visitorTeamPercentile.corners.overHTPercentage["4_5"].total
        ) + "%",
    },
    {
      name: "Over 5",
      t1: localTeamStats.corners.overHTPercentage["5_5"].total + "%",
      t2: visitorTeamStats.corners.overHTPercentage["5_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overHTPercentage["5_5"].total,
          visitorTeamStats.corners.overHTPercentage["5_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overHTPercentage["5_5"].total,
      t2Color: visitorTeamPercentile.corners.overHTPercentage["5_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overHTPercentage["5_5"].total,
          visitorTeamPercentile.corners.overHTPercentage["5_5"].total
        ) + "%",
    },
    {
      name: "Over 6",
      t1: localTeamStats.corners.overHTPercentage["6_5"].total + "%",
      t2: visitorTeamStats.corners.overHTPercentage["6_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.overHTPercentage["6_5"].total,
          visitorTeamStats.corners.overHTPercentage["6_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.overHTPercentage["6_5"].total,
      t2Color: visitorTeamPercentile.corners.overHTPercentage["6_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.overHTPercentage["6_5"].total,
          visitorTeamPercentile.corners.overHTPercentage["6_5"].total
        ) + "%",
    },
  ];

  const secondHalf = [
    {
      name: "2H Average",
      t1: localTeamStats.corners.corners2HTAverage.total,
      t2: visitorTeamStats.corners.corners2HTAverage.total,
      avg: calculateAvg(
        localTeamStats.corners.corners2HTAverage.total,
        visitorTeamStats.corners.corners2HTAverage.total
      ),
      t1Color: localTeamPercentile.corners.corners2HTAverage.total,
      t2Color: visitorTeamPercentile.corners.corners2HTAverage.total,
      avgColor: calculateAvg(
        localTeamPercentile.corners.corners2HTAverage.total,
        visitorTeamPercentile.corners.corners2HTAverage.total
      ),
    },

    {
      name: "Over 4",
      t1: localTeamStats.corners.over2HTPercentage["4_5"].total + "%",
      t2: visitorTeamStats.corners.over2HTPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.over2HTPercentage["4_5"].total,
          visitorTeamStats.corners.over2HTPercentage["4_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.over2HTPercentage["4_5"].total,
      t2Color: visitorTeamPercentile.corners.over2HTPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.over2HTPercentage["4_5"].total,
          visitorTeamPercentile.corners.over2HTPercentage["4_5"].total
        ) + "%",
    },
    {
      name: "Over 5",
      t1: localTeamStats.corners.over2HTPercentage["5_5"].total + "%",
      t2: visitorTeamStats.corners.over2HTPercentage["5_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.over2HTPercentage["5_5"].total,
          visitorTeamStats.corners.over2HTPercentage["5_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.over2HTPercentage["5_5"].total,
      t2Color: visitorTeamPercentile.corners.over2HTPercentage["5_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.over2HTPercentage["5_5"].total,
          visitorTeamPercentile.corners.over2HTPercentage["5_5"].total
        ) + "%",
    },
    {
      name: "Over 6",
      t1: localTeamStats.corners.over2HTPercentage["6_5"].total + "%",
      t2: visitorTeamStats.corners.over2HTPercentage["6_5"].total + "%",
      avg:
        calculateAvg(
          localTeamStats.corners.over2HTPercentage["6_5"].total,
          visitorTeamStats.corners.over2HTPercentage["6_5"].total
        ) + "%",
      t1Color: localTeamPercentile.corners.over2HTPercentage["6_5"].total,
      t2Color: visitorTeamPercentile.corners.over2HTPercentage["6_5"].total,
      avgColor:
        calculateAvg(
          localTeamPercentile.corners.over2HTPercentage["6_5"].total,
          visitorTeamPercentile.corners.over2HTPercentage["6_5"].total
        ) + "%",
    },
  ];
  console.log(fisrtHalf, secondHalf);
  const changeTab = (i) => {
    setActive(i);
  };
  return (
    <CompWrapper
      title="Number of Corners"
      tooltip
      tabs={tabs}
      changeTab={changeTab}
    >
      <Grid item container className={classes.tableContainer}>
        {active === 0 ? (
          <CardTable
            data={tableData}
            subTitle="Match Corners"
            teamsData={teamsData}
            extended
            percentile
            // subTitleSize={9}
            // smallSubTitleSize={8}
            // locked
            // minHeight="6em"
          />
        ) : (
          <>
            <CardTable
              data={fisrtHalf}
              subTitle="First Half"
              teamsData={teamsData}
              extended
              percentile
              // smallSubTitleSize={8}
              // locked
              // minHeight="6em"
            />
            <CardTable
              data={secondHalf}
              subTitle="Second Half"
              teamsData={teamsData}
              extended
              percentile
              // smallSubTitleSize={8}
              // locked
              // minHeight="6em"
            />
          </>
        )}
      </Grid>

      {/* <Grid item container>
        <BottomUpgradeContainer
          text="Average Corner Kicks Per Match Between Liverpool F.C And Manchester
          United F.C."
          padding="3.7em 4.5em 3.8em 2.9em"
        />
      </Grid> */}
    </CompWrapper>
  );
});
