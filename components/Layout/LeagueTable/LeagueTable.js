import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

// import NavItem from "components/MatchComparisonPage/Header/TopHeader/NavBar/Navigation/NavItem/NavItem";
import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
import { ToolTipWrapper } from "components";

const useStyles = makeStyles(({ palette }) => ({
  rightComp: {
    borderRadius: 10,
    boxShadow: "2px 2px 10px -1px rgba(0,0,0,0.1)",
    position: "relative",
    paddingTop: 22,
    width: "100%",
    height: "100%",
  },
  topComp: {
    backgroundColor: "#D1D5DB",
    height: 22,
    color: `${palette.primary.main}`,
    padding: "0px 2em",
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    textTransform: "uppercase",
  },
  order: {
    // backgroundColor: "#CFE6A5",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5em",
    fontWeight: 700,
    width: "2.1em",
    height: "2.1em",
    lineHeight: "15px",
    color: "rgba(103, 127, 152, 1)",
    "@media (max-width: 960px)": {
      width: 11,
      height: 11,
    },
    borderRadius: "50%",
    textAlign: "center",
  },
  rowContainer: {
    color: "#6B7281",
  },
  container: {
    flex: 1,
    paddingBottom: "1em",
    "& > div": {
      textAlign: "center",
      height: "7em",
      // "@media only screen and (max-width:1540px)": {
      //   fontSize: 19,
      // },
      padding: "0 3em",
      "&:hover": {
        backgroundColor: ({ h2h }) => h2h && "#F4F6F9 !important",
      },
    },
    "& > div:nth-child(even)": {
      background: ({ h2h }) =>
        !h2h &&
        "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
    },
    // padding: "0px 5px",
  },
  imageContainer: {
    marginRight: 8,
  },
  image: {
    objectFit: "scale-down",
  },
  teamName: {
    color: "#A0B0CB",
    fontSize: "1.2rem",
    fontWeight: 600,
    "@media (max-width: 1440px)": {
      fontSize: "1rem",
    },
  },
  headerTitles: {
    color: "rgba(2, 42, 84, 0.6)",
    textTransform: "uppercase",
  },
  position: {
    fontSize: 10,
    lineHeight: "10px",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: 8,
    },
  },
}));
export const LeagueTable = ({
  header,
  data,
  h2h,
  head,
  flex,
  height,
  results,
}) => {
  const classes = useStyles({ h2h });
  const {
    leagueStandings,
    localTeamStats: {
      team: { name: localName },
    },
    visitorTeamStats: {
      team: { name: visitorName },
    },
  } = useSelector((state) => state.h2h);

  if (!leagueStandings?.length) {
    return <></>;
  }

  const renderHeader = useCallback(() => {
    return header.map(({ item, size }, i) => {
      return (
        <React.Fragment key={i}>
          {i === 0 ? (
            <Grid item style={{ width: 18 }}></Grid>
          ) : (
            <Grid
              item
              container
              justifyContent={i === 1 ? "flex-start" : "center"}
              xs={size}
            >
              <Typography variant="caption" className={classes.headerTitles}>
                {item}
              </Typography>
            </Grid>
          )}
        </React.Fragment>
      );
    });
  }, [results]);
  const headerMemo = renderHeader();
  const renderData = useCallback(
    (key) => {
      return (
        data?.length &&
        data?.map(
          (
            {
              teamName,
              teamLogo,
              overall: {
                position,
                gamesPlayed,
                won,
                goalsScored,
                goalsAgainst,
                points,
                goalsDifference,
              },
              result,
            },
            i
          ) => {
            return (
              <React.Fragment key={key + i}>
                <Grid
                  item
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  className={classes.rowContainer}
                  wrap="nowrap"
                  // style={{
                  //   backgroundColor: `${
                  //     h2h && [localName, visitorName].includes(teamName)
                  //       ? "rgb(237, 243, 255)"
                  //       : "#fff"
                  //   }`,
                  // }}
                >
                  <Grid
                    item
                    sx={{ display: "flex" }}
                    alignItems="center"
                    wrap="nowrap"
                  >
                    <Grid
                      item
                      style={{
                        background: `hsl(${
                          240 - results[result] * 30
                        }, 57%, 52%)`,
                        width: 3,
                        borderRadius: "50px",
                        marginRight: 6,
                        height: 20,
                        padding: 2,
                      }}
                    ></Grid>
                    {result ? (
                      <ToolTipWrapper title={result}>
                        <Grid item className={classes.order}>
                          <Typography className={classes.position}>
                            {position || "-"}
                          </Typography>
                        </Grid>
                      </ToolTipWrapper>
                    ) : (
                      <Grid item className={classes.order}>
                        <Typography
                          style={
                            {
                              // color: "#333641",
                            }
                          }
                          className={classes.position}
                        >
                          {position || "-"}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                  <Grid
                    item
                    container
                    xs={h2h ? 3 : 4}
                    alignItems="center"
                    wrap="nowrap"
                  >
                    <Grid item className={classes.imageContainer}>
                      <Grid container alignItems="center">
                        <Image
                          src={teamLogo}
                          width={12}
                          height={16}
                          className={classes.image}
                          alt={teamName}
                        />
                      </Grid>
                    </Grid>

                    <Grid item xs={10} style={{ textAlign: "left" }}>
                      <Typography align="left" className={classes.teamName}>
                        {teamName || "-"}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="caption">
                      {gamesPlayed ?? "-"}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="caption">
                      {`${
                        gamesPlayed > 0
                          ? Math.round((won / gamesPlayed) * 100)
                          : 0
                      }%`}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="caption">
                      {goalsScored ?? "-"}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="caption">
                      {goalsAgainst ?? "-"}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="caption">
                      {goalsDifference ?? "-"}
                    </Typography>
                  </Grid>

                  <Grid item xs={1}>
                    <Typography variant="caption" style={{ color: "#266BFC" }}>
                      {points || 0}
                    </Typography>
                  </Grid>

                  <Grid item xs={1}>
                    <Typography variant="caption">
                      {gamesPlayed > 0 ? (points / gamesPlayed).toFixed(2) : 0}
                    </Typography>
                  </Grid>
                </Grid>
              </React.Fragment>
            );
          }
        )
      );
    },
    [data, results]
  );
  const dataMemo = useMemo(() => renderData(10), [data, results]);
  return (
    <CompWrapper head={head} flex={flex} height={height}>
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        className={classes.container}
      >
        <Grid item container alignItems="center" justifyContent="space-between">
          {headerMemo}
        </Grid>
        {dataMemo}
      </Grid>
    </CompWrapper>
  );
};
