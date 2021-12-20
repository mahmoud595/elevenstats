import { memo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
// import { CardTabs } from "../CardTabs/CardTabs";
import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
// import { BottomUpgradeContainer } from "../BottomUpgradeContainer/BottomUpgradeContainer";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    flex: 1,
    paddingBottom: "10px",
    // padding: "0 2em 2em 2em",
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
}));

export const TeamCorners = () => {
  const classes = useStyles();
  const {
    localTeamLogo,
    localTeamCorners,
    visitorTeamLogo,
    visitorTeamCorners,
    localTeamCornersPercentile,
    visitorTeamCornersPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { logoPath: localTeamLogo },
        corners: localTeamCorners,
      },
      visitorTeamStats: {
        team: { logoPath: visitorTeamLogo },
        corners: visitorTeamCorners,
      },
      localTeamPercentile: { corners: localTeamCornersPercentile },
      visitorTeamPercentile: { corners: visitorTeamCornersPercentile },
    } = h2h;
    return {
      localTeamLogo,
      localTeamCorners,
      visitorTeamLogo,
      visitorTeamCorners,
      localTeamCornersPercentile,
      visitorTeamCornersPercentile,
    };
  }, shallowEqual);
  const teamsData = [
    { img: localTeamLogo },
    {
      img: visitorTeamLogo,
    },
    { name: "Average" },
  ];
  const tableData = [
    {
      name: "Corners Earned / Match",
      t1: localTeamCorners.cornersForAverage.total,
      t2: visitorTeamCorners.cornersForAverage.total,
      avg: calculateAvg(
        localTeamCorners.cornersForAverage.total,
        visitorTeamCorners.cornersForAverage.total
      ),
      t1Color: localTeamCornersPercentile.cornersForAverage.total,
      t2Color: visitorTeamCornersPercentile.cornersForAverage.total,
      avgColor: calculateAvg(
        localTeamCornersPercentile.cornersForAverage.total,
        visitorTeamCornersPercentile.cornersForAverage.total
      ),
    },
    {
      name: "Corners Against / Match",
      t1: localTeamCorners.cornersAgainstAverage.total,
      t2: visitorTeamCorners.cornersAgainstAverage.total,
      avg: calculateAvg(
        localTeamCorners.cornersAgainstAverage.total,
        visitorTeamCorners.cornersAgainstAverage.total
      ),
      t1Color: localTeamCornersPercentile.cornersAgainstAverage.total,
      t2Color: visitorTeamCornersPercentile.cornersAgainstAverage.total,
      avgColor: calculateAvg(
        localTeamCornersPercentile.cornersAgainstAverage.total,
        visitorTeamCornersPercentile.cornersAgainstAverage.total
      ),
    },
    {
      name: "Over 2.5 Corners For",
      t1: localTeamCorners.overForPercentage["2_5"].total + "%",
      t2: visitorTeamCorners.overForPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCorners.overForPercentage["2_5"].total,
          visitorTeamCorners.overForPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamCornersPercentile.overForPercentage["2_5"].total,
      t2Color: visitorTeamCornersPercentile.overForPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCornersPercentile.overForPercentage["2_5"].total,
          visitorTeamCornersPercentile.overForPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5 Corners For",
      t1: localTeamCorners.overForPercentage["3_5"].total + "%",
      t2: visitorTeamCorners.overForPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCorners.overForPercentage["3_5"].total,
          visitorTeamCorners.overForPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamCornersPercentile.overForPercentage["3_5"].total,
      t2Color: visitorTeamCornersPercentile.overForPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamCornersPercentile.overForPercentage["3_5"].total,
          visitorTeamCornersPercentile.overForPercentage["3_5"].total
        ) + "%",
    },
    {
      name: "Over 4.5 Corners For",
      t1: localTeamCorners.overForPercentage["4_5"].total + "%",
      t2: visitorTeamCorners.overForPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCorners.overForPercentage["4_5"].total,
          visitorTeamCorners.overForPercentage["4_5"].total
        ) + "%",
      t1Color: localTeamCornersPercentile.overForPercentage["4_5"].total,
      t2Color: visitorTeamCornersPercentile.overForPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localTeamCornersPercentile.overForPercentage["4_5"].total,
          visitorTeamCornersPercentile.overForPercentage["4_5"].total
        ) + "%",
    },
    {
      name: "Over 2.5 Corners Against",
      t1: localTeamCorners.overAgainstPercentage["2_5"].total + "%",
      t2: visitorTeamCorners.overAgainstPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCorners.overAgainstPercentage["2_5"].total,
          visitorTeamCorners.overAgainstPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamCornersPercentile.overAgainstPercentage["2_5"].total,
      t2Color: visitorTeamCornersPercentile.overAgainstPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCornersPercentile.overAgainstPercentage["2_5"].total,
          visitorTeamCornersPercentile.overAgainstPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "Over 3.5 Corners Against",
      t1: localTeamCorners.overAgainstPercentage["3_5"].total + "%",
      t2: visitorTeamCorners.overAgainstPercentage["3_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCorners.overAgainstPercentage["3_5"].total,
          visitorTeamCorners.overAgainstPercentage["3_5"].total
        ) + "%",
      t1Color: localTeamCornersPercentile.overAgainstPercentage["3_5"].total,
      t2Color: visitorTeamCornersPercentile.overAgainstPercentage["3_5"].total,
      avgColor:
        calculateAvg(
          localTeamCornersPercentile.overAgainstPercentage["3_5"].total,
          visitorTeamCornersPercentile.overAgainstPercentage["3_5"].total
        ) + "%",
    },
    {
      name: "Over 4.5 Corners Against",
      t1: localTeamCorners.overAgainstPercentage["4_5"].total + "%",
      t2: visitorTeamCorners.overAgainstPercentage["4_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCorners.overAgainstPercentage["4_5"].total,
          visitorTeamCorners.overAgainstPercentage["4_5"].total
        ) + "%",
      t1Color: localTeamCornersPercentile.overAgainstPercentage["4_5"].total,
      t2Color: visitorTeamCornersPercentile.overAgainstPercentage["4_5"].total,
      avgColor:
        calculateAvg(
          localTeamCornersPercentile.overAgainstPercentage["4_5"].total,
          visitorTeamCornersPercentile.overAgainstPercentage["4_5"].total
        ) + "%",
    },
  ];
  return (
    <CompWrapper title="Team corners" tooltip flex>
      <Grid item container className={classes.tableContainer}>
        <CardTable
          data={tableData}
          subTitle="Team corners"
          teamsData={teamsData}
          extended
          size={2}
          bigSize={6}
          rowPadding="0 3em 0 2.8em"
          percentile
          // smallSubTitleSize={3}
          // subTitleSize={9}
        />
      </Grid>

      {/* <Grid item container>
        <BottomUpgradeContainer
          teamCorners
          text="lIVERPOOL F.C and Manchester United’s individual team corner data."
          padding="3.3em 3.2em 4.1em 2.9em"
        />
      </Grid> */}
    </CompWrapper>
  );
};
