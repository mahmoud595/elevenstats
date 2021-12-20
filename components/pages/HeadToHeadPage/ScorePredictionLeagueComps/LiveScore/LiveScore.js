import { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import dynamic from "next/dynamic";

import { useSocket } from "hooks/useSocket";
import {
  upadteScore,
  updateFixtureStats,
  upadteEvents,
  updateFixtureDetails,
} from "store/actions/h2hActions";
import { CompWrapper } from "../CompWrapper/CompWrapper";
import { Header } from "./Header/Header";
// import { Events } from "./Events/Events";
// import { EventsNotStarted } from "./EventsNotStarted/EventsNotStarted";

const EventsNotStarted = dynamic(
  () =>
    import("./EventsNotStarted/EventsNotStarted").then(
      (mod) => mod.EventsNotStarted
    ),
  { ssr: false }
);

const Events = dynamic(
  () => import("./Events/Events").then((mod) => mod.Events),
  { ssr: false }
);

const useStyles = makeStyles(({ palette }) => ({
  container: {
    padding: "16px 5em 0 5em",
    flex: 1,
    "@media (max-width: 1450px)": {
      padding: "16px 2rem 0 2rem",
    },
    "@media (max-width: 900px)": {
      padding: "16px 1rem 0 1rem",
    },
  },
  timeContainer: {
    background: "red",
    // padding: "2em",
    borderRadius: "50%",
    animation: "$mymove 3s infinite",
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 9,
    lineHeight: "10px",
    fontWeight: 700,
  },
  "@keyframes mymove": {
    "0%": { backgroundColor: "white" },
    "50%": { backgroundColor: "#1BD47B" },
    "100%": { backgroundColor: "white" },
  },
}));
export const LiveScore = ({ title, live, setLive }) => {
  const classes = useStyles();
  const {
    localTeamId,
    visitorTeamId,
    fixtureTimeMinute,
    fixtureStartingDate,
    fixtureStatus,
    fixtureSlug,
    localTeamScore,
    visitorTeamScore,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { _id: localTeamId },
      },
      visitorTeamStats: {
        team: { _id: visitorTeamId },
      },
      fixture: {
        time: {
          minute: fixtureTimeMinute,
          startingAt: { date: fixtureStartingDate },
          status: fixtureStatus,
        },
        slug: fixtureSlug,
        scores: { localTeamScore, visitorTeamScore },
      },
    } = h2h;
    return {
      localTeamId,
      visitorTeamId,
      fixtureTimeMinute,
      fixtureStartingDate,
      fixtureStatus,
      fixtureSlug,
      localTeamScore,
      visitorTeamScore,
    };
  }, shallowEqual);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [hours, setHours] = useState(null);
  const [runTimer, setRunTimer] = useState(false);
  const [time, setTime] = useState(fixtureTimeMinute);
  const dispatch = useDispatch();

  useEffect(() => {
    setTime(fixtureTimeMinute);
  }, [fixtureTimeMinute]);

  const updateFixture = () => {
    const remainingTime =
      (new Date(fixtureStartingDate).getTime() - new Date().getTime()) /
      1000 /
      60 /
      60;
    // remainingTime = -1;
    if (remainingTime < 0) {
      dispatch(updateFixtureDetails(fixtureSlug));
    } else {
      const hours = remainingTime.toString().split(".")[0];
      const remainingMinutesSeconds = (remainingTime - +hours) * 60;
      const minutes = remainingMinutesSeconds.toString().split(".")[0];
      let seconds = (remainingMinutesSeconds - +minutes) * 60;

      setHours(+hours);
      setMinutes(+minutes);
      setSeconds(+seconds.toFixed(0) + 15);
      setRunTimer(true);
    }
  };

  useEffect(() => {
    if (fixtureStatus === "NS") {
      return updateFixture();
    } else if (
      fixtureStatus === "LIVE" ||
      fixtureStatus === "HT" ||
      fixtureStatus === "PEN_LIVE"
    ) {
      console.log("passs 11111");
      dispatch(updateFixtureDetails(fixtureSlug));
    }
  }, [fixtureStatus]);
  // console.log(hours, minutes, seconds);
  useEffect(() => {
    if (runTimer && (hours > 0 || seconds > 0 || minutes > 0)) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(myInterval);
            } else {
              setMinutes(59);
              setSeconds(59);
              setHours(hours - 1);
            }
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [runTimer, hours, seconds, minutes]);

  useSocket(live, fixtureStatus, `live_${fixtureSlug}`, (data, socket) => {
    // console.log(data);

    if (
      data.time.status === "FT" ||
      data.time.status === "FT_PEN" ||
      data.time.status === "AET"
    ) {
      console.log("socket is OFF");
      socket.close();
      setTime(null);
    }

    setTime(data.time.minute);
    data?.events?.length && dispatch(upadteEvents(data.events));
    data?.stats?.length === 2 &&
      dispatch(updateFixtureStats(data.stats, localTeamId, visitorTeamId));

    if (
      localTeamScore !== data.scores.localTeamScore ||
      visitorTeamScore !== data.scores.visitorTeamScore
    ) {
      dispatch(
        upadteScore(data.scores.localTeamScore, data.scores.visitorTeamScore)
      );
    }
  });

  useEffect(() => {
    // window.addEventListener('focus', () => console.log('blur'));
    const onFocus = () => {
      if (fixtureStatus === "NS") {
        updateFixture();
      }
    };
    window.addEventListener("focus", onFocus);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
      // window.removeEventListener('blur', onBlur);
    };
  });

  useEffect(() => {
    if (minutes == 0 && seconds == 0 && hours == 0) {
      setLive(true);
    }
  }, [minutes, seconds, hours]);

  return (
    <CompWrapper title={title} titleBackgroundColor="#FB5266" outside>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        className={classes.container}
      >
        <Header live={live} />
        {live &&
          fixtureStatus !== "FT" &&
          fixtureStatus !== "FT_PEN" &&
          fixtureStatus !== "AET" &&
          time >= 0 && (
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              className={classes.timeContainer}
            >
              <Typography className={classes.timeText}>{time}</Typography>
            </Grid>
          )}
        {live ? (
          <Events />
        ) : (
          <EventsNotStarted minutes={minutes} seconds={seconds} hours={hours} />
        )}
      </Grid>
    </CompWrapper>
  );
};
