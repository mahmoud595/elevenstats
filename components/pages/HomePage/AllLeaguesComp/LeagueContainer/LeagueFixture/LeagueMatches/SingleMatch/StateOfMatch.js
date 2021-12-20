import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
const MatchState = styled(Grid)(({ theme }) => ({
  "& .stateScore": {
    fontSize: "2.5em",
    whiteSpace: "nowrap",
    textAlign: "center",
    fontWeight: ({ status }) =>
      ["POSTP", "CANCL", "Deleted"].includes(status) ? "400" : "600",
    color: ({ status }) =>
      ["POSTP", "CANCL", "Deleted"].includes(status) ? "#FB5266" : "#404040",
    "@media (max-width:1280px)": {
      fontSize: "2em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:640px)": {
      fontSize: "12px",
      lineHeight: "8px",
      fontWeight: 600,
    },
  },
}));
export const StateOfMatch = ({
  score,
  status,
  localTeamScore,
  visitorTeamScore,
  live,
}) => {
  const sm = useMediaQuery("(max-width:640px)");

  return (
    <MatchState
      item
      alignItems="center"
      justifyContent="center"
      sm={2}
      container
      sx={{
        background: ({ status }) =>
          ["POSTP", "CANCL", "Deleted"].includes(status) && "#FCF2F3",

        borderRadius: ({ status }) =>
          ["POSTP", "CANCL", "Deleted"].includes(status) && "12px",
      }}
    >
      <Typography className="stateScore">
        {status === "NS" && !live
          ? sm
            ? ""
            : "VS"
          : status === "POSTP"
          ? "Postponed"
          : status === "CANCL"
          ? "Canceled"
          : status === "Deleted"
          ? status
          : (status !== "POSTP" && status !== "CANCL") || live
          ? `${localTeamScore} - ${visitorTeamScore}`
          : null}
      </Typography>
    </MatchState>
  );
};
