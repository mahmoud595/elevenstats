import { useState, useMemo, memo } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CardTabs } from "../CardTabs/CardTabs";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles(({ palette }) => ({
  tableContainer: {
    padding: "1.3vh 0 0.9vh 0",
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
  { name: "Team MISC", xs: 6, index: 0 },
  { name: "Match MISC", xs: 6, index: 1 },
];

export const Misc = memo(() => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const {
    localTeam,
    localTeamFouls,
    localTeamPossession,
    localTeamRecords,
    visitorTeam,
    visitorTeamFouls,
    visitorTeamPossession,
    visitorTeamRecords,
    localTeamFoulsPercentile,
    localTeamPossessionPercentile,
    localTeamRecordsPercentile,
    visitorTeamFoulsPercentile,
    visitorTeamPossessionPercentile,
    visitorTeamRecordsPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: localTeam,
        fouls: localTeamFouls,
        possession: localTeamPossession,
        records: localTeamRecords,
      },
      visitorTeamStats: {
        team: visitorTeam,
        fouls: visitorTeamFouls,
        possession: visitorTeamPossession,
        records: visitorTeamRecords,
      },
      localTeamPercentile: {
        fouls: localTeamFoulsPercentile,
        possession: localTeamPossessionPercentile,
        records: localTeamRecordsPercentile,
      },
      visitorTeamPercentile: {
        fouls: visitorTeamFoulsPercentile,
        possession: visitorTeamPossessionPercentile,
        records: visitorTeamRecordsPercentile,
      },
    } = h2h;

    return {
      localTeam,
      localTeamFouls,
      localTeamPossession,
      localTeamRecords,
      visitorTeam,
      visitorTeamFouls,
      visitorTeamPossession,
      visitorTeamRecords,
      localTeamFoulsPercentile,
      localTeamPossessionPercentile,
      localTeamRecordsPercentile,
      visitorTeamFoulsPercentile,
      visitorTeamPossessionPercentile,
      visitorTeamRecordsPercentile,
    };
  }, shallowEqual);
  const miscStats = [
    {
      name: "Fouls Committed / Match",
      t1: localTeamFouls.foulsAverage.total,
      t2: visitorTeamFouls.foulsAverage.total,
      avg: calculateAvg(
        localTeamFouls.foulsAverage.total,
        visitorTeamFouls.foulsAverage.total
      ),
      t1Color: localTeamFoulsPercentile.foulsAverage.total,
      t2Color: visitorTeamFoulsPercentile.foulsAverage.total,
      avgColor: calculateAvg(
        localTeamFoulsPercentile.foulsAverage.total,
        visitorTeamFoulsPercentile.foulsAverage.total
      ),
    },
    {
      name: "Fouled Against / Match",
      t1: localTeamFouls.foulsAgainstAverage.total,
      t2: visitorTeamFouls.foulsAgainstAverage.total,
      avg: calculateAvg(
        localTeamFouls.foulsAgainstAverage.total,
        visitorTeamFouls.foulsAgainstAverage.total
      ),
      t1Color: localTeamFoulsPercentile.foulsAgainstAverage.total,
      t2Color: visitorTeamFoulsPercentile.foulsAgainstAverage.total,
      avgColor: calculateAvg(
        localTeamFoulsPercentile.foulsAgainstAverage.total,
        visitorTeamFoulsPercentile.foulsAgainstAverage.total
      ),
    },
    {
      name: "Average Possession",
      t1: localTeamPossession.possession.total + "%",
      t2: visitorTeamPossession.possession.total + "%",
      avg:
        calculateAvg(
          localTeamPossession.possession.total,
          visitorTeamPossession.possession.total
        ) + "%",
      t1Color: localTeamPossessionPercentile.possession.total,
      t2Color: visitorTeamPossessionPercentile.possession.total,
      avgColor:
        calculateAvg(
          localTeamPossessionPercentile.possession.total,
          visitorTeamPossessionPercentile.possession.total
        ) + "%",
    },
    {
      name: "Draw % FT",
      t1: localTeamRecords.drawsPercentage.total + "%",
      t2: visitorTeamRecords.drawsPercentage.total + "%",
      avg:
        calculateAvg(
          localTeamRecords.drawsPercentage.total,
          visitorTeamRecords.drawsPercentage.total
        ) + "%",
      t1Color: localTeamRecordsPercentile.drawsPercentage.total,
      t2Color: visitorTeamRecordsPercentile.drawsPercentage.total,
      avgColor:
        calculateAvg(
          localTeamRecordsPercentile.drawsPercentage.total,
          visitorTeamRecordsPercentile.drawsPercentage.total
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
    <Grid item container sx={{ flex: 1 }}>
      <CompWrapper
        title="Fouls & more"
        // headerComp={Header}
        // background="#F6F7FA"
        // noFlex={true}
        // toolTipText={`${localTeam.name} and ${visitorTeam.name}  Overall Match Fouls & average possession`}
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
            data={miscStats}
            subTitle="Misc Stats"
            // subTitleSize={8}
            // smallSubTitleSize={4}
            teamsData={teamsData}
            extended
            size={2}
            bigSize={6}
            // active={active === 0}
            // isTeam={isTeam}
            minHeight="6em"
            rowPadding="0 2.8em"
            percentile
          />
        </Grid>
      </CompWrapper>
    </Grid>
  );
});
