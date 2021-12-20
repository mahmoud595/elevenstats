import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { Penalities } from "public";
import { SingleRow } from "./SingleRow/SingleRow";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    //  flex: 1,
    marginTop: 10,

    overflowY: "auto",

    height: 267,

    "@media (min-width: 1540px)": {
      height: 300,
    },
    "@media (min-width: 1700px)": {
      height: 350,
    },
  },
  minute: {
    fontSize: 14,
    fontWeight: 700,

    color: "#FFF",
    lineHeight: "19px",
  },
  minutesContainer: {
    backgroundColor: "#246BFD",
    height: 35,
    width: 35,
    "@media (max-width: 1100px)": {
      height: 28,
      width: 28,
    },
    borderRadius: "50%",
  },
  hr: {
    width: 10,
    "@media (max-width: 1100px)": {
      width: 7,
    },
    transform: "rotate(90deg)",
    backgroundColor: "#D1D5DB",
    color: "#D1D5DB",
    borderColor: "#D1D5DB",
    borderStyle: "solid",
  },
  penaltiesTitle: {
    color: "#FB5266",

    fontSize: 11,
    fontWeight: 600,
    lineHeight: "9px",
  },
  penaltiesHeaderContainer: {
    padding: "5px 0px 5px 15px ",
  },
  imgContainer: {
    marginRight: 14,
    "& svg": {
      width: 24,
      height: 15,
    },
  },
}));

export const PenaltiesEvent = ({
  previousType,
  teamId,
  localTeamId,
  nextTeamId,
  nextPlayerName,
  minute,
  nextMinute,
  playerName,
  previousMinute,
  currentType,
  nextType,
}) => {
  const classes = useStyles();
  return (
    <>
      {" "}
      {previousType !== "pen_shootout_goal" &&
      previousType !== "pen_shootout_miss" ? (
        <Grid item container direction="column">
          <Grid container justifyContent="flex-end">
            <Grid
              item
              container
              xs={7}
              className={classes.penaltiesHeaderContainer}
              alignItems="center"
            >
              <Grid
                item
                container
                xs={2}
                justifyContent="center"
                alignItems="center"
                className={classes.imgContainer}
              >
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Penalities />
                </Grid>
              </Grid>

              <Grid item>
                <Typography className={classes.penaltiesTitle}>
                  penalteis
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <hr className={classes.hr} />
          <hr className={classes.hr} />

          <SingleRow
            teamId={teamId}
            localTeamId={localTeamId}
            currentType={currentType}
            playerName={playerName}
            nextPlayerName={nextPlayerName}
            nextTeamId={nextTeamId}
            nextType={nextType}
          />
        </Grid>
      ) : nextMinute && nextMinute == minute ? (
        <SingleRow
          teamId={teamId}
          localTeamId={localTeamId}
          currentType={currentType}
          playerName={playerName}
          nextPlayerName={nextPlayerName}
          nextTeamId={nextTeamId}
          nextType={nextType}
        />
      ) : nextMinute && nextMinute !== minute ? null : previousMinute ==
        minute ? null : (
        <SingleRow
          teamId={teamId}
          localTeamId={localTeamId}
          currentType={currentType}
          playerName={playerName}
          nextPlayerName={nextPlayerName}
          nextTeamId={nextTeamId}
          nextType={nextType}
        />
      )}
    </>
  );
};
