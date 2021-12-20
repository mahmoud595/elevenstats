import { memo, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";

import { calculateAvg } from "utils/helperFunctions/h2hHelperFunctions";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CardTable } from "../CardTable/CardTable";
import { CardTabs } from "../CardTabs/CardTabs";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    flex: 1,
    padding: "1em 3.8em 2em 2.8em",
    "& > div:nth-child(odd)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    "& > div:nth-child(1)": {
      background: "#F6F7FA",
      borderRadius: 8,
    },
  },
  updgradeText: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: 700,
    "@media (max-width: 1720px)": {
      fontSize: 25,
    },
    "@media (max-width: 1550px)": {
      fontSize: 20,
    },
  },
  profitText: {
    color: "#ADD666",
    fontSize: 23,
    "@media (max-width: 1720px)": {
      fontSize: 19,
    },
    "@media (max-width: 1550px)": {
      fontSize: 15,
    },
  },
  svgContainer: {
    fill: "#1BD47B",
    "@media (max-width: 1550px)": {
      "& svg": {
        width: 55,
        height: 55,
      },
    },
  },
}));

const tabs = [
  { name: "1h/2h average", xs: 6, index: 0 },
  { name: "Over 0.5 ~ 3 Half Cards", xs: 6, index: 1 },
];

export const FisrSecondHalfCard = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  const {
    localTeamLogo,
    localTeamCards,
    visitorTeamLogo,
    visitorTeamCards,
    localTeamCardsPercentile,
    visitorTeamCardsPercentile,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { logoPath: localTeamLogo },
        cards: localTeamCards,
      },
      visitorTeamStats: {
        team: { logoPath: visitorTeamLogo },
        cards: visitorTeamCards,
      },
      localTeamPercentile: { cards: localTeamCardsPercentile },
      visitorTeamPercentile: { cards: visitorTeamCardsPercentile },
    } = h2h;
    return {
      localTeamLogo,
      localTeamCards,
      visitorTeamLogo,
      visitorTeamCards,
      localTeamCardsPercentile,
      visitorTeamCardsPercentile,
    };
  }, shallowEqual);

  const teamsData = [
    { img: localTeamLogo },
    {
      img: visitorTeamLogo,
    },
    { name: "Average" },
  ];

  const tableData2 = [
    {
      name: "1H Over 0.5 Cards For",
      t1: localTeamCards.overForHTPercentage["0_5"].total + "%",
      t2: visitorTeamCards.overForHTPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overForHTPercentage["0_5"].total,
          visitorTeamCards.overForHTPercentage["0_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overForHTPercentage["0_5"].total,
      t2Color: visitorTeamCardsPercentile.overForHTPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overForHTPercentage["0_5"].total,
          visitorTeamCardsPercentile.overForHTPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "2H Over 0.5 Cards For",
      t1: localTeamCards.overFor2HTPercentage["0_5"].total + "%",
      t2: visitorTeamCards.overFor2HTPercentage["0_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overFor2HTPercentage["0_5"].total,
          visitorTeamCards.overFor2HTPercentage["0_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overFor2HTPercentage["0_5"].total,
      t2Color: visitorTeamCardsPercentile.overFor2HTPercentage["0_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overFor2HTPercentage["0_5"].total,
          visitorTeamCardsPercentile.overFor2HTPercentage["0_5"].total
        ) + "%",
    },
    {
      name: "1H Total Under 2",
      t1: localTeamCards.underHTPercentage["1_5"].total + "%",
      t2: visitorTeamCards.underHTPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.underHTPercentage["1_5"].total,
          visitorTeamCards.underHTPercentage["1_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.underHTPercentage["1_5"].total,
      t2Color: visitorTeamCardsPercentile.underHTPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.underHTPercentage["1_5"].total,
          visitorTeamCardsPercentile.underHTPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "2H Total Under 2",
      t1: localTeamCards.under2HTPercentage["1_5"].total + "%",
      t2: visitorTeamCards.under2HTPercentage["1_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.under2HTPercentage["1_5"].total,
          visitorTeamCards.under2HTPercentage["1_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.under2HTPercentage["1_5"].total,
      t2Color: visitorTeamCardsPercentile.under2HTPercentage["1_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.under2HTPercentage["1_5"].total,
          visitorTeamCardsPercentile.under2HTPercentage["1_5"].total
        ) + "%",
    },
    {
      name: "1H is 2~3 Total Cards",
      t1:
        +localTeamCards.overHTPercentage["1_5"].total -
        +localTeamCards.overHTPercentage["2_5"].total +
        "%",
      t2:
        +visitorTeamCards.overHTPercentage["1_5"].total -
        +visitorTeamCards.overHTPercentage["2_5"].total +
        "%",
      avg:
        calculateAvg(
          +localTeamCards.overHTPercentage["1_5"].total -
            +localTeamCards.overHTPercentage["2_5"].total,
          +visitorTeamCards.overHTPercentage["1_5"].total -
            +visitorTeamCards.overHTPercentage["2_5"].total
        ) + "%",
      t1Color: "need to be calculated from backend",
      t2Color: "need to be calculated from backend",
      avgColor:
        calculateAvg(
          +localTeamCardsPercentile.overHTPercentage["1_5"].total -
            +localTeamCardsPercentile.overHTPercentage["2_5"].total,
          +visitorTeamCardsPercentile.overHTPercentage["1_5"].total -
            +visitorTeamCardsPercentile.overHTPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "2H is 2~3 Total Cards",
      t1:
        +localTeamCards.over2HTPercentage["1_5"].total -
        +localTeamCards.over2HTPercentage["2_5"].total +
        "%",
      t2:
        +visitorTeamCards.over2HTPercentage["1_5"].total -
        +visitorTeamCards.over2HTPercentage["2_5"].total +
        "%",
      avg:
        calculateAvg(
          +localTeamCards.over2HTPercentage["1_5"].total -
            +localTeamCards.over2HTPercentage["2_5"].total,
          +visitorTeamCards.over2HTPercentage["1_5"].total -
            +visitorTeamCards.over2HTPercentage["2_5"].total
        ) + "%",
      t1Color: "need to be calculated from backend",
      t2Color: "need to be calculated from backend",
      avgColor:
        calculateAvg(
          +localTeamCardsPercentile.over2HTPercentage["1_5"].total -
            +localTeamCardsPercentile.over2HTPercentage["2_5"].total,
          +visitorTeamCardsPercentile.over2HTPercentage["1_5"].total -
            +visitorTeamCardsPercentile.over2HTPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "1H Total Over 3",
      t1: localTeamCards.overHTPercentage["2_5"].total + "%",
      t2: visitorTeamCards.overHTPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.overHTPercentage["2_5"].total,
          visitorTeamCards.overHTPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.overHTPercentage["2_5"].total,
      t2Color: visitorTeamCardsPercentile.overHTPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.overHTPercentage["2_5"].total,
          visitorTeamCardsPercentile.overHTPercentage["2_5"].total
        ) + "%",
    },
    {
      name: "2H Total Over 3",
      t1: localTeamCards.over2HTPercentage["2_5"].total + "%",
      t2: visitorTeamCards.over2HTPercentage["2_5"].total + "%",
      avg:
        calculateAvg(
          localTeamCards.over2HTPercentage["2_5"].total,
          visitorTeamCards.over2HTPercentage["2_5"].total
        ) + "%",
      t1Color: localTeamCardsPercentile.over2HTPercentage["2_5"].total,
      t2Color: visitorTeamCardsPercentile.over2HTPercentage["2_5"].total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.over2HTPercentage["2_5"].total,
          visitorTeamCardsPercentile.over2HTPercentage["2_5"].total
        ) + "%",
    },
  ];

  const tableData1 = [
    {
      name: "Cards For Average 1H",
      t1: localTeamCards.cardsForHTAverage.total,
      t2: visitorTeamCards.cardsForHTAverage.total,
      avg: calculateAvg(
        localTeamCards.cardsForHTAverage.total,
        visitorTeamCards.cardsForHTAverage.total,
        true
      ),
      t1Color: localTeamCardsPercentile.cardsForHTAverage.total,
      t2Color: visitorTeamCardsPercentile.cardsForHTAverage.total,
      avgColor: calculateAvg(
        localTeamCardsPercentile.cardsForHTAverage.total,
        visitorTeamCardsPercentile.cardsForHTAverage.total,
        true
      ),
    },
    {
      name: "Cards For Average 2H",
      t1: localTeamCards.cardsFor2HTAverage.total,
      t2: visitorTeamCards.cardsFor2HTAverage.total,
      avg: calculateAvg(
        localTeamCards.cardsFor2HTAverage.total,
        visitorTeamCards.cardsFor2HTAverage.total,
        true
      ),
      t1Color: localTeamCardsPercentile.cardsFor2HTAverage.total,
      t2Color: visitorTeamCardsPercentile.cardsFor2HTAverage.total,
      avgColor: calculateAvg(
        localTeamCardsPercentile.cardsFor2HTAverage.total,
        visitorTeamCardsPercentile.cardsFor2HTAverage.total,
        true
      ),
    },
    {
      name: "Total Cards AVG 1H",
      t1: localTeamCards.cardsHTAverage.total,
      t2: visitorTeamCards.cardsHTAverage.total,
      avg: calculateAvg(
        localTeamCards.cardsHTAverage.total,
        visitorTeamCards.cardsHTAverage.total,
        true
      ),
      t1Color: localTeamCardsPercentile.cardsHTAverage.total,
      t2Color: visitorTeamCardsPercentile.cardsHTAverage.total,
      avgColor: calculateAvg(
        localTeamCardsPercentile.cardsHTAverage.total,
        visitorTeamCardsPercentile.cardsHTAverage.total,
        true
      ),
    },
    {
      name: "Total Cards AVG 2H",
      t1: localTeamCards.cards2HTAverage.total,
      t2: visitorTeamCards.cards2HTAverage.total,
      avg: calculateAvg(
        localTeamCards.cards2HTAverage.total,
        visitorTeamCards.cards2HTAverage.total,
        true
      ),
      t1Color: localTeamCardsPercentile.cards2HTAverage.total,
      t2Color: visitorTeamCardsPercentile.cards2HTAverage.total,
      avgColor: calculateAvg(
        localTeamCardsPercentile.cards2HTAverage.total,
        visitorTeamCardsPercentile.cards2HTAverage.total,
        true
      ),
    },
    {
      name: "Had More Cards% 1H",
      t1: localTeamCards.moreHTPercentage.total + "%",
      t2: visitorTeamCards.moreHTPercentage.total + "%",
      avg:
        calculateAvg(
          localTeamCards.moreHTPercentage.total,
          visitorTeamCards.moreHTPercentage.total
        ) + "%",
      t1Color: localTeamCardsPercentile.moreHTPercentage.total,
      t2Color: visitorTeamCardsPercentile.moreHTPercentage.total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.moreHTPercentage.total,
          visitorTeamCardsPercentile.moreHTPercentage.total
        ) + "%",
    },
    {
      name: "Had more Cards% 2H",
      t1: localTeamCards.more2HTPercentage.total + "%",
      t2: visitorTeamCards.more2HTPercentage.total + "%",
      avg:
        calculateAvg(
          localTeamCards.more2HTPercentage.total,
          visitorTeamCards.more2HTPercentage.total
        ) + "%",
      t1Color: localTeamCardsPercentile.more2HTPercentage.total,
      t2Color: visitorTeamCardsPercentile.more2HTPercentage.total,
      avgColor:
        calculateAvg(
          localTeamCardsPercentile.more2HTPercentage.total,
          visitorTeamCardsPercentile.more2HTPercentage.total
        ) + "%",
    },
  ];
  const changeTab = (i) => {
    setActive(i);
  };
  return (
    <CompWrapper
      title="1st Half / 2nd Half Cards"
      tooltip
      noFlex
      tabs={tabs}
      changeTab={changeTab}
    >
      <Grid item container className={classes.tableContainer}>
        <CardTable
          data={active === 0 ? tableData1 : tableData2}
          subTitle="Half Cards"
          teamsData={teamsData}
          extended
          size={2}
          bigSize={6}
          percentile
          // subTitleSize={4}
          // smallSubTitleSize={3}
        />
      </Grid>
    </CompWrapper>
  );
};
