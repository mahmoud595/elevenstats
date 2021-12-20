import React, { useEffect } from "react";

import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { getMatchTime } from "utils/helperFunctions/homeHelperFunctions";
import { useTimer } from "hooks/useTimer";

const MatchTimeComp = styled(Grid)(({ theme }) => ({
  "& .matchTimeLiveNotification": {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#F4C2CA",
    // padding: '0.5em',
    marginRight: "0.8em",
    animation: "$mymove 3s infinite",
    "@media (max-width:640px)": {
      width: 8,
      height: 8,
      marginRight: 3,
      marginBottom: 1,
    },
  },

  "@keyframes mymove": {
    "0%": { backgroundColor: "white" },
    "50%": { backgroundColor: "#F4C2CA" },
    "100%": { backgroundColor: "white" },
  },
  "& .matchTimeLiveNotificationCenter": {
    borderRadius: "50%",
    width: "6px",
    height: "6px",
    backgroundColor: "#FB5266",
    "@media (max-width:640px)": {
      width: "3px",
      height: "3px",
    },
  },
  "& .matchTimeLiveTxt": {
    fontSize: "2.5em",
    lineHeight: "9px",
    color: "#022A54",
    lineHeight: "15px",
    whiteSpace: "nowrap",

    "@media (max-width:1280px)": {
      fontSize: "2em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:640px)": {
      fontSize: 7,
      lineHeight: "12px",
      // whiteSpace: "break-spaces",
    },
  },
  "& .matchTimeLive": {
    backgroundColor: "#FCF2F3",
    borderRadius: "30px",
    padding: "1em 1.6em 1em 0.8em",
  },

  "& .matchTimeTimeofNear": {
    color: "rgb(115, 228, 172)",
    fontWeight: 600,
  },

  "& .matchTimeHours": {
    color: "#FC7D58",
    "@media (max-width:640px)": {
      fontSize: 7,
      lineHeight: "12px",
      color: "#022A54",
    },
  },
  "& .matchTimeStartsIn": {
    "@media (max-width:640px)": {
      color: "rgba(2, 42, 84, 0.6)",
    },
  },
  "& .matchTimeMatchTime": {
    whiteSpace: "nowrap",
    "@media (max-width:640px)": {
      fontSize: 9,
      fontWeight: 600,
      lineHeight: "10px",
      color: "#022A54",
    },
  },
}));

export const MatchTime = ({ type, time, matchTime, setLive, live }) => {
  const { hours, minutes, seconds } = useTimer(time, type);
  // console.log(hours);
  const sm = useMediaQuery("(max-width:640px)");

  useEffect(() => {
    // console.log('pass efect');
    if (minutes == 0 && seconds == 0 && hours == 0) {
      setLive(true);
    }
  }, [minutes, seconds, hours]);

  return (
    <MatchTimeComp
      item
      container
      // className={["LIVE", "HT"].includes(type) && classes.live}
      alignItems="center"

      // xs={7}
    >
      {["LIVE", "HT", "PEN_LIVE"].includes(type) || live ? (
        <Grid
          item
          className="matchTimeLiveNotification"
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className="matchTimeLiveNotificationCenter"></Grid>
        </Grid>
      ) : null}

      <Grid item>
        <Typography
          className="matchTimeLiveTxt"
          style={{
            color: `${
              ["LIVE", "HT", "PEN_LIVE"].includes(type) || live
                ? "#FB5266"
                : "#022A54"
            }`,
            whiteSpace: `${type === "NS" && sm ? "break-spaces" : "nowrap"}`,
            textAlign: `${type === "NS" ? "center" : "flex-start"}`,
          }}
        >
          {type === "LIVE" || (live && type !== "HT") ? (
            sm ? (
              `${matchTime}' `
            ) : (
              `Live ${matchTime}' `
            )
          ) : ["CANCL", "POSTP", "TBA", "", "Deleted"].includes(type) ? (
            `${getMatchTime(time)}`
          ) : ["FT_PEN", "FT", "AET"].includes(type) ? (
            "Full Time"
          ) : type === "HT" ? (
            `Half Time`
          ) : type === "NS" ? (
            <>
              {/* {getMatchTime(time)}gi */}
              {hours <= 3 ? (
                <>
                  {hours !== 0 ? (
                    <>
                      <span className="matchTimeStartsIn"> Starts in </span>
                      <span className="matchTimeHours">{hours}Hrs</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="matchTimeStartsIn"> Starts in </span>
                      <span className="matchTimeHours">{minutes}mins</span>{" "}
                    </>
                  )}
                </>
              ) : (
                <span className="matchTimeMatchTime">{getMatchTime(time)}</span>
              )}
            </>
          ) : (
            <span className="matchTimeMatchTime">{getMatchTime(time)}</span>
          )}
        </Typography>
      </Grid>
    </MatchTimeComp>
  );
};
