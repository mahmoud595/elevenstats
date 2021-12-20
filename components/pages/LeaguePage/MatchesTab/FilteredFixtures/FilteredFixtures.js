import { useCallback } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Fragment } from "react";
import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  fixturesWrapper: {
    marginTop: 31,
  },
  dateText: {
    fontSize: "2em",
    lineHeight: "29px",
    color: "#A1B5C9",
    fontWeight: 600,
  },
  matchCard: {
    margin: "16px 3.7em 0 0",
    padding: "16px 2.3em",
    background: "#fff",
    boxShadow: "12.2076px 6.74284px 71.0912px rgba(134, 134, 134, 0.1)",
    borderRadius: "8px",
    display: "flex",
  },
  dashGrid: {
    alignSelf: "flex-end",
    margin: "0 2.3em",
  },
  teamNameGrid: {
    margin: "8px 0 12px 0",
  },
  teamName: {
    fontSize: "1.5em",
    fontWeight: 600,
    lineHeight: "12px",
    color: "#333641",
    textTransform: "uppercase",
  },
  score: {
    fontSize: "2.5em",
    lineHeight: "18px",
    fontWeight: 600,
    color: "#022A54",
  },
  dash: {
    fontSize: "2.3em",
    lineHeight: "18px",
    color: "#A1B5C9",
    fontWeight: 600,
  },
}));

export const FilteredFixtures = ({ data }) => {
  const classes = useStyles();
  const team = useCallback((teamName, teamLogo, score) => {
    return (
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <Image src={teamLogo} width={36} height={37} alt="team name" />
        </Grid>

        <Grid item className={classes.teamNameGrid}>
          <Typography className={classes.teamName}>{teamName}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.score}>{score}</Typography>
        </Grid>
      </Grid>
    );
  }, []);
  return (
    <Grid item container direction="column">
      {Object.keys(data).map((date, i) => (
        <Grid
          item
          container
          direction="column"
          className={classes.fixturesWrapper}
          key={i}
        >
          <Grid item>
            <Typography className={classes.dateText}>{date}</Typography>
          </Grid>
          <Grid item container>
            {new Array(data[date]).fill(null).map((val, i) => (
              <Grid
                item
                className={classes.matchCard}
                justifyContent="space-between"
                key={i}
              >
                {team(
                  "liverpool f.c",
                  "https://cdn.sportmonks.com/images/soccer/teams/12/460.png",
                  2
                )}
                <Grid item className={classes.dashGrid}>
                  <Typography className={classes.dash}>-</Typography>
                </Grid>
                {team(
                  "manchester utd",
                  "https://cdn.sportmonks.com/images//soccer/teams/27/7931.png",
                  1
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
