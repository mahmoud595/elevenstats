import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { Grid, useMediaQuery, Hidden } from "@mui/material";
import Link from "next/link";
import { Team } from "./Team";
import { StateOfMatch } from "./StateOfMatch";
import { Odds } from "./Odds";
import { BttsAndAvg } from "./BttsAndAvg";
import { MatchTime } from "./MatchTime";
import { useSocket } from "hooks/useSocket";

const Match = styled("a")(({ theme }) => ({
  height: 59,
  "@media (max-width:640px)": {
    height: 38,
  },

  "& .singleMatch": {
    padding: "16px 0",
    cursor: "pointer",
    "@media (max-width:640px)": {
      padding: "5px 0",
    },
  },

  "& .singleMatchTimeStateGrid": {
    maxWidth: "13.8em",
    display: "flex",
    height: "24px",
    margin: "0 5px",
  },
  "& .singleMatchTime": {
    "@media (min-width:640px)": {
      paddingLeft: "3.3em",
      flexBasis: "12.6%",
      maxWidth: "12.6%",
      marginTop: 0,
      // paddingLeft: "12px",
      // flexBasis: "24.5%",
      // maxWidth: "24.5%",
    },
    marginTop: "6px",
    "@media (max-width:640px)": {
      display: "none",
    },
  },
  "& .singleMatchTime2": {
    marginTop: "6px",
    "@media (min-width:640px)": {
      display: "none",
    },
  },
}));

export const SingleMatch = ({
  time,
  scores,
  visitorTeam,
  localTeam,
  slug,

  odds,
}) => {
  // const date = useRouter().query.data[2];
  const [status, setStatus] = useState(time?.status);
  const [live, setLive] = useState(
    ["LIVE", "HT", "PEN_LIVE"].includes(status || time?.status)
  );

  const [minutes, setMinutes] = useState(time?.minute ?? 0);
  const [localTeamScore, setLocalTeamScore] = useState(
    scores?.localTeamScore ?? 0
  );
  const [visitorTeamScore, setVisitorTeamScore] = useState(
    scores?.visitorTeamScore ?? 0
  );

  const { type } = useSelector(({ home }) => {
    const { type } = home;
    return {
      type,
    };
  });

  useSocket(live, status, `live_${slug}`, (data, socket) => {
    if (
      data.time.status === "FT" ||
      data.time.status === "FT_PEN" ||
      data.time.status === "AET"
    ) {
      console.log("socket is OFF");
      // socket.close();
      // setTime(null);

      setStatus("FT");
      setLive(false);
    } else if (data.time.status === "HT") {
      setStatus("HT");
    } else {
      // console.log(data);
      status !== "LIVE" && setStatus("LIVE");

      if (+minutes !== +data.time.minute) {
        // console.log('pass min');
        setMinutes(data?.time?.minute ?? 0);
      }

      if (+localTeamScore !== +data.scores.localTeamScore) {
        setLocalTeamScore(data.scores.localTeamScore);
      }

      if (+visitorTeamScore !== +data.scores.visitorTeamScore) {
        setVisitorTeamScore(data.scores.visitorTeamScore);
      }
    }
  });

  const sm = useMediaQuery("(max-width:640px)");

  return (
    // <Link
    //   href={`/h2h/${encodeURIComponent(slug)}`}
    //   as={`/h2h/${encodeURIComponent(slug)}`}
    //   prefetch={false}
    // >
    // </Link>
    <Link
      // style={{ maxHeight: `${sm ? "36px" : "59px"}` }}
      // key={`${i}${date}`}
      href={`/h2h/${encodeURIComponent(slug)}`}
      prefetch={false}
    >
      <Match>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="space-between"
          wrap="nowrap"
          className="singleMatch"
        >
          <Grid
            item
            container
            sm={2}
            justifyContent="flex-start"
            className="singleMatchTime"
            wrap="nowrap"
          >
            <Hidden smDown implementation="css">
              <MatchTime
                type={status}
                time={time?.startingAt?.date}
                setLive={setLive}
                matchTime={minutes}
                live={live}
              />
            </Hidden>
          </Grid>
          <Grid
            item
            container
            sm={6}
            justifyContent={sm ? "space-between" : "flex-start"}
            alignItems="center"
            wrap="nowrap"
          >
            <Team local={true} team={localTeam} />

            <Grid
              item
              container
              direction="column"
              className="singleMatchTimeStateGrid"
              wrap="nowrap"
              justifyContent="center"
              alignItems="center"
              sx={{
                "@media (max-width:640px)": {
                  marginBottom: ({ type, live }) =>
                    ["LIVE", "HT", "PEN_LIVE"].includes(type) || live
                      ? "-13px"
                      : "0",
                },
              }}
            >
              <StateOfMatch
                status={status}
                localTeamScore={localTeamScore}
                visitorTeamScore={visitorTeamScore}
                live={live}
              />
              <Grid
                item
                container
                sm={2}
                justifyContent="center"
                className="singleMatchTime2"
              >
                <Hidden smUp implementation="css">
                  <MatchTime
                    type={status}
                    time={time?.startingAt?.date}
                    setLive={setLive}
                    matchTime={minutes}
                    live={live}
                  />
                </Hidden>
              </Grid>
            </Grid>

            <Team team={visitorTeam} />
          </Grid>

          <Odds odds={odds} />
          <BttsAndAvg
            localTeamStats={localTeam?.stats}
            visitorTeamStats={visitorTeam?.stats}
            firstColumn
          />
          <BttsAndAvg
            localTeamStats={localTeam?.stats}
            visitorTeamStats={visitorTeam?.stats}
          />
        </Grid>
      </Match>
    </Link>
  );
};
