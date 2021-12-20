import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useRouter } from "next/router";

import Link from "next/link";
import Btn from "components/Layout/Btn/Btn";
const useStyles = makeStyles(({ palette }) => ({
  filters: {
    marginTop: "18px",
  },

  linkGrid: {
    paddingBottom: "7px",
  },
  text: {
    fontSize: "2.1em",
    lineHeight: "19px",
  },
}));

const tabs = [
  { text: "Overview", link: "/league" },
  { text: "News", link: "/league/slug/news" },
  { text: "Table", link: "/league/slug/table" },
  { text: "Playoff", link: "/league/slug/playoff" },
  { text: "Matches", link: "/league/mmmm/matches" },
  { text: "Players", link: "/league/slug/players" },
  { text: "Stats", link: "/league/slug/stats" },
];
export const TabsFiltersBotComp = () => {
  const classes = useStyles();
  const router = useRouter();

  const urlArr = router.pathname.split("/");
  const lastName = urlArr[urlArr.length - 1];

  return (
    <Grid item container justifyContent="space-between">
      <Grid item className={classes.filters} xs={8} md={6}>
        <Grid container justifyContent="space-between" alignItems="center">
          {tabs.map(({ text, link }, i) => (
            <Grid
              item
              key={i}
              className={classes.linkGrid}
              style={{
                borderBottom:
                  text.toLowerCase() === lastName.toLowerCase() ||
                  (lastName.toLowerCase() === "league" && i === 0)
                    ? "2px solid #A1B5C9"
                    : "0",
                borderBottomRadius:
                  text.toLowerCase() === lastName.toLowerCase() ||
                  (lastName.toLowerCase() === "league" && i === 0)
                    ? "3px 3px 0px 0px"
                    : "0",
                cursor: "pointer",
              }}
            >
              <Link href={link}>
                <Typography
                  style={{
                    fontWeight:
                      text.toLowerCase() === lastName.toLowerCase() ||
                      (lastName.toLowerCase() === "league" && i === 0)
                        ? "600"
                        : "400",
                    color:
                      text.toLowerCase() === lastName.toLowerCase() ||
                      (lastName.toLowerCase() === "league" && i === 0)
                        ? "#022A54"
                        : "#A1B5C9",
                  }}
                  className={classes.text}
                >
                  {text}
                </Typography>
              </Link>
              {/* {clicked === i ? <hr className={classes.hr} /> : null} */}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
