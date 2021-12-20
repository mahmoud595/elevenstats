import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";

import { shallowEqual, useSelector } from "react-redux";

import { SingleEvent } from "./SingleEvent/SingleEvent";
import { DoubleEvent } from "./DoubleEvent/DoubleEvent";
import { PenaltiesEvent } from "./PenaltiesEvent/PenaltiesEvent";
import { KickHalfFullTime } from "./KickHalfFullTime/KickHalfFullTime";
import { EventMinute } from "./EventMinute/EventMinute";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    //  flex: 1,
    // marginTop: 10,
    overflowY: "auto",

    height: 267,

    "@media (min-width: 1540px)": {
      height: 300,
    },
    "@media (min-width: 1700px)": {
      height: 350,
    },
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
}));

export const Events = () => {
  const classes = useStyles();

  const { events, _id, fixtureStatus } = useSelector(({ h2h }) => {
    const {
      fixture: {
        time: { status: fixtureStatus },
        events,
      },
      localTeamStats: {
        team: { _id },
      },
    } = h2h;
    return {
      events,
      _id,
      fixtureStatus,
    };
  }, shallowEqual);

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      className={classes.container}
      alignItems="center"
    >
      <KickHalfFullTime
        title="kick off"
        fontColor="#1BD47B"
        backgroundColor="#1BD47B"
      />
      <hr className={classes.hr} />
      <hr className={classes.hr} />
      {events?.length
        ? events.map(
            (
              {
                type,
                minute,
                playerName,
                team,
                relatedPlayerName,
                extraMinute,
              },
              i
            ) => (
              <Grid container direction="column" alignItems="center" key={i}>
                <Grid
                  item
                  key={i}
                  container
                  alignItems="center"
                  direction={_id === team ? "row" : "row-reverse"}
                >
                  {[
                    "goal",
                    "own-goal",
                    "penalty",
                    "yellowcard",
                    "redcard",
                    "yellowred",
                    "missed_penalty",
                  ].includes(type.toLowerCase()) ? (
                    <SingleEvent
                      type={type.toLowerCase()}
                      playerName={playerName}
                      direction={_id === team ? "row" : "row-reverse"}
                    />
                  ) : type.toLowerCase() === "substitution" ? (
                    <DoubleEvent
                      type={type}
                      direction={_id === team ? "row" : "row-reverse"}
                      relatedPlayerName={relatedPlayerName}
                      playerName={playerName}
                    />
                  ) : type.toLowerCase() === "pen_shootout_goal" ||
                    type.toLowerCase() === "pen_shootout_miss" ? (
                    <PenaltiesEvent
                      localTeamId={_id}
                      teamId={team}
                      nextTeamId={events[i + 1]?.team}
                      previousType={events[i - 1]?.type?.toLowerCase()}
                      currentType={events[i]?.type?.toLowerCase()}
                      nextType={events[i + 1]?.type?.toLowerCase()}
                      nextMinute={events[i + 1]?.minute ?? null}
                      minute={minute}
                      previousMinute={events[i - 1]?.minute ?? null}
                      playerName={playerName}
                      nextPlayerName={events[i + 1]?.playerName}
                    />
                  ) : (
                    <Grid
                      item
                      xs={5}
                      container
                      justifyContent="center"
                      direction={_id === team ? "row" : "row-reverse"}
                    >
                      <Typography> {type}</Typography>
                    </Grid>
                  )}

                  {type.toLowerCase() !== "pen_shootout_goal" &&
                  type.toLowerCase() !== "pen_shootout_miss" ? (
                    <EventMinute
                      minute={minute}
                      extraMinute={extraMinute}
                      nextMinute={events[i + 1]?.minute ?? null}
                    />
                  ) : null}
                </Grid>

                <hr className={classes.hr} />
                <hr className={classes.hr} />
              </Grid>
            )
          )
        : null}

      {fixtureStatus === "FT" ||
      fixtureStatus === "FT_PEN" ||
      fixtureStatus === "AET" ? (
        <KickHalfFullTime
          title="full time"
          fontColor="#FB5266"
          backgroundColor="#FB5266"
        />
      ) : null}
    </Grid>
  );
};
