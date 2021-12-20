import React, { useCallback, useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { CardWrapper } from "../CardWrapper/CardWrapper";

import Image from "next/image";
import { StopWatch } from "public";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    // height: "17.8em",
    background: "#fff",
    borderRadius: "20px",
    marginTop: "2em",
    width: "100%",
    "@media (max-width:1280px)": {
      marginTop: "5em",
    },
  },
  playerName: {
    fontWeight: 700,
    fontSize: 12,
  },
  teamName: {
    fontWeight: 400,
    fontSize: 10,
    color: "#022A54",
    fontWeight: 500,
  },
  rightSide: {
    marginLeft: 10,
  },
  card: {
    margin: "0 15px",
    minWidth: 164,
  },
  playerNameContainer: {
    marginBottom: 6,
  },
  imgContainer: {
    marginRight: 3,
  },
  minsImgContainer: {
    marginRight: 3,
    marginLeft: 2,
    display: "flex",
    alignItems: "center",
    "&>svg": {
      width: 8,
      height: 10,
    },
  },
  scrollContainer: {
    overflowX: "auto",
    marginBottom: 4,
    flex: 1,
    paddingBottom: 20,
  },
}));

export const MostPlayed = () => {
  const classes = useStyles();
  const { localTopMostPlayed, visitorTopMostPlayed, localTeam, visitorTeam } =
    useSelector(({ h2h }) => {
      const {
        localTeamStats: {
          players: { topMostPlayed: localTopMostPlayed },
          team: localTeam,
        },
        visitorTeamStats: {
          players: { topMostPlayed: visitorTopMostPlayed },
          team: visitorTeam,
        },
      } = h2h;
      return {
        localTopMostPlayed,
        visitorTopMostPlayed,
        localTeam,
        visitorTeam,
      };
    }, shallowEqual);
  const localMostPlayed = localTopMostPlayed.map((player) => ({
    ...player,
    team: localTeam,
  }));
  const visitorMostPlayed = visitorTopMostPlayed.map((player) => ({
    ...player,
    team: visitorTeam,
  }));
  const topMostPlayed = [...localMostPlayed, ...visitorMostPlayed];
  const filteredTopMostPlayed = useCallback(() => {
    return topMostPlayed.sort((a, b) => {
      return b?.minutesPlayed - a?.minutesPlayed;
    });
  }, [topMostPlayed]);
  const memoizedFilteredPlayers = useMemo(
    () => filteredTopMostPlayed(),
    [topMostPlayed]
  );
  const topPlayersPlayed = useCallback(() => {
    return memoizedFilteredPlayers.map(({ player, minutesPlayed, team }, i) => (
      <Grid key={i} item className={classes.card}>
        <Grid container wrap="nowrap">
          <Grid item>
            <Image
              src={
                player?.imagePath ||
                "https://cdn.sportmonks.com/images/soccer/placeholder.png"
              }
              alt={`image for ${player?.commonName}`}
              width={34}
              height={34}
            />
          </Grid>
          <Grid item className={classes.rightSide}>
            <Grid container wrap="nowrap" direction="column">
              <Grid item className={classes.playerNameContainer}>
                <Typography color="primary" className={classes.playerName}>
                  {player?.commonName}
                </Typography>
              </Grid>

              <Grid item container wrap="nowrap" alignItems="center">
                <Grid item>
                  <Grid
                    container
                    className={classes.imgContainer}
                    alignItems="center"
                  >
                    <Image
                      src={
                        team?.logoPath ||
                        "https://cdn.sportmonks.com/images/soccer/team_placeholder.png"
                      }
                      alt={`image for ${team?.name}`}
                      width={12}
                      height={12}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography color="primary" className={classes.teamName}>
                    {team?.name}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container wrap="nowrap" style={{ marginTop: 2 }}>
                <Grid className={classes.minsImgContainer}>
                  <StopWatch />
                </Grid>

                <Grid
                  item
                  sx={{
                    backgroundColor: "rgba(36, 107, 253, 0.05)",
                    padding: "4px 13px 4px 8px",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    color="primary"
                    className={classes.teamName}
                    style={{ color: "#246BFD" }}
                  >
                    {minutesPlayed} Mins
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    ));
  }, [memoizedFilteredPlayers]);
  const memoizedTopPlayers = useMemo(
    () => topPlayersPlayed(),
    [memoizedFilteredPlayers]
  );
  return (
    <Grid item className={classes.root}>
      <CardWrapper title="most played time">
        <Grid
          container
          wrap="nowrap"
          alignItems="center"
          className={classes.scrollContainer}
        >
          {memoizedTopPlayers}
        </Grid>
      </CardWrapper>
    </Grid>
  );
};
