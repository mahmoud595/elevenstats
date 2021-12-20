import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, useMediaQuery, Hidden } from "@mui/material";

import { TeamCompContainer } from "./TeamComp/TeamCompContainer";
import { GoalsCard } from "./GoalsCard/GoalsCard";
import { HeadToHeadRecord } from "./HeadToHeadRecord/HeadToHeadRecord";
import { Form } from "./Form/Form";
import { OddsMarketCard } from "./OddsMarketCard/OddsMarketCard";
import { Upgrade } from "./Upgrade/Upgrade";
import { OverCard } from "./Over2.5&BttsTipsCard/OverCard";
import { NumberOfCornersCard } from "./NumberOfCornersCard/NumberOfCornersCard";
import { TeamCorners } from "./TeamCorners/TeamCorners";
// import ThreeCardsContainer from "./ThreeCardsContainer/ThreeCardsContainer";
import { Wdl } from "./Wdl/Wdl";
import { FisrSecondHalfCard } from "./FisrSecondHalfCard/FisrSecondHalfCard";
import { GoalRangeCard } from "./GoalRangeCard/GoalRangeCard";
import { SOFCard } from "./SOFCard/SOFCard";
// import { SofHaUpCardsContainer } from "./SOF&HA&upContainer/SOF&HA&upContainer";
import { WhoIsLikelyCard } from "./WhoIslikelyCard/WhoIslikelyCard";
import { NumberCardsContainer } from "./NumberCardsContainer/NumberCardsContainer";
import { TopFiveChartCard } from "./TopFiveChartCard/TopFiveChartCard";

import { MostPlayed } from "./MostPlayed/MostPlayed";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "0 !important",
    "& > div": {
      marginBottom: "5em",
    },

    "& > div:nth-child(odd),& > div:nth-child(11),& > div:nth-child(14),& > div:nth-child(18)":
      {
        paddingRight: "5em",
        "@media (max-width: 1280px)": {
          paddingRight: 0,
        },
      },

    "& > div:nth-child(7) ,& > div:nth-child(10),& > div:nth-child(12),& > div:nth-child(13),& > div:nth-child(15),& > div:nth-child(17),& > div:nth-child(19),& > div:nth-child(21),& > div:nth-child(23)":
      {
        paddingRight: "0",
      },
  },
  "& > div:nth-child(7)": {
    "@media (max-width: 640px)": {
      marginBottom: 0,
    },
  },
  topFiveChartCard: {
    marginBottom: "0 !important",
    "& > div": {
      paddingLeft: "3em",
      // maxHeight: "62vh",
      marginBottom: "4.6vh",
    },
  },
}));

export const CardsContainer = React.memo(({ selected }) => {
  const classes = useStyles();

  const md = useMediaQuery("(max-width:1280px)");
  const sm = useMediaQuery("(max-width:913px)");

  return (
    <Grid
      item
      container
      // justifyContent="space-between"
      justifyContent="center"
      //   alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        xs={md ? 12 : 8}
        style={{
          display: selected === "all" ? "block" : "none",
        }}
      >
        <TeamCompContainer />
      </Grid>

      <Grid
        item
        xs={12}
        md={md ? 12 : 4}
        style={{ display: selected === "all" ? "block" : "none" }}
      >
        <Upgrade />
      </Grid>

      <Grid
        item
        xs={md ? 12 : 8}
        style={{ display: selected === "all" ? "block" : "none" }}
      >
        <Form />
      </Grid>
      <Grid
        item
        xs={12}
        md={md ? 12 : 4}
        style={{ display: selected === "all" ? "block" : "none" }}
      >
        <OddsMarketCard />
      </Grid>
      <Grid
        item
        xs={md ? 12 : 8}
        style={{ display: selected === "all" ? "block" : "none" }}
      >
        <HeadToHeadRecord />
      </Grid>
      <Grid
        item
        xs={12}
        md={md ? 12 : 4}
        style={{
          display: selected === "all" ? "block" : "none",
          paddingTop: !md ? "45px" : 0,
        }}
      >
        <Upgrade />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: selected === "all" ? "flex" : "none",
        }}
      >
        <SOFCard />
      </Grid>

      <Grid
        item
        xs={12}
        container
        style={{
          display: ["all", "goals"].includes(selected) ? "flex" : "none",
          // marginBottom: '3rem',
        }}
      >
        <WhoIsLikelyCard />
      </Grid>

      <Grid
        item
        xs={12}
        md={md ? 12 : selected === "goals" ? 6 : 8}
        style={{
          display: ["all", "goals"].includes(selected) ? "block" : "none",
        }}
      >
        <GoalRangeCard />
      </Grid>

      <Grid
        item
        xs={12}
        md={md ? 12 : selected === "goals" ? 6 : 4}
        style={{
          display: ["all", "goals"].includes(selected) ? "block" : "none",
        }}
      >
        <GoalsCard
          title="Goals Conceded"
          subTitle="Conceded / Game"
          headerVaraint="h5"
          conceded
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={md ? 12 : selected === "goals" ? 12 : 8}
        style={{
          display: ["all", "goals"].includes(selected) ? "block" : "none",
          // paddingRight: 0
          ...(["goals"].includes(selected) && { paddingRight: 0 }),
        }}
      >
        <GoalsCard title="Goals  scored" subTitle="Scored per match" />
      </Grid>
      <Grid
        item
        xs={md ? 12 : 4}
        style={{
          display: selected === "all" ? "block" : "none",
        }}
      ></Grid>

      <Grid
        item
        xs={md ? 12 : selected === "goals" ? 12 : 12}
        style={{
          display: ["all", "goals"].includes(selected) ? "block" : "none",
        }}
      >
        <OverCard />
      </Grid>

      <Grid
        item
        xs={md ? 12 : 8}
        style={{
          display: ["all", "corners"].includes(selected) ? "block" : "none",
        }}
      >
        <NumberOfCornersCard />
      </Grid>

      <Grid
        item
        xs={12}
        md={md ? 12 : 4}
        style={{
          display: ["all", "corners"].includes(selected) ? "block" : "none",
        }}
      >
        <TeamCorners />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: ["all", "cards"].includes(selected) ? "block" : "none",
        }}
      >
        <NumberCardsContainer />
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: ["all", "players"].includes(selected) ? "block" : "none",
        }}
      >
        <TopFiveChartCard id="4adf64f6" title="top Scorers" goals="total" />
      </Grid>

      <Grid
        item
        container
        direction="column"
        md={md ? 12 : selected === "half" ? 6 : 8}
        style={{
          display: ["all", "half"].includes(selected) ? "flex" : "none",
        }}
      >
        <FisrSecondHalfCard />

        <MostPlayed />
      </Grid>

      <Grid
        item
        xs={12}
        md={md ? 12 : selected === "half" ? 6 : 4}
        style={{
          display: ["all", "half"].includes(selected) ? "block" : "none",
        }}
      >
        <Wdl />
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: ["all", "players"].includes(selected) ? "block" : "none",
        }}
      >
        <TopFiveChartCard
          title="top Cards Holders"
          cards="total"
          id="4adsdgsdsvv64f56"
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: ["all", "players"].includes(selected) ? "block" : "none",
        }}
      >
        <TopFiveChartCard
          title="top Scorers Per Match"
          goals="perMatch"
          id="4adsdg5sdsav64f6"
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: ["all", "players"].includes(selected) ? "block" : "none",
        }}
      >
        <TopFiveChartCard
          title="top Cards Per Match Holders"
          cards="perMatch"
          id="4ad5sdgsdsbv64f6"
        />
      </Grid>
    </Grid>
  );
});
