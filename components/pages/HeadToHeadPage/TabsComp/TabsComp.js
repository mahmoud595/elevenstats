import React, { useState, useMemo, useEffect } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import Link from "next/link";

// import TabsWrapper from "components/MatchComparisonPage/Filter/TabsWrapper/TabsWrapper";

import { Btn } from "components/";
import StatisticsBotHeader from "components/Layout/StatisticsBotHeader/StatisticsBotHeader";

// import Navigation from "components/MatchComparisonPage/Header/TopHeader/NavBar/Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
  navText: {
    color: "rgba(2, 42, 84, 0.5)",
    fontWeight: 600,
  },
  tabsContainer: {
    position: "sticky",
    top: 0,
    transition: "all .05s linear",
    // zIndex: 1,
    zIndex: 3,
    backgroundColor: "#F6F7FA",
    padding: "10px 0 2.1em 0",
    "@media (max-width:640px)": {
      padding: "6px 6px 2.1em 6px",
    },
  },
  leftTabs: {
    backgroundColor: "#EFF1F5",
    borderRadius: 100,
    padding: 2,
    border: " 0.5px solid #A1B5C9",
    "@media (max-width:640px)": {
      marginBottom: 10,
    },
  },
  rightTabs: {
    borderLeft: ({ sm }) => !sm && "1px solid #A1B5C9",
    marginLeft: 32,
    paddingLeft: 18,
    "@media (max-width:960px)": {
      marginLeft: 5,
      paddingLeft: 5,
    },
    "@media (max-width:700px)": {
      marginLeft: 0,
      paddingLeft: 0,
    },
    height: "fit-content",
    marginTop: ({ sm }) => sm && 5,
  },
  cardsContainer: {
    marginTop: "2em",
  },
  item: {
    cursor: "pointer",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  matchTimeLiveNotification: {
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
    "100%": { backgroundColor: "transparent" },
  },
  matchTimeLiveNotificationCenter: {
    borderRadius: "50%",
    width: "6px",
    height: "6px",
    backgroundColor: "#FB5266",
    "@media (max-width:640px)": {
      width: "3px",
      height: "3px",
    },
  },
}));
export const TabsComp = ({
  setScreenSelected,
  setSelected,
  screenSelected,
}) => {
  const sm = useMediaQuery("(max-width:640px)");

  const classes = useStyles({ sm });

  const screens = useMemo(
    () => [
      {
        name: "HEAD TO HEAD",
        screen: "statistics",
        onClick: () => {
          setScreenSelected("statistics");
          setSelected("all");
        },
      },

      {
        name: "Live",
        screen: "STREAMS/TV",
        onClick: () => {
          setScreenSelected("STREAMS/TV");
        },
      },
    ],
    []
  );

  return (
    // <div>
    //   <TabsWrapper data={data} h2h color="#6B7281" marginRight="50px" />
    // </div>
    <Grid
      item
      container
      wrap={sm ? "wrap" : "nowrap"}
      alignItems="center"
      // style={{ top }}
      className={classes.tabsContainer}
    >
      <Grid
        item
        sm={3}
        container
        className={classes.leftTabs}
        alignItems="center"
        justifyContent="space-between"
      >
        {screens.map(({ name, screen, onClick }, i) => (
          <Grid
            key={i}
            item
            alignItems="center"
            className={classes.item}
            wrap="nowrap"
            xs={6}
            container
            justifyContent="center"
            sx={{
              backgroundColor:
                screen === screenSelected && "rgba(36, 107, 253, 0.04)",
              borderRadius: sm ? "17px" : "100px",
            }}
            // direction="column"
          >
            <a href={"#cardsContainer"} className={classes.link}>
              <Btn onClick={onClick} height={sm ? "20px" : "40px"} width="100%">
                {name === "Live" && (
                  <Grid
                    item
                    className={classes.matchTimeLiveNotification}
                    container
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid
                      item
                      className={classes.matchTimeLiveNotificationCenter}
                    ></Grid>
                  </Grid>
                )}
                <Typography
                  variant="h4"
                  className={classes.navText}
                  style={{
                    color:
                      screen === screenSelected
                        ? "#246BFD"
                        : "rgba(103, 127, 152, 1)",
                  }}
                >
                  {name}
                </Typography>
              </Btn>
            </a>
          </Grid>
        ))}
      </Grid>
      <Grid item sm={8} container className={classes.rightTabs}>
        {screenSelected === "statistics" && (
          <StatisticsBotHeader h2h changeSelected={setSelected} />
        )}
      </Grid>
    </Grid>
  );
};
