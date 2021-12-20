import React from "react";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    flex: 1,
    padding: ({ isOdds }) => (isOdds ? "1em 2.5em 1em 0" : "1em 2.5em "),
    "& > div:nth-child(odd)": {
      background: ({ isOdds }) =>
        isOdds &&
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    "& > div:nth-child(1)": {
      background: "#F6F7FA",
      borderRadius: 8,
    },
  },
}));

const teamsData = [{ name: "odds" }, { name: "stats" }];
export const OddsMarketCard = React.memo(({ isOdds }) => {
  const classes = useStyles({ isOdds });
  const {
    localTeamOdds,
    overHalfValue,
    overHalfProbability,
    overOneAndHalfValue,
    overOneAndHalfProbability,
    overTwoAndHalfValue,
    overTwoAndHalfProbability,
    overThreeAndHalfValue,
    overThreeAndHalfProbability,
    overFourAndHalfValue,
    overFourAndHalfProbability,
    bttsValue,
    bttsProbability,
    localTeamOddsStats,
    visitorTeamOdds,
    visitorTeamOddsStats,
    localTeamStats,
    visitorTeamStats,
    drawValue,
    drawProbability,
  } = useSelector(({ h2h }) => {
    const {
      fixture: {
        odds: {
          wayResult: {
            1: { value: localTeamOdds, probability: localTeamOddsStats },
            2: { value: visitorTeamOdds, probability: visitorTeamOddsStats },
            X: { value: drawValue, probability: drawProbability },
          },
          over: {
            0.5: { value: overHalfValue, probability: overHalfProbability },
            1.5: {
              value: overOneAndHalfValue,
              probability: overOneAndHalfProbability,
            },
            2.5: {
              value: overTwoAndHalfValue,
              probability: overTwoAndHalfProbability,
            },
            3.5: {
              value: overThreeAndHalfValue,
              probability: overThreeAndHalfProbability,
            },
            4.5: {
              value: overFourAndHalfValue,
              probability: overFourAndHalfProbability,
            },
          },
          BTTS: {
            Yes: { value: bttsValue, probability: bttsProbability },
          },
        },
      },
      localTeamStats,
      visitorTeamStats,
    } = h2h;
    return {
      localTeamOdds,
      overHalfValue,
      overHalfProbability,
      overOneAndHalfValue,
      overOneAndHalfProbability,
      overTwoAndHalfValue,
      overTwoAndHalfProbability,
      overThreeAndHalfValue,
      overThreeAndHalfProbability,
      overFourAndHalfValue,
      overFourAndHalfProbability,
      bttsValue,
      bttsProbability,
      localTeamOddsStats,
      visitorTeamOdds,
      visitorTeamOddsStats,
      localTeamStats,
      visitorTeamStats,
      drawValue,
      drawProbability,
    };
  }, shallowEqual);
  // const data = [
  //   {
  //     name: localTeamStats.team.name,
  //     t1: "-",
  //     t2: "-",
  //     img: localTeamStats.team.logoPath,
  //   },
  //   {
  //     name: visitorTeamStats.team.name,
  //     t1: "-",
  //     t2: "-",
  //     img: visitorTeamStats.team.logoPath,
  //   },
  //   { name: "Draw", t1: "-", t2: "-" },
  //   { name: "Over 0.5", t1: "-", t2: "-" },
  //   { name: "Over 1.5", t1: "-", t2: "-" },
  //   { name: "Over 2.5", t1: "-", t2: "-" },
  //   { name: "Over 3.5", t1: "-", t2: "-" },
  //   { name: "Over 4.5", t1: "-", t2: "-" },
  //   { name: "BTTS", t1: "-", t2: "-" },
  // ];

  const data = [
    {
      name: localTeamStats.team.name,
      t1: localTeamOdds ?? "-",
      t2: localTeamOddsStats ?? "-",
      img: localTeamStats.team.logoPath,
    },
    {
      name: visitorTeamStats.team.name,
      t1: visitorTeamOdds ?? "-",
      t2: visitorTeamOddsStats ?? "-",
      img: visitorTeamStats.team.logoPath,
    },
    { name: "Draw", t1: drawValue ?? "-", t2: drawProbability ?? "-" },
    {
      name: "Over 0.5",
      t1: overHalfValue ?? "-",
      t2: overHalfProbability ?? "-",
    },
    {
      name: "Over 1.5",
      t1: overOneAndHalfValue ?? "-",
      t2: overOneAndHalfProbability ?? "-",
    },
    {
      name: "Over 2.5",
      t1: overTwoAndHalfValue ?? "-",
      t2: overTwoAndHalfProbability ?? "-",
    },
    {
      name: "Over 3.5",
      t1: overThreeAndHalfValue ?? "-",
      t2: overThreeAndHalfProbability ?? "-",
    },
    {
      name: "Over 4.5",
      t1: overFourAndHalfValue ?? "-",
      t2: overFourAndHalfProbability ?? "-",
    },
    { name: "BTTS", t1: bttsValue ?? "-", t2: bttsProbability ?? "-" },
  ];
  return (
    <CompWrapper title="Odds Market" flex={1} tooltip>
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        className={classes.root}
      >
        <CardTable
          subTitle="market"
          teamsData={teamsData}
          data={data}
          firstCellFontColor={isOdds ? "#022A54" : "#022A54"}
          isOdds={isOdds}
          minHeight={isOdds && "6rem"}
          rowPadding={isOdds && "2rem 5rem 1.9rem 2.8rem"}
          // bigSize={isOdds && 3}
          size={isOdds && 5}
          firstColumnSize={isOdds && 2}
          // subTitleSize={isOdds && 7}
          // smallSubTitleSize={4}
        />
      </Grid>
    </CompWrapper>
  );
});
