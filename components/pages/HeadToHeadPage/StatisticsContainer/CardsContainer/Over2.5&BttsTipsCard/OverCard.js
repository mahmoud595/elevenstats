import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTabs } from "../CardTabs/CardTabs";
import { CardTable } from "../CardTable/CardTable";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    flex: 1,
    padding: "1.8vh 2rem",
  },
  tableContainer: {
    padding: "0.9vh 0 2rem 0",
    // height: 390,
    flex: 1,
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
  { name: "Over x goals", xs: 4, index: 0 },
  { name: "1st half/ 2nd half", xs: 4, index: 2 },
  { name: "Under x goals", xs: 4, index: 1 },
];

export const OverCard = React.memo(() => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const {
    localName,
    localLogo,
    visitorName,
    visitorLogo,
    localGoals,
    visitorGoals,
    localBtts,
    visitorBtts,
    localGoalsPercentile,
    localBttsPercentile,
    visitorGoalsPercentile,
    visitorBttsPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localName, logoPath: localLogo },
        goals: localGoals,
        BTTS: localBtts,
      },
      visitorTeamStats: {
        team: { name: visitorName, logoPath: visitorLogo },
        goals: visitorGoals,
        BTTS: visitorBtts,
      },
      localTeamPercentile: {
        goals: localGoalsPercentile,
        BTTS: localBttsPercentile,
      },
      visitorTeamPercentile: {
        goals: visitorGoalsPercentile,
        BTTS: visitorBttsPercentile,
      },
    } = h2h;
    return {
      localName,
      localLogo,
      visitorName,
      visitorLogo,
      localGoals,
      visitorGoals,
      localBtts,
      visitorBtts,
      localGoalsPercentile,
      localBttsPercentile,
      visitorGoalsPercentile,
      visitorBttsPercentile,
    };
  }, shallowEqual);
  const teamsData = [
    { name: localName, img: localLogo },
    {
      name: visitorName,
      img: visitorLogo,
    },
    { name: "Average" },
  ];
  const overData = [
    {
      name: "Over 0.5",
      t1: localGoals.overPercentage["0_5"].total + "%",
      t2: visitorGoals.overPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overPercentage["0_5"].total,
          visitorGoals.overPercentage["0_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overPercentage["0_5"].total,
      t2Color: visitorGoalsPercentile.overPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overPercentage["0_5"].total,
          visitorGoalsPercentile.overPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "Over 1.5",
      t1: localGoals.overPercentage["1_5"].total + "%",
      t2: visitorGoals.overPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overPercentage["1_5"].total,
          visitorGoals.overPercentage["1_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.overPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overPercentage["1_5"].total,
          visitorGoalsPercentile.overPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "Over 2.5",
      t1: localGoals.overPercentage["2_5"].total + "%",
      t2: visitorGoals.overPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overPercentage["2_5"].total,
          visitorGoals.overPercentage["2_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overPercentage["2_5"].total,
      t2Color: visitorGoalsPercentile.overPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overPercentage["2_5"].total,
          visitorGoalsPercentile.overPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5",
      t1: localGoals.overPercentage["3_5"].total + "%",
      t2: visitorGoals.overPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overPercentage["3_5"].total,
          visitorGoals.overPercentage["3_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overPercentage["3_5"].total,
      t2Color: visitorGoalsPercentile.overPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overPercentage["3_5"].total,
          visitorGoalsPercentile.overPercentage["3_5"].total
        ) + "%",
    },
    {
      name: "Over 4.5",
      t1: localGoals.overPercentage["4_5"].total + "%",
      t2: visitorGoals.overPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overPercentage["4_5"].total,
          visitorGoals.overPercentage["4_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overPercentage["4_5"].total,
      t2Color: visitorGoalsPercentile.overPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overPercentage["4_5"].total,
          visitorGoalsPercentile.overPercentage["4_5"].total
        ) + "%",
    },
    {
      name: "BTTS",
      t1: localBtts.BTTSPercentage.total + "%",
      t2: visitorBtts.BTTSPercentage.total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSPercentage.total,
          visitorBtts.BTTSPercentage.total
        ) + "%",
      t1Color: localBttsPercentile.BTTSPercentage.total,
      t2Color: visitorBttsPercentile.BTTSPercentage.total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSPercentage.total,
          visitorBttsPercentile.BTTSPercentage.total
        ) + "%",
    },

    {
      name: "BTTS & Win",
      t1: localBtts.BTTSAndWinPercentage.total + "%",
      t2: visitorBtts.BTTSAndWinPercentage.total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSAndWinPercentage.total,
          visitorBtts.BTTSAndWinPercentage.total
        ) + "%",
      t1Color: localBttsPercentile.BTTSAndWinPercentage.total,
      t2Color: visitorBttsPercentile.BTTSAndWinPercentage.total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSAndWinPercentage.total,
          visitorBttsPercentile.BTTSAndWinPercentage.total
        ) + "%",
    },
    {
      name: "BTTS & Draw",
      t1: localBtts.BTTSAndDrawPercentage.total + "%",
      t2: visitorBtts.BTTSAndDrawPercentage.total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSAndDrawPercentage.total,
          visitorBtts.BTTSAndDrawPercentage.total
        ) + "%",
      t1Color: localBttsPercentile.BTTSAndDrawPercentage.total,
      t2Color: visitorBttsPercentile.BTTSAndDrawPercentage.total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSAndDrawPercentage.total,
          visitorBttsPercentile.BTTSAndDrawPercentage.total
        ) + "%",
    },
    {
      name: "BTTS & Over 2.5",
      t1: localBtts.BTTSAndOverPercentage["2_5"].total + "%",
      t2: visitorBtts.BTTSAndOverPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSAndOverPercentage["2_5"].total,
          visitorBtts.BTTSAndOverPercentage["2_5"].total
        ) + "%",
      t1Color: localBttsPercentile.BTTSAndOverPercentage["2_5"].total,
      t2Color: visitorBttsPercentile.BTTSAndOverPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSAndOverPercentage["2_5"].total,
          visitorBttsPercentile.BTTSAndOverPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "BTTS No & Over 2.5",
      t1: localBtts.BTTSNoAndOverPercentage["2_5"].total + "%",
      t2: visitorBtts.BTTSNoAndOverPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSNoAndOverPercentage["2_5"].total,
          visitorBtts.BTTSNoAndOverPercentage["2_5"].total
        ) + "%",
      t1Color: localBttsPercentile.BTTSNoAndOverPercentage["2_5"].total,
      t2Color: visitorBttsPercentile.BTTSNoAndOverPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSNoAndOverPercentage["2_5"].total,
          visitorBttsPercentile.BTTSNoAndOverPercentage["2_5"].total
        ) + "%",
    },
  ];

  const underData1 = [
    {
      name: "under 0.5",
      t1: localGoals.underPercentage["0_5"].total + "%",
      t2: visitorGoals.underPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underPercentage["0_5"].total,
          visitorGoals.underPercentage["0_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underPercentage["0_5"].total,
      t2Color: visitorGoalsPercentile.underPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underPercentage["0_5"].total,
          visitorGoalsPercentile.underPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "under 1.5",
      t1: localGoals.underPercentage["1_5"].total + "%",
      t2: visitorGoals.underPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underPercentage["1_5"].total,
          visitorGoals.underPercentage["1_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.underPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underPercentage["1_5"].total,
          visitorGoalsPercentile.underPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "under 2.5",
      t1: localGoals.underPercentage["2_5"].total + "%",
      t2: visitorGoals.underPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underPercentage["2_5"].total,
          visitorGoals.underPercentage["2_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underPercentage["2_5"].total,
      t2Color: visitorGoalsPercentile.underPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underPercentage["2_5"].total,
          visitorGoalsPercentile.underPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "under 3.5",
      t1: localGoals.underPercentage["3_5"].total + "%",
      t2: visitorGoals.underPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underPercentage["3_5"].total,
          visitorGoals.underPercentage["3_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underPercentage["3_5"].total,
      t2Color: visitorGoalsPercentile.underPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underPercentage["3_5"].total,
          visitorGoalsPercentile.underPercentage["3_5"].total
        ) + "%",
    },
    {
      name: "under 4.5",
      t1: localGoals.underPercentage["4_5"].total + "%",
      t2: visitorGoals.underPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underPercentage["4_5"].total,
          visitorGoals.underPercentage["4_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underPercentage["4_5"].total,
      t2Color: visitorGoalsPercentile.underPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underPercentage["4_5"].total,
          visitorGoalsPercentile.underPercentage["4_5"].total
        ) + "%",
    },
  ];
  const underData2 = [
    {
      name: "Under 0.5 FH",
      t1: localGoals.underHTPercentage["0_5"].total + "%",
      t2: visitorGoals.underHTPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underHTPercentage["0_5"].total,
          visitorGoals.underHTPercentage["0_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underHTPercentage["0_5"].total,
      t2Color: visitorGoalsPercentile.underHTPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underHTPercentage["0_5"].total,
          visitorGoalsPercentile.underHTPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "Under 1.5 FH",
      t1: localGoals.underHTPercentage["1_5"].total + "%",
      t2: visitorGoals.underHTPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underHTPercentage["1_5"].total,
          visitorGoals.underHTPercentage["1_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underHTPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.underHTPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underHTPercentage["1_5"].total,
          visitorGoalsPercentile.underHTPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "Under 2.5 FH",
      t1: localGoals.underHTPercentage["2_5"].total + "%",
      t2: visitorGoals.underHTPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.underHTPercentage["2_5"].total,
          visitorGoals.underHTPercentage["2_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.underHTPercentage["2_5"].total,
      t2Color: visitorGoalsPercentile.underHTPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.underHTPercentage["2_5"].total,
          visitorGoalsPercentile.underHTPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Under 0.5 2H",
      t1: localGoals.under2HTPercentage["0_5"].total + "%",
      t2: visitorGoals.under2HTPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.under2HTPercentage["0_5"].total,
          visitorGoals.under2HTPercentage["0_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.under2HTPercentage["0_5"].total,
      t2Color: visitorGoalsPercentile.under2HTPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.under2HTPercentage["0_5"].total,
          visitorGoalsPercentile.under2HTPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "Under 1.5 2H",
      t1: localGoals.under2HTPercentage["1_5"].total + "%",
      t2: visitorGoals.under2HTPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.under2HTPercentage["1_5"].total,
          visitorGoals.under2HTPercentage["1_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.under2HTPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.under2HTPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.under2HTPercentage["1_5"].total,
          visitorGoalsPercentile.under2HTPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "Under 2.5 2H",
      t1: localGoals.under2HTPercentage["2_5"].total + "%",
      t2: visitorGoals.under2HTPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.under2HTPercentage["2_5"].total,
          visitorGoals.under2HTPercentage["2_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.under2HTPercentage["2_5"].total,
      t2Color: visitorGoalsPercentile.under2HTPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.under2HTPercentage["2_5"].total,
          visitorGoalsPercentile.under2HTPercentage["2_5"].total
        ) + "%",
    },
  ];
  const firstHalf = [
    {
      name: "BTTS First Half",
      t1: localBtts.BTTSHTPercentage.total + "%",
      t2: visitorBtts.BTTSHTPercentage.total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSHTPercentage.total,
          visitorBtts.BTTSHTPercentage.total
        ) + "%",
      t1Color: localBttsPercentile.BTTSHTPercentage.total,
      t2Color: visitorBttsPercentile.BTTSHTPercentage.total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSHTPercentage.total,
          visitorBttsPercentile.BTTSHTPercentage.total
        ) + "%",
    },
    {
      name: "Over 0.5 FH",
      t1: localGoals.overHTPercentage["0_5"].total + "%",
      t2: visitorGoals.overHTPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overHTPercentage["0_5"].total,
          visitorGoals.overHTPercentage["0_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overHTPercentage["0_5"].total,
      t2Color: visitorGoalsPercentile.overHTPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overHTPercentage["0_5"].total,
          visitorGoalsPercentile.overHTPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "Over 1.5 FH",
      t1: localGoals.overHTPercentage["1_5"].total + "%",
      t2: visitorGoals.overHTPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overHTPercentage["1_5"].total,
          visitorGoals.overHTPercentage["1_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overHTPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.overHTPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overHTPercentage["1_5"].total,
          visitorGoalsPercentile.overHTPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "Over 2.5 FH",
      t1: localGoals.overHTPercentage["1_5"].total + "%",
      t2: visitorGoals.overHTPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.overHTPercentage["2_5"].total,
          visitorGoals.overHTPercentage["2_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.overHTPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.overHTPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.overHTPercentage["2_5"].total,
          visitorGoalsPercentile.overHTPercentage["2_5"].total
        ) + "%",
    },
  ];

  const secondHalf = [
    {
      name: "BTTS 2nd Half",
      t1: localBtts.BTTS2HTPercentage.total + "%",
      t2: visitorBtts.BTTS2HTPercentage.total + "%",
      avg:
        calculateAvg(
          localBtts.BTTS2HTPercentage.total,
          visitorBtts.BTTS2HTPercentage.total
        ) + "%",
      t1Color: localBttsPercentile.BTTS2HTPercentage.total,
      t2Color: visitorBttsPercentile.BTTS2HTPercentage.total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTS2HTPercentage.total,
          visitorBttsPercentile.BTTS2HTPercentage.total
        ) + "%",
    },
    {
      name: "BTTS Both Halves",
      t1: localBtts.BTTSBothHalvesPercentage.total + "%",
      t2: visitorBtts.BTTSBothHalvesPercentage.total + "%",
      avg:
        calculateAvg(
          localBtts.BTTSBothHalvesPercentage.total,
          visitorBtts.BTTSBothHalvesPercentage.total
        ) + "%",
      t1Color: localBttsPercentile.BTTSBothHalvesPercentage.total,
      t2Color: visitorBttsPercentile.BTTSBothHalvesPercentage.total,
      avgColor:
        calculateAvg(
          localBttsPercentile.BTTSBothHalvesPercentage.total,
          visitorBttsPercentile.BTTSBothHalvesPercentage.total
        ) + "%",
    },
    {
      name: "Over 0.5 FH",
      t1: localGoals.over2HTPercentage["0_5"].total + "%",
      t2: visitorGoals.over2HTPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.over2HTPercentage["0_5"].total,
          visitorGoals.over2HTPercentage["0_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.over2HTPercentage["0_5"].total,
      t2Color: visitorGoalsPercentile.over2HTPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.over2HTPercentage["0_5"].total,
          visitorGoalsPercentile.over2HTPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "Over 1.5 FH",
      t1: localGoals.over2HTPercentage["1_5"].total + "%",
      t2: visitorGoals.over2HTPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.over2HTPercentage["1_5"].total,
          visitorGoals.over2HTPercentage["1_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.over2HTPercentage["1_5"].total,
      t2Color: visitorGoalsPercentile.over2HTPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.over2HTPercentage["1_5"].total,
          visitorGoalsPercentile.over2HTPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "Over 2.5 FH",
      t1: localGoals.over2HTPercentage["2_5"].total + "%",
      t2: visitorGoals.over2HTPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localGoals.over2HTPercentage["2_5"].total,
          visitorGoals.over2HTPercentage["2_5"].total
        ) + "%",
      t1Color: localGoalsPercentile.over2HTPercentage["2_5"].total,
      t2Color: visitorGoalsPercentile.over2HTPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localGoalsPercentile.over2HTPercentage["2_5"].total,
          visitorGoalsPercentile.over2HTPercentage["2_5"].total
        ) + "%",
    },
  ];

  const changeTab = (i) => {
    setActive(i);
  };
  return (
    <CompWrapper
      title={
        active === 0
          ? "Over 2.5 & BTTS Tips"
          : active === 1
          ? "UNDER 2.5 & BTTS Tips"
          : "1st half/ 2nd half"
      }
      tooltip
      tabs={tabs}
      changeTab={changeTab}
    >
      <Grid item container className={classes.tableContainer}>
        {active === 0 ? (
          <CardTable
            data={overData}
            subTitle="Match goals"
            teamsData={teamsData}
            extended
            rowPadding="1.2em 2.8em"
            percentile
            // subTitleSize={6}
          />
        ) : (
          <>
            <CardTable
              data={active === 1 ? underData1 : firstHalf}
              subTitle={active === 1 ? "Under X Goals" : "First Half Goals"}
              teamsData={teamsData}
              extended
              rowPadding="1.2em 2.8em"
              // subTitleSize={6}
              percentile
            />
            <CardTable
              data={active === 1 ? underData2 : secondHalf}
              subTitle={active === 1 ? "First/Second Half" : "2nd Half Goals"}
              teamsData={teamsData}
              extended
              rowPadding="1.2em 2.8em"
              // subTitleSize={6}
              percentile
            />
          </>
        )}
      </Grid>
    </CompWrapper>
  );
});
