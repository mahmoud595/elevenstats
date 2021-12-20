import React, { useState, useEffect, memo, useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
// import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import apiAxios from "utils/apiAxios";
import { SingleMatch } from "./SingleMatch/SingleMatch";
import { startEndDate } from "utils/helperFunctions/homeHelperFunctions";
import { calculateAverageValues } from "utils/helperFunctions/homeHelperFunctions";
import Btn from "components/Layout/Btn/Btn";

import { ShowAll } from "public";

const MatchesContainer = styled(Grid)(() => ({
  willChange: "transform",
  transform: "translateZ(0)",
  marginTop: "14px",
  "& > a": {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "auto",
  },
  "& .showAllGrid": {
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
  },
  "& .showAllText": {
    fontSize: "2em",
    fontWeight: 600,
    color: "#246BFD",
    lineHeight: "12px",
    whiteSpace: "nowrap",
  },
  "& .iconGrid": {
    marginLeft: "2em",
    "@media (max-width:640px)": {
      "&>svg": {
        width: 6,
        height: 6,
      },
      marginTop: 1,
    },
  },
}));

const LeagueMatches = memo(
  ({
    fixtures,
    collapsed,
    newFixtures,
    setHiddenLeague,
    slug,
    leagueType,
    isPopular,
    fixturesCount,
    setCount,
  }) => {
    // const classes = useStyles({ collapsed });

    // const date = useRouter().query.data[2];
    const [filteredFixtures, setFilteredFixtures] = useState(fixtures || []);
    const [loading, setLoading] = useState(false);
    const { type, sort, date, timeZone } = useSelector(({ home }) => {
      const { type, sort, date, timeZone } = home;
      return {
        type,
        sort,
        date,
        timeZone,
      };
    }, shallowEqual);

    // console.log("pass 2");
    const router = useRouter();
    useEffect(() => {
      if (router.pathname === "/") {
        if (newFixtures?.length) {
          setFilteredFixtures(newFixtures);
        }

        if (
          (type === "Popular" && isPopular) ||
          (type === "International" &&
            ["international", "cup_international "].includes(leagueType)) ||
          type === "All Leagues"
        ) {
          !newFixtures?.length && setFilteredFixtures(fixtures);

          setHiddenLeague(false);
        } else {
          setHiddenLeague(true);
        }
      }
    }, [type, fixtures, newFixtures, leagueType, sort]);

    useEffect(() => {
      let newFilteredFixtures = [...filteredFixtures];
      newFilteredFixtures.sort((fixture1, fixture2) => {
        let a = calculateAverageValues(
          sort.by,
          fixture1.localTeam?.stats,
          fixture1.visitorTeam?.stats,
          sort.by === "xG (H)"
        );

        let b = calculateAverageValues(
          sort.by,
          fixture2.localTeam?.stats,
          fixture2.visitorTeam?.stats,
          sort.by === "xG (H)"
        );

        if (sort.order === "asc") {
          return a - b;
        } else {
          return b - a;
        }
      });

      setFilteredFixtures(newFilteredFixtures);
    }, [sort]);
    const seeAllHandler = useCallback(
      async (slug) => {
        try {
          setLoading(true);
          const res = await apiAxios.get(
            `/fixtures/leagues/${slug}?from=${
              startEndDate(timeZone, date)[0]
            }&to=${startEndDate(timeZone, date)[1]}`
          );

          const data = res?.data?.data;

          const fixtures = data?.fixtures;
          setFilteredFixtures(fixtures);
          setLoading(false);

          setCount(fixtures?.length);
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      },
      [timeZone, date, slug, loading]
    );
    return (
      <MatchesContainer
        item
        container
        direction="column"
        sx={{
          display: collapsed ? "none" : "flex",
          "@media (max-width:640px)": {
            borderRadius: !collapsed ? "10px" : 0,
          },
        }}
        // className={classes.matchesContainer}
      >
        {filteredFixtures?.length ? (
          <>
            {filteredFixtures?.map(
              ({ time, localTeam, visitorTeam, scores, slug, odds }, i) => (
                <SingleMatch
                  slug={slug}
                  scores={scores}
                  visitorTeam={visitorTeam}
                  localTeam={localTeam}
                  time={time}
                  // i={`${time?.status}${i}`}
                  odds={odds}
                  key={slug}
                  date={date}
                />
              )
            )}
          </>
        ) : null}
        {filteredFixtures?.length > 0 &&
        fixturesCount > filteredFixtures.length ? (
          <Grid item className="showAllGrid">
            <Btn
              backgroundColor="#F1F5FE"
              borderRadius="50px"
              padding="9px 3em"
              lowSizePadding="6px 3em"
              onClick={() => seeAllHandler(slug)}
            >
              <Grid container alignItem="center" wrap="nowrap">
                <Grid item>
                  <Typography className="showAllText">
                    {loading
                      ? "loading"
                      : `Show More ${
                          fixturesCount - filteredFixtures?.length
                        } Matches`}
                  </Typography>
                </Grid>
                <Grid item className="iconGrid" container alignItems="center">
                  <ShowAll />
                </Grid>
              </Grid>
            </Btn>
          </Grid>
        ) : (
          <></>
        )}
      </MatchesContainer>
    );
  }
);
(prevProps, nextProps) => {
  if (
    prevProps.newFixtures !== nextProps.newFixtures ||
    prevProps.fixtures !== nextProps.fixtures
  ) {
    return false;
  }
  return true;
};

export default LeagueMatches;
