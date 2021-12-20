import React, { useEffect, memo, useCallback, useState } from "react";
// import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";

import { Btn } from "components";
import apiAxios from "utils/apiAxios";
import { startEndDate } from "utils/helperFunctions/homeHelperFunctions";

const AllLeagueHeaderContainer = styled(Grid)(() => ({
  "& .container": {
    cursor: "pointer",
    borderRadius: "12px",

    "@media (max-width:640px)": {
      padding: "10px 6px",
    },
  },

  "& .leagueGrid": {
    marginLeft: "2em",
  },
  "& .leagueName": {
    fontSize: "2em",
    lineHeight: "19px",
    color: "#022A54",
    fontWeight: 600,
    textTransform: "uppercase",
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
      // lineHeight: "1px",
    },
    "@media (max-width:640px)": {
      fontSize: "8px",
      lineHeight: "9px",
    },
  },
  "& .fixturesCountGrid": {
    marginLeft: "2.5em",
  },
  "& .fixturesCount": {
    fontSize: "2em",
    color: "#8195AA",
  },
  "& .loading": {
    marginBottom: "5px",
  },
  "& .iconRightGrid": {
    // backgroundColor: ({ collapsed, index }) =>
    //   collapsed[index] ? "#F6F7FA" : "#DBE4EF",
    borderRadius: "50%",
    marginLeft: "2em",
    padding: 5,
  },
  "& .iconRight": {
    fontSize: "3em",
    color: "#A1B5C9",
    // transform: ({ collapsed, index }) => collapsed[index] && "rotateX(180deg)",
    "@media (max-width:640px)": {
      fontSize: "16px",
    },
  },
}));

export const LeagueContainerHeader = memo(
  ({
    collapsed,
    setCollapsed,
    name,
    countryLeague,
    fixturesCount,
    fixturesLength,
    slug,
    newFixturesLength,
    setNewFixtures,
    leagueImage,
    i,
    count,
  }) => {
    const [loading, setLoading] = useState(false);

    const [matchesNumber, setMatchesNumber] = useState(
      ` ${fixturesCount} Matches`
    );
    const router = useRouter();
    const { timeZone, date } = useSelector(({ home }) => {
      const { timeZone, date } = home;
      return {
        timeZone,
        date,
      };
    });

    useEffect(() => {
      fixturesCount && !fixturesLength && setCollapsed(true);
    }, [fixturesCount, fixturesLength]);

    // console.lo);
    const fetchFixtures = async () => {
      try {
        setLoading(true);
        const res = await apiAxios.get(
          `/fixtures/leagues/${slug}?from=${
            startEndDate(timeZone, date)[0]
          }&to=${startEndDate(timeZone, date)[1]}`
        );

        const data = res?.data?.data;

        const fixtures = data?.fixtures;
        setNewFixtures(fixtures);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    const collapseHandler = async () => {
      if (router.pathname !== "live") {
        if (!fixturesLength) {
          if (!newFixturesLength) {
            await fetchFixtures();
          }
        }
        setCollapsed(!collapsed);
      }
    };

    useEffect(() => {
      if (newFixturesLength) {
        setMatchesNumber(`${newFixturesLength} / ${fixturesCount} Matches`);
      }
      if (fixturesLength && !count) {
        setMatchesNumber(`${fixturesLength} / ${fixturesCount} Matches`);
      }
    }, [fixturesCount, newFixturesLength, fixturesLength]);

    useEffect(() => {
      if (count) {
        setMatchesNumber(`${count} / ${fixturesCount} Matches`);
      }
    }, [count, fixturesCount, newFixturesLength]);

    return (
      <AllLeagueHeaderContainer
        item
        container
        sx={{ padding: !collapsed ? "6px" : 0 }}
      >
        <Grid
          item
          container
          // className={classes.container}
          sx={{
            padding: !collapsed ? "6px 5em" : "14px 5em",
            background: !collapsed ? "#F4F8FF" : "transparent",
          }}
          className="container"
          justifyContent="space-between"
          onClick={collapseHandler}
        >
          <Grid item container sm={4} xs={8} alignItems="center" wrap="nowrap">
            <Grid item>
              {countryLeague?.imagePath || leagueImage ? (
                <Image
                  src={countryLeague?.imagePath || leagueImage}
                  alt={name}
                  width={26}
                  height={18}
                  layout="fixed"
                  priority={i <= 2 ? true : false}
                />
              ) : null}
            </Grid>
            <Grid item className="leagueGrid">
              <Typography className="leagueName">
                {countryLeague?.name} - {name}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              wrap="nowrap"
            >
              {router.pathname !== "/live" ? (
                <Grid item className="fixturesCountGrid">
                  <Typography className="fixturesCount">
                    {matchesNumber}
                  </Typography>
                </Grid>
              ) : (
                <></>
              )}

              <Grid
                item
                className="iconRightGrid"
                onClick={collapseHandler}
                sx={{
                  backgroundColor: collapsed ? "#F6F7FA" : "#DBE4EF",
                }}
              >
                {loading ? (
                  <ReactLoading
                    type="spin"
                    color="#A1B5C9"
                    height={15}
                    width={20}
                    className="loading"
                  />
                ) : (
                  <Btn lowSizePadding="0">
                    <KeyboardArrowUpIcon
                      size="large"
                      className="iconRight"
                      sx={{
                        transform: collapsed
                          ? "rotateX(180deg)"
                          : "rotateX(0deg)",
                      }}
                    />
                  </Btn>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AllLeagueHeaderContainer>
    );
  }

  // (prevProps, nextProps) => {
  //   if (
  //     (prevProps.index == nextProps.index &&
  //       prevProps.collapsed[prevProps.index] !==
  //         nextProps.collapsed[prevProps.index]) ||
  //     (prevProps.index == nextProps.index &&
  //       prevProps.count[prevProps.index] !== nextProps.count[prevProps.index])
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }
);
