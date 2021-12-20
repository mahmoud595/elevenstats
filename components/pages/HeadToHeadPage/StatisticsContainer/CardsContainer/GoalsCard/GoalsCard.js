import React, { useState, useMemo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector, shallowEqual } from "react-redux";
// import { SwitchComp, Btn } from "../../../..";

import { WhoIsBetter } from "../WhoIsBetter/WhoIsBetter";
import { GoalsChartV5 } from "../../../../../Layout/Charts/GoalsChart/GoalsChartV5";
import { CardTable } from "../CardTable/CardTable";
import { CardTabs } from "../CardTabs/CardTabs";
import { GoalsCardBottomComp } from "./GoalsCardBottomComp/GoalsCardBottomComp";
import { SwitchWrapperHeader } from "../SwitchWrapperHeader/SwitchWrapperHeader";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
import { TotalGoals } from "../GoalRangeCard/TotalGoals";
// import { ContactMailSharp } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  root: {
    // boxShadow: "0px 3px 16px rgba(0, 0, 0, .16)",
    // backgroundColor: "#FFF",
    borderRadius: 20,
    height: "100",
  },
  cardType: {
    padding: "1em 0",
    height: "46em",
    // flex: 1,
    "& > div:nth-child(odd)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0, rgba(54, 84, 220, 0.03) 100)",
    },
    "& > div:nth-child(1)": {
      background: "#F6F7FA",
      borderRadius: 8,
    },
    "& > div:nth-child(7)": {
      background: "transparent",
      marginTop: 5,
      paddingTop: 5,
      borderTop: "1px solid #EFF1F5",
    },
  },
  title: {
    letterSpacing: "normal",
    textTransform: "capitalize",
  },
  header: {
    borderRadius: "10px 10px 0px 0px",
    padding: "21px 2.5em",
    "@media (max-width: 960px)": {
      fontSize: "1.3vh 1.5rem",
    },
    "@media (max-width: 860px)": {
      fontSize: "0.6vh 0.7rem",
    },
  },
  // middleTitleContainer: {
  //   textAlign: "center",
  //   background: "#1A3C60",
  //   padding: "1.4vh 4rem",
  // },
  // middleTitleText: {
  //   color: "#FFF",
  //   fontSize: 14,
  //   fontWeight: 600,
  //   "@media only screen and (min-width:1330px) and (max-width:1560px)": {
  //     fontSize: "1.1rem",
  //   },
  // },
  // middleTitleValue: {
  //   display: "inline",
  //   color: "#1BD47B",
  //   fontWeight: 600,
  // },
}));

const tabs = [
  { name: "Full-time", xs: 6, index: 0 },
  { name: "1st half/ 2nd half", xs: 6, index: 1 },
];

export const GoalsCard = React.memo(
  ({ title, subTitle, headerVaraint, conceded }) => {
    const [isChart, setIsChart] = useState(false);
    const [active, setActive] = useState(0);
    const classes = useStyles({ isChart });
    // const { localTeamStats, visitorTeamStats } = useSelector(
    //   (state) => state.h2h
    // );
    const {
      localTeamGoals,
      loalTeamCleanSheets,
      localTeam,
      visitorTeamGoals,
      visitorTeamCleanSheets,
      visitorTeam,
      visitorTeamFailedToScore,
      localTeamFailedToScore,
      localTeamGoalsPercentile,
      loalTeamCleanSheetsPercentile,
      localTeamPercentile,
      localTeamFailedToScorePercentile,
      visitorTeamGoalsPercentile,
      visitorTeamCleanSheetsPercentile,
      visitorTeamPercentile,
      visitorTeamFailedToScorePercentile,
    } = useSelector(({ h2h }) => {
      const {
        localTeamStats: {
          goals: localTeamGoals,
          cleanSheets: loalTeamCleanSheets,
          team: localTeam,
          failedToScore: localTeamFailedToScore,
        },
        visitorTeamStats: {
          goals: visitorTeamGoals,
          cleanSheets: visitorTeamCleanSheets,
          team: visitorTeam,
          failedToScore: visitorTeamFailedToScore,
        },
        localTeamPercentile: {
          goals: localTeamGoalsPercentile,
          cleanSheets: loalTeamCleanSheetsPercentile,
          team: localTeamPercentile,
          failedToScore: localTeamFailedToScorePercentile,
        },
        visitorTeamPercentile: {
          goals: visitorTeamGoalsPercentile,
          cleanSheets: visitorTeamCleanSheetsPercentile,
          team: visitorTeamPercentile,
          failedToScore: visitorTeamFailedToScorePercentile,
        },
      } = h2h;
      return {
        localTeamGoals,
        loalTeamCleanSheets,
        localTeam,
        visitorTeamGoals,
        visitorTeamCleanSheets,
        visitorTeam,
        visitorTeamFailedToScore,
        localTeamFailedToScore,
        localTeamGoalsPercentile,
        loalTeamCleanSheetsPercentile,
        localTeamPercentile,
        localTeamFailedToScorePercentile,
        visitorTeamGoalsPercentile,
        visitorTeamCleanSheetsPercentile,
        visitorTeamPercentile,
        visitorTeamFailedToScorePercentile,
      };
    }, shallowEqual);

    const teamsData = [
      {
        img: localTeam.logoPath,
        name: conceded ? null : localTeam.name,
      },
      {
        img: visitorTeam.logoPath,
        name: conceded ? null : visitorTeam.name,
      },
    ];
    const goalsConceded = [
      {
        name: "Over 0.5",
        t1: localTeamGoals.concededOverPercentage["0_5"].total,
        t2: visitorTeamGoals.concededOverPercentage["0_5"].total,
        t1Color: localTeamGoalsPercentile.concededOverPercentage["0_5"].total,
        t2Color: visitorTeamGoalsPercentile.concededOverPercentage["0_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Over 1.5",
        t1: localTeamGoals.concededOverPercentage["1_5"].total,
        t2: visitorTeamGoals.concededOverPercentage["1_5"].total,
        t1Color: localTeamGoalsPercentile.concededOverPercentage["1_5"].total,
        t2Color: visitorTeamGoalsPercentile.concededOverPercentage["1_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Over 2.5",
        t1: localTeamGoals.concededOverPercentage["2_5"].total,
        t2: visitorTeamGoals.concededOverPercentage["2_5"].total,
        t1Color: localTeamGoalsPercentile.concededOverPercentage["2_5"].total,
        t2Color: visitorTeamGoalsPercentile.concededOverPercentage["2_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Over 3.5",
        t1: localTeamGoals.concededOverPercentage["3_5"].total,
        t2: visitorTeamGoals.concededOverPercentage["3_5"].total,
        t1Color: localTeamGoalsPercentile.concededOverPercentage["3_5"].total,
        t2Color: visitorTeamGoalsPercentile.concededOverPercentage["3_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "clean sheets",
        t1: `${loalTeamCleanSheets.cleanSheetsPercentage.total}`,
        t2: `${visitorTeamCleanSheets.cleanSheetsPercentage.total}`,
        t1Color: `${loalTeamCleanSheetsPercentile.cleanSheetsPercentage.total}`,
        t2Color: `${visitorTeamCleanSheetsPercentile.cleanSheetsPercentage.total}`,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
    ];

    const goalsScoredFT = [
      {
        name: "Over 0.5",
        t1: localTeamGoals.scoredOverPercentage["0_5"].total,
        t2: visitorTeamGoals.scoredOverPercentage["0_5"].total,
        t1Color: localTeamGoalsPercentile.scoredOverPercentage["0_5"].total,
        t2Color: visitorTeamGoalsPercentile.scoredOverPercentage["0_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Over 1.5",
        t1: localTeamGoals.scoredOverPercentage["1_5"].total,
        t2: visitorTeamGoals.scoredOverPercentage["1_5"].total,
        t1Color: localTeamGoalsPercentile.scoredOverPercentage["1_5"].total,
        t2Color: visitorTeamGoalsPercentile.scoredOverPercentage["1_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
      },
      {
        name: "Over 2.5",
        t1: localTeamGoals.scoredOverPercentage["2_5"].total,
        t2: visitorTeamGoals.scoredOverPercentage["2_5"].total,
        t1Color: localTeamGoalsPercentile.scoredOverPercentage["2_5"].total,
        t2Color: visitorTeamGoalsPercentile.scoredOverPercentage["2_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Over 3.5",
        t1: localTeamGoals.scoredOverPercentage["3_5"].total,
        t2: visitorTeamGoals.scoredOverPercentage["3_5"].total,
        t1Color: localTeamGoalsPercentile.scoredOverPercentage["3_5"].total,
        t2Color: visitorTeamGoalsPercentile.scoredOverPercentage["3_5"].total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Failed to score",
        t1: `${localTeamFailedToScore.failedToScorePercentage.total}`,
        t2: `${visitorTeamFailedToScore.failedToScorePercentage.total}`,
        t1Color: `${localTeamFailedToScorePercentile.failedToScorePercentage.total}`,
        t2Color: `${visitorTeamFailedToScorePercentile.failedToScorePercentage.total}`,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
    ];

    const goalsConcededHF = [
      {
        name: "1H Clean Sheet",
        t1: loalTeamCleanSheets.cleanSheetsHTPercentage.total,
        t2: visitorTeamCleanSheets.cleanSheetsHTPercentage.total,
        t1Color: loalTeamCleanSheetsPercentile.cleanSheetsHTPercentage.total,
        t2Color: visitorTeamCleanSheetsPercentile.cleanSheetsHTPercentage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "2H Clean Sheet",
        t1: loalTeamCleanSheets.cleanSheets2HTPercentage.total,
        t2: visitorTeamCleanSheets.cleanSheets2HTPercentage.total,
        t1Color: loalTeamCleanSheetsPercentile.cleanSheets2HTPercentage.total,
        t2Color:
          visitorTeamCleanSheetsPercentile.cleanSheets2HTPercentage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Conceded Average 1H",
        t1: +localTeamGoals.concededHTAverage.total,
        t2: +visitorTeamGoals.concededHTAverage.total,
        t1Color: localTeamGoalsPercentile.concededHTAverage.total,
        t2Color: visitorTeamGoalsPercentile.concededHTAverage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
        tAverage: true,
      },
      {
        name: "Conceded Average 2H",
        t1: +localTeamGoals.conceded2HTAverage.total,
        t2: +visitorTeamGoals.conceded2HTAverage.total,
        t1Color: localTeamGoalsPercentile.conceded2HTAverage.total,
        t2Color: visitorTeamGoalsPercentile.conceded2HTAverage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
        tAverage: true,
      },
    ];

    const goalsScoredHF = [
      {
        name: "Scored in 1H",
        t1: +localTeamGoals.scoredHTPercentage.total,
        t2: +visitorTeamGoals.scoredHTPercentage.total,
        t1Color: localTeamGoalsPercentile.scoredHTPercentage.total,
        t2Color: visitorTeamGoalsPercentile.scoredHTPercentage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Scored in 2H",
        t1: +localTeamGoals.scored2HTPercentage.total,
        t2: +visitorTeamGoals.scored2HTPercentage.total,
        t1Color: localTeamGoalsPercentile.scored2HTPercentage.total,
        t2Color: visitorTeamGoalsPercentile.scored2HTPercentage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Scored in Both Halves",
        t1: +localTeamGoals.scoredBothHalvesPercentage.total,
        t2: +visitorTeamGoals.scoredBothHalvesPercentage.total,
        t1Color: localTeamGoalsPercentile.scoredBothHalvesPercentage.total,
        t2Color: visitorTeamGoalsPercentile.scoredBothHalvesPercentage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Scored Average 1H",
        t1: +localTeamGoals.scoredHTAverage.total,
        t2: +visitorTeamGoals.scoredHTAverage.total,
        t1Color: localTeamGoalsPercentile.scoredHTAverage.total,
        t2Color: visitorTeamGoalsPercentile.scoredHTAverage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
      {
        name: "Scored Average 2H",
        t1: +localTeamGoals.scored2HTAverage.total,
        t2: +visitorTeamGoals.scored2HTAverage.total,
        t1Color: localTeamGoalsPercentile.scored2HTAverage.total,
        t2Color: visitorTeamGoalsPercentile.scored2HTAverage.total,
        bullet1: localTeam.logoPath,
        bullet2: visitorTeam.logoPath,
        color1: { fill: "rgb(27, 212, 123)" },
        color2: { fill: "rgb(251, 82, 102)" },
        localName: localTeam.name,
        visitorName: visitorTeam.name,
      },
    ];
    const goalsConcededCleanSheetsHF = goalsConcededHF.slice(0, 2);
    const goalsConcededAverageHF = goalsConcededHF.slice(2, 4);
    const goalsScoredPercentage = goalsScoredHF.slice(0, 3);
    const goalsScoredAverage = goalsScoredHF.slice(3, 5);
    const memoizedTeamsData = useMemo(() => teamsData, [teamsData]);
    const memoizedGoalsConceded = useMemo(() => goalsConceded, [goalsConceded]);
    const memoizedGoalsScoredFT = useMemo(() => goalsScoredFT, [goalsScoredFT]);
    const memoizedGoalsConcededHF = useMemo(
      () => goalsConcededHF,
      [goalsConcededHF]
    );
    const memoizedGoalsConcededCleanSheetsHF = useMemo(
      () => goalsConcededCleanSheetsHF,
      [goalsConcededCleanSheetsHF]
    );
    const memoizedGoalsConcededAverageHF = useMemo(
      () => goalsConcededAverageHF,
      [goalsConcededAverageHF]
    );
    const memoizedGoalsScoredHF = useMemo(() => goalsScoredHF, [goalsScoredHF]);

    const labelChecked = (isChart) => {
      setIsChart(!isChart);
    };

    const changeTab = (i) => {
      setActive(i);
    };
    console.log(memoizedGoalsConcededHF);
    const Header = useMemo(
      () => (
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="center"
          wrap="nowrap"
          sx={{
            padding: "8px",
            background: "#F6F7FA",
            borderRadius: "12px",
          }}
        >
          {/* <Grid item md={4} xs={3}>
            <TotalGoals
              totalGoalsHandler={totalGoalsHandler}
              goalsType={goalsType}
            />
          </Grid> */}

          <Grid item xs={4} md={3}>
            <SwitchWrapperHeader
              spacing="flex-end"
              label1="Table"
              label2="Chart"
              labelChecked={labelChecked}
            />
          </Grid>
        </Grid>
      ),
      []
    );

    const xs = useMediaQuery("(max-width:640px)");
    return (
      <CompWrapper
        title={title}
        tooltip
        head={Header}
        tabs={tabs}
        changeTab={changeTab}
      >
        <Grid
          container
          className={classes.root}
          direction="column"
          wrap="nowrap"
        >
          {/* header */}

          {/* buttons */}

          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            className={classes.cardType}
          >
            {isChart ? (
              active === 1 ? (
                <Grid
                  container
                  wrap="nowrap"
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid item sm={6} style={{ height: "100%" }}>
                    <GoalsChartV5
                      id={`${title} cleansheets`}
                      data={
                        conceded
                          ? memoizedGoalsConcededCleanSheetsHF
                          : goalsScoredPercentage
                      }
                      conceded={conceded}
                      twoCharts
                    />
                  </Grid>
                  <Grid item sm={6} style={{ height: "100%" }}>
                    <GoalsChartV5
                      id={`${title} average`}
                      data={
                        conceded
                          ? memoizedGoalsConcededAverageHF
                          : goalsScoredAverage
                      }
                      conceded={conceded}
                      twoCharts
                    />
                  </Grid>
                </Grid>
              ) : (
                <GoalsChartV5
                  id={title}
                  teamsData={memoizedTeamsData}
                  data={
                    active === 0
                      ? conceded
                        ? memoizedGoalsConceded
                        : memoizedGoalsScoredFT
                      : conceded
                      ? memoizedGoalsConcededHF
                      : memoizedGoalsScoredHF
                  }
                  conceded={conceded}
                />
              )
            ) : active === 0 ? (
              <CardTable
                subTitle={subTitle}
                teamsData={memoizedTeamsData}
                data={conceded ? memoizedGoalsConceded : memoizedGoalsScoredFT}
                minHeight="6em"
                rowPadding="0 2.8rem"
                headerVariant={headerVaraint}
                percentile
              />
            ) : (
              <>
                <CardTable
                  subTitle={conceded ? "1st/2nd Half" : subTitle}
                  teamsData={memoizedTeamsData}
                  data={
                    conceded ? memoizedGoalsConcededHF : memoizedGoalsScoredHF
                  }
                  minHeight="6em"
                  rowPadding="0 2.8rem"
                  headerVariant={headerVaraint}
                  percentile
                />
              </>
            )}
          </Grid>

          <>
            <WhoIsBetter conceded={conceded} />

            <GoalsCardBottomComp conceded={conceded} />
          </>
        </Grid>
      </CompWrapper>
    );
  }
);
