import { memo, useCallback, useEffect, useMemo } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import { TopComp } from "../TeamComp/TopComp/TopComp";
import { TopFivePlayersChart } from "components/";
import { TopFivePlayerChartV5 } from "components/Layout/Charts/TopFivePlayersChart/TopFivePlayerChartV5";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    // background: "white",
    borderRadius: 20,
  },
  chartContainer: {
    height: "55em",
    paddingBottom: 15,
    width: "90em",
    "@media (max-width: 640px)": {
      height: 220,
      width: 360,
    },
  },
}));

export const TopFiveChartCard = memo(
  ({ title = "PLAYERS TO GET BOOKED", id, cards, goals }) => {
    const classes = useStyles();
    const {
      localTeamTopScorers,
      localTeamTopCardsHolders,
      localTeamTopScorersPerMatch,
      localTeamTopCardsPerMatchHolders,
      localTeamName,
      localTeamLogo,
      visitorTeamTopScorers,
      visitorTeamTopCardsHolders,
      visitorTeamTopScorersPerMatch,
      visitorTeamTopCardsPerMatchHolders,
      visitorTeamName,
      visitorTeamLogo,
      localTeamId,
      visitorTeamId,
    } = useSelector(({ h2h }) => {
      const {
        localTeamStats: {
          players: {
            topScorers: localTeamTopScorers,
            topCardsHolders: localTeamTopCardsHolders,
            topScorersPerMatch: localTeamTopScorersPerMatch,
            topCardsPerMatchHolders: localTeamTopCardsPerMatchHolders,
          },
          team: {
            name: localTeamName,
            logoPath: localTeamLogo,
            _id: localTeamId,
          },
        },
        visitorTeamStats: {
          players: {
            topScorers: visitorTeamTopScorers,
            topCardsHolders: visitorTeamTopCardsHolders,
            topScorersPerMatch: visitorTeamTopScorersPerMatch,
            topCardsPerMatchHolders: visitorTeamTopCardsPerMatchHolders,
          },
          team: {
            _id: visitorTeamId,
            name: visitorTeamName,
            logoPath: visitorTeamLogo,
          },
        },
      } = h2h;
      return {
        localTeamTopScorers,
        localTeamTopCardsHolders,
        localTeamTopScorersPerMatch,
        localTeamTopCardsPerMatchHolders,
        localTeamName,
        localTeamLogo,
        visitorTeamTopScorers,
        visitorTeamTopCardsHolders,
        visitorTeamTopScorersPerMatch,
        visitorTeamTopCardsPerMatchHolders,
        visitorTeamName,
        visitorTeamLogo,
        localTeamId,
        visitorTeamId,
      };
    }, shallowEqual);

    const md = useMediaQuery("(max-width:1265px)");

    const localTeamData = cards
      ? cards === "total"
        ? localTeamTopCardsHolders
        : localTeamTopCardsPerMatchHolders
      : goals
      ? goals === "total"
        ? localTeamTopScorers
        : localTeamTopScorersPerMatch
      : [];
    const visitorTeamData = cards
      ? cards === "total"
        ? visitorTeamTopCardsHolders
        : visitorTeamTopCardsPerMatchHolders
      : goals
      ? goals === "total"
        ? visitorTeamTopScorers
        : visitorTeamTopScorersPerMatch
      : [];

    const calculateMaxValue = useCallback(() => {
      const data = [...localTeamData, ...visitorTeamData];
      let goalsType = goals,
        cardsType = cards;
      let maxValue = 0;
      data.forEach(({ goals, cards, goalsPerMatch, cardsPerMatch }) => {
        if (
          (goalsType === "total" && goals !== 0) ||
          (goalsType === "perMatch" && goalsPerMatch !== 0) ||
          (cardsType === "total" && cards !== 0) ||
          (cardsType === "perMatch" && cardsPerMatch !== 0)
        ) {
          let value = goalsType
            ? goalsType === "total"
              ? goals
              : goalsPerMatch?.toFixed(2)
            : cardsType
            ? cardsType === "total"
              ? cards
              : cardsPerMatch?.toFixed(2)
            : 0;

          if (value > +maxValue) {
            maxValue = value;
          }
        }
      });

      return maxValue;
    }, [localTeamData, visitorTeamData]);

    calculateMaxValue();

    let maxValue = useMemo(
      () => calculateMaxValue(),
      [localTeamData, visitorTeamData]
    );

    return (
      <Grid container className={classes.container}>
        <Grid item xs={md ? 12 : 6}>
          <CompWrapper tooltip title={title} noBorderRadius="14px 0 0 14px">
            <TopComp
              bgColor="linear-gradient(270deg, rgba(0, 163, 152, 0) 0%, rgba(0, 163, 152, 0.09) 100%)"
              teamName={localTeamName}
              teamLogo={localTeamLogo}
            />
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={classes.chartContainer}
            >
              {localTeamData ? (
                <TopFivePlayerChartV5
                  id={id + localTeamId}
                  color="#FB5266"
                  data={localTeamData}
                  cardsType={cards}
                  goalsType={goals}
                  maxValue={maxValue}
                />
              ) : (
                <Typography>No Data Yet For This Season</Typography>
              )}
            </Grid>
          </CompWrapper>
        </Grid>
        <Grid item xs={md ? 12 : 6}>
          <CompWrapper tooltip title={title} noBorderRadius="0 14px 14px 0">
            <TopComp
              bgColor="linear-gradient(270deg, rgba(198, 3, 12, 0) 0%, rgba(198, 3, 12, 0.07) 100%)"
              teamName={visitorTeamName}
              teamLogo={visitorTeamLogo}
            />
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={classes.chartContainer}
            >
              {visitorTeamData ? (
                <TopFivePlayerChartV5
                  id={id + visitorTeamId}
                  color="#FB5266"
                  data={visitorTeamData}
                  cardsType={cards}
                  goalsType={goals}
                  maxValue={maxValue}
                />
              ) : (
                <Typography>No Data Yet For This Season</Typography>
              )}
            </Grid>
          </CompWrapper>
        </Grid>
      </Grid>
    );
  }
);
