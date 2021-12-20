import { useState, useMemo, memo, useCallback } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { CardTabs } from "../CardTabs/CardTabs";
import { DropDownSelect, SortBy, GoalsChartV5 } from "components/";
import { BottomPremiumContainer } from "../BottomPremiumContainer/BottomPremiumContainer";
import { SwitchWrapperHeader } from "../SwitchWrapperHeader/SwitchWrapperHeader";
import { TotalGoals } from "./TotalGoals";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
const useStyles = makeStyles(({ palette }) => ({
  switchText: {
    textTransform: "uppercase",
    color: palette.primary.main,
    fontSize: 11,
    fontWeight: 600,
    "@media only screen and (max-width:1660px)": {
      fontSize: 9,
    },
  },
  tableContainer: {
    padding: "0.9vhrem 0 0.18vh 0",
    // height: 390,
    // flex: 1,
    height: "100%",
    minHeight: "46em",

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
  { name: "10 minutes", xs: 6, index: 0 },
  { name: "15 minutes", xs: 6, index: 1 },
];

export const GoalRangeCard = memo(() => {
  const [isChart, setIsChart] = useState(false);
  const [active, setActive] = useState(0);
  const [goalsType, setGoalsType] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;
  const classes = useStyles({ isChart });

  const {
    localName,
    localLogo,
    localGoals,
    visitorGoals,
    visitorName,
    visitorLogo,
    localGoalsPercentile,
    visitorGoalsPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localName, logoPath: localLogo },
        goals: localGoals,
      },
      visitorTeamStats: {
        team: { name: visitorName, logoPath: visitorLogo },
        goals: visitorGoals,
      },
      localTeamPercentile: { goals: localGoalsPercentile },
      visitorTeamPercentile: { goals: visitorGoalsPercentile },
    } = h2h;
    return {
      localName,
      localLogo,
      localGoals,
      visitorGoals,
      visitorName,
      visitorLogo,
      localGoalsPercentile,
      visitorGoalsPercentile,
    };
  }, shallowEqual);
  const totalGoalsHandler = (name) => {
    name === "total Goals" ? setGoalsType("") : setGoalsType(name);
  };

  // console.log(goalsType);
  const tableData1 = [
    {
      name: "0 - 10 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["0:10"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["0:10"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["0:10"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["0:10"],
    },
    {
      name: "11 - 20 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["11:20"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["11:20"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["11:20"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["11:20"],
    },
    {
      name: "21 - 30 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["21:30"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["21:30"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["21:30"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["21:30"],
    },
    {
      name: "31 - 40 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["31:40"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["31:40"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["31:40"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["31:40"],
    },
    {
      name: "41 - 50 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["41:50"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["41:50"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["41:50"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["41:50"],
    },
    {
      name: "51 - 60 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["51:60"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["51:60"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["51:60"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["51:60"],
    },
    {
      name: "61 - 70 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["61:70"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["61:70"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["61:70"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["61:70"],
    },
    {
      name: "71 - 80 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["71:80"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["71:80"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["71:80"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["71:80"],
    },
    {
      name: "81 - 90 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["81:90"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["81:90"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["81:90"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["81:90"],
    },
  ];

  const tableData2 = [
    {
      name: "0 - 15 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["0:15"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["0:15"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["0:15"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["0:15"],
    },
    {
      name: "16 - 30 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["16:30"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["16:30"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["16:30"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["16:30"],
    },
    {
      name: "31 - 45 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["31:45"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["31:45"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["31:45"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["31:45"],
    },
    {
      name: "46 - 60 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["46:60"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["46:60"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["46:60"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["46:60"],
    },
    {
      name: "61 - 75 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["61:75"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["61:75"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["61:75"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["61:75"],
    },
    {
      name: "76 - 90 mins",
      color1: { fill: "#1BD47B" },
      color2: { fill: "#FB5266" },
      localName: localName,
      visitorName: visitorName,
      bullet1: localLogo,
      bullet2: visitorLogo,
      t1: localGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["76:90"],
      t2: visitorGoals[
        `${
          goalsType
            ? `${goalsType}TimingsTotalPercentage`
            : "timingsTotalPercentage"
        }`
      ]["76:90"],
      t1Color:
        localGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["76:90"],
      t2Color:
        visitorGoalsPercentile[
          `${
            goalsType
              ? `${goalsType}TimingsTotalPercentage`
              : "timingsTotalPercentage"
          }`
        ]["76:90"],
    },
  ];

  const teamsData = [
    { img: localLogo, name: localName },

    {
      img: visitorLogo,
      name: visitorName,
    },
  ];

  const labelChecked = useCallback(
    (isChart) => {
      setIsChart(!isChart);
    },
    [isChart]
  );

  const changeTab = (i) => {
    setActive(i);
  };

  const Header = useMemo(
    () => (
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        sx={{
          padding: "8px",
          background: "#F6F7FA",
          borderRadius: "12px",
        }}
      >
        <Grid item md={4} xs={3}>
          {/* <DropDownSelect /> */}
          <TotalGoals
            totalGoalsHandler={totalGoalsHandler}
            goalsType={goalsType}
          />
        </Grid>

        <Grid item xs={4} md={2}>
          <SwitchWrapperHeader
            label1="Table"
            label2="Chart"
            labelChecked={labelChecked}
          />
        </Grid>
      </Grid>
    ),
    []
  );

  return (
    <CompWrapper
      title="Goal range"
      head={Header}
      flex
      tabs={tabs}
      changeTab={changeTab}
    >
      <Grid item container className={classes.tableContainer}>
        {isChart ? (
          <GoalsChartV5
            id="5446s"
            data={active === 0 ? tableData1 : tableData2}
            goalRange
            // active={active}
          />
        ) : (
          <CardTable
            subTitle={active === 0 ? "10 minutes" : "15 minutes"}
            teamsData={teamsData}
            data={active === 0 ? tableData1 : tableData2}
            // headerVariant="body2"
            rowPadding="0 2.8rem"
            size={4}
            firstColumnSize={4}
            subTitleSize={6}
            percentile
            percentage
          />
        )}
      </Grid>

      <BottomPremiumContainer
        direction="column"
        text="Who Will Score First?"
        label1="Scored first in 9 / 10 matches"
        label2="Scored first in 6 / 10 matches"
        percentage1={`${localGoals.firstScoredPercentage.home} %`}
        percentage2={`${visitorGoals.firstScoredPercentage.away} %`}
        padding="1.3vh 1.9rem 1.6vh 2.7rem"
        textFontSize={14}
        value1={localGoals.firstScoredPercentage.home}
        value2={visitorGoals.firstScoredPercentage.away}
        localTeamLogo={localLogo}
        visitorTeamLogo={visitorLogo}
        localName={localName}
        visitorName={visitorName}
      />
    </CompWrapper>
  );
});
