import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery, Tooltip, Fade } from "@mui/material";
import Image from "next/image";

import { ToolTipWrapper } from "components";

const SingleTeam = styled(Grid)(({ theme }) => ({
  maxWidth: "40%",
  flexBasis: "40%",
  "@media (max-width:640px)": {
    maxWidth: "39.6%",
    flexBasis: "39.6%",
  },

  "& .singleTeamName": {
    fontSize: "2.5em",
    lineHeight: "22px",
    color: "#404040",
    "@media (max-width:1280px)": {
      fontSize: "2em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:640px)": {
      fontSize: "8px",
      lineHeight: "14px",
    },
    // whiteSpace: "normal",
  },
  "& .singleTeamPointsTxt": {
    fontSize: "2em",
    lineHeight: "8px",
    color: "#404040",

    fontWeight: 600,
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
      // lineHeight: "1px",
    },
    "@media (max-width:640px)": {
      fontSize: 8,
      lineHeight: "6px",
      fontWeight: 400,
    },
  },
  "& .singleTeamPoints": {
    // padding: '0.8em 1.6em',
    minWidth: 42,
    height: 20,
    background: "#EDFCF5",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media (max-width:960px)": {
      minWidth: "26px",
      height: "12px",
    },
    "@media (max-width:640px)": {
      minWidth: "34px",
      height: "18px",
    },
  },
  "& .singleTeamImg": {
    objectFit: "scale-down",
  },
}));
export const Team = ({ local, team }) => {
  const sm = useMediaQuery("(max-width:640px)");
  return (
    <SingleTeam item xs={5}>
      <Grid
        item
        container
        alignItems="center"
        wrap="nowrap"
        direction={local ? "row" : "row-reverse"}
      >
        <Grid
          item
          container
          justifyContent={
            sm
              ? local
                ? "flex-end"
                : "flex-start"
              : local
              ? "flex-end"
              : "flex-start"
          }
          sx={{
            "@media (max-width:640px)": {
              margin: local ? "0 12px 0 0" : "0 0 0 12px",
            },
          }}
        >
          <ToolTipWrapper title={team?.name}>
            <Typography
              className="singleTeamName"
              align={local ? "right" : "left"}
              variant="body2"
            >
              {team?.name
                ? team?.name?.length > 14
                  ? `${team?.name?.substring(0, 14)}...`
                  : team?.name
                : "-"}
            </Typography>
          </ToolTipWrapper>
        </Grid>

        <Grid
          item
          sx={{
            display: "block",

            margin: "0 2.3em 0 2em",

            position: "relative",
            width: 35,
            height: 22,
            "@media (max-width:640px)": {
              margin: local ? "0 12px 0 4px" : "0 4px 0 12px",
              width: 20,
              height: 12,
              display: "none",
            },
          }}
        >
          <Image
            src={team?.nationalTeam ? team?.country?.imagePath : team?.logoPath}
            layout="responsive"
            // priority
            width={150}
            height={150}
            alt={team?.name}
            className="singleTeamImg"
            placeholder="blur"
            // unoptimized={true}
            // quality={100}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </Grid>

        <Grid item className="singleTeamPoints">
          <Typography className="singleTeamPointsTxt" variant="body2">
            {team?.stats?.PPG?.toFixed(2) ?? "-"}
          </Typography>
        </Grid>
      </Grid>
    </SingleTeam>
  );
};
