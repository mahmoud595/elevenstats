import React, { useState, memo, useMemo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTabs } from "../CardTabs/CardTabs";
import { CardTable } from "../CardTable/CardTable";
// import { BottomUpgradeContainer } from "../BottomUpgradeContainer/BottomUpgradeContainer";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { BottomPremiumContainer } from "../BottomPremiumContainer/BottomPremiumContainer";
import { UpgradeToPremium } from "./UpgradeToPremium/UpgradeToPremium";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
const tabs = [
  { name: "TOTAL CARDS", xs: 6, index: 0 },
  { name: "TEAM CARDS", xs: 6, index: 1 },
];

const useStyles = makeStyles(({ palette }) => ({
  tableContainer: {
    padding: "0.9vh  0",
    // height: "180px",
    "& > div:nth-child(odd)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    "& > div:nth-child(1)": {
      background: "transparent",
    },
    // boxShadow: '0 -2px 10px rgba(0, 0, 0, .16)',
  },
  // boxShadow: {
  //   boxShadow: " 0px 3px 16px rgba(2, 42, 84, 0.1)",
  // },
  oneTable: {
    padding: "1.8em 2em",
    "& > div:nth-child(odd)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    "& > div:nth-child(1)": {
      background: "#F6F7FA",
      borderRadius: 8,
    },
    // height: "33.3vh",
    // boxShadow: '0 -2px 10px rgba(0, 0, 0, .16)',
  },
}));
const premium = false;
export const NumberCardsContainer = () => {
  const [tab, setTab] = useState(0);
  const classes = useStyles();
  const {
    localTeamName,
    localTeamLogo,
    visitorTeamName,
    visitorTeamLogo,
    visitorTeamCards,
    localTeamCards,
    localTeamCardsPercentile,
    visitorTeamCardsPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localTeamName, logoPath: localTeamLogo },
        cards: localTeamCards,
      },
      visitorTeamStats: {
        team: { name: visitorTeamName, logoPath: visitorTeamLogo },
        cards: visitorTeamCards,
      },
      localTeamPercentile: { cards: localTeamCardsPercentile },
      visitorTeamPercentile: { cards: visitorTeamCardsPercentile },
    } = h2h;
    return {
      localTeamName,
      localTeamLogo,
      visitorTeamName,
      visitorTeamLogo,
      visitorTeamCards,
      localTeamCards,
      localTeamCardsPercentile,
      visitorTeamCardsPercentile,
    };
  }, shallowEqual);
  const changeTab = (i) => {
    setTab(i);
  };
  const teamsData = [
    { name: localTeamName, img: localTeamLogo },
    {
      name: visitorTeamName,
      img: visitorTeamLogo,
    },
    { name: "Average" },
  ];

  const teamDataCards = [
    {
      name: "CARDS FOR AVERAGE",
      t1: localTeamCards.cardsForAverage.total,
      t2: visitorTeamCards.cardsForAverage.total,
      avg: calculateAvg(
        localTeamCards.cardsForAverage.total,
        visitorTeamCards.cardsForAverage.total
      ),

      t1Color: localTeamCardsPercentile.cardsForAverage.total,
      t2Color: visitorTeamCardsPercentile.cardsForAverage.total,
      avgColor: calculateAvg(
        localTeamCardsPercentile.cardsForAverage.total,
        visitorTeamCardsPercentile.cardsForAverage.total
      ),
    },
    {
      name: "Over 0.5 FOR",
      t1: localTeamCards.overForPercentage["0_5"].total + "%",
      t2: visitorTeamCards.overForPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overForPercentage["0_5"].total,
          visitorTeamCards.overForPercentage["0_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overForPercentage["0_5"].total,
      t2Color: visitorTeamCardsPercentile.overForPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overForPercentage["0_5"].total,
          visitorTeamCardsPercentile.overForPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "Over 1.5 FOR",
      t1: localTeamCards.overForPercentage["1_5"].total + "%",
      t2: visitorTeamCards.overForPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overForPercentage["1_5"].total,
          visitorTeamCards.overForPercentage["1_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overForPercentage["1_5"].total,
      t2Color: visitorTeamCardsPercentile.overForPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overForPercentage["1_5"].total,
          visitorTeamCardsPercentile.overForPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "Over 2.5 FOR",
      t1: localTeamCards.overForPercentage["2_5"].total + "%",
      t2: visitorTeamCards.overForPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overForPercentage["2_5"].total,
          visitorTeamCards.overForPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overForPercentage["2_5"].total,
      t2Color: visitorTeamCardsPercentile.overForPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overForPercentage["2_5"].total,
          visitorTeamCardsPercentile.overForPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5 FOR",
      t1: localTeamCards.overForPercentage["3_5"].total + "%",
      t2: visitorTeamCards.overForPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overForPercentage["3_5"].total,
          visitorTeamCards.overForPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overForPercentage["3_5"].total,
      t2Color: visitorTeamCardsPercentile.overForPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overForPercentage["3_5"].total,
          visitorTeamCardsPercentile.overForPercentage["3_5"].total
        ) + "%",
    },
  ];

  const totalData = [
    {
      name: "Over 2.5 ",
      t1: localTeamCards.overPercentage["2_5"].total + "%",
      t2: visitorTeamCards.overPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overPercentage["2_5"].total,
          visitorTeamCards.overPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overPercentage["2_5"].total,
      t2Color: visitorTeamCardsPercentile.overPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overPercentage["2_5"].total,
          visitorTeamCardsPercentile.overPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5",
      t1: localTeamCards.overPercentage["3_5"].total + "%",
      t2: visitorTeamCards.overPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overPercentage["3_5"].total,
          visitorTeamCards.overPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overPercentage["3_5"].total,
      t2Color: visitorTeamCardsPercentile.overPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overPercentage["3_5"].total,
          visitorTeamCardsPercentile.overPercentage["3_5"].total
        ) + "%",
    },
    {
      name: "Over 4.5",
      t1: localTeamCards.overPercentage["4_5"].total + "%",
      t2: visitorTeamCards.overPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overPercentage["4_5"].total,
          visitorTeamCards.overPercentage["4_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overPercentage["4_5"].total,
      t2Color: visitorTeamCardsPercentile.overPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overPercentage["4_5"].total,
          visitorTeamCardsPercentile.overPercentage["4_5"].total
        ) + "%",
    },
    {
      name: "Over 5.5",
      t1: localTeamCards.overPercentage["5_5"].total + "%",
      t2: visitorTeamCards.overPercentage["5_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overPercentage["5_5"].total,
          visitorTeamCards.overPercentage["5_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overPercentage["5_5"].total,
      t2Color: visitorTeamCardsPercentile.overPercentage["5_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overPercentage["5_5"].total,
          visitorTeamCardsPercentile.overPercentage["5_5"].total
        ) + "%",
    },
    {
      name: "Over 6.5",
      t1: localTeamCards.overPercentage["6_5"].total + "%",
      t2: visitorTeamCards.overPercentage["6_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overPercentage["6_5"].total,
          visitorTeamCards.overPercentage["6_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overPercentage["6_5"].total,
      t2Color: visitorTeamCardsPercentile.overPercentage["6_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overPercentage["6_5"].total,
          visitorTeamCardsPercentile.overPercentage["6_5"].total
        ) + "%",
    },
  ];
  const teamDataAgainst = [
    {
      name: "Over 0.5 Against",
      t1: localTeamCards.overAgainst["0_5"].total + "%",
      t2: visitorTeamCards.overAgainst["0_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overAgainst["0_5"].total,
          visitorTeamCards.overAgainst["0_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overAgainst["0_5"].total,
      t2Color: visitorTeamCardsPercentile.overAgainst["0_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overAgainst["0_5"].total,
          visitorTeamCardsPercentile.overAgainst["0_5"].total
        ) + "%",
    },
    {
      name: "Over 1.5 Against",
      t1: localTeamCards.overAgainst["1_5"].total + "%",
      t2: visitorTeamCards.overAgainst["1_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overAgainst["1_5"].total,
          visitorTeamCards.overAgainst["1_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overAgainst["1_5"].total,
      t2Color: visitorTeamCardsPercentile.overAgainst["1_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overAgainst["1_5"].total,
          visitorTeamCardsPercentile.overAgainst["1_5"].total
        ) + "%",
    },
    {
      name: "Over 2.5 Against",
      t1: localTeamCards.overAgainst["2_5"].total + "%",
      t2: visitorTeamCards.overAgainst["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overAgainst["2_5"].total,
          visitorTeamCards.overAgainst["2_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overAgainst["2_5"].total,
      t2Color: visitorTeamCardsPercentile.overAgainst["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overAgainst["2_5"].total,
          visitorTeamCardsPercentile.overAgainst["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5 Against",
      t1: localTeamCards.overAgainst["3_5"].total + "%",
      t2: visitorTeamCards.overAgainst["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overAgainst["3_5"].total,
          visitorTeamCards.overAgainst["3_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overAgainst["3_5"].total,
      t2Color: visitorTeamCardsPercentile.overAgainst["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overAgainst["3_5"].total,
          visitorTeamCardsPercentile.overAgainst["3_5"].total
        ) + "%",
    },
  ];
  return (
    <CompWrapper
      title="Number of Cards"
      tooltip
      tabs={tabs}
      changeTab={changeTab}
    >
      {tab === 1 ? (
        <>
          <Grid item container className={classes.tableContainer}>
            <CardTable
              data={teamDataCards}
              subTitle="TEAM CARDS"
              teamsData={teamsData}
              extended
              minHeight="4.6vh"
              rowPadding="0 3.1em 0 3.2em"
              percentile
              // subTitleSize={5}
            />
          </Grid>
          <Grid
            item
            container
            className={classes.tableContainer}
            style={{
              boxShadow: " 0px 3px 16px rgba(2, 42, 84, 0.1)",
              paddingBottom: "10px",
              borderRadius: "0 0 20px 20px",
            }}
          >
            <CardTable
              data={teamDataAgainst}
              subTitle="CARDS AGAINST"
              teamsData={teamsData}
              extended
              minHeight="4.6vh"
              rowPadding="0 3.1em 0 3.2em"
              percentile
              // subTitleSize={5}
            />
          </Grid>
        </>
      ) : (
        <Grid item container className={classes.oneTable}>
          <CardTable
            data={totalData}
            subTitle="match Cards"
            teamsData={teamsData}
            extended
            percentile
            // subTitleSize={5}
          />
        </Grid>
      )}
      {/* {premium ? (
        <BottomPremiumContainer
          text="Total Cards / Match  (Sum of bookings per match between
            LiverPool F.C. and Manchester United
            "
          label1="cards booked per match"
          label2="cards booked per match"
          percentage1="40%"
          percentage2="80%"
          direction="row"
          padding="2.9vh 3.6rem"
          // text="Who Will Score First?
          //   "
          // label1="Scored first in 9 / 10 matches"
          // label2="Scored first in 6 / 10 matches"
          // percentage1="90%"
          // percentage2="60%"
          // direction="column"
        />
      ) : (
        <UpgradeToPremium />
        //   <Grid item>
        //     <BottomUpgradeContainer
        //       text="Average Corner Kicks Per Match Between Liverpool F.C And Manchester
        // United F.C."
        //     />
        //   </Grid>
      )} */}
    </CompWrapper>
  );
};
