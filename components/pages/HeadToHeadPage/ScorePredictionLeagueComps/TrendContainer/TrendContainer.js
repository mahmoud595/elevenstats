import React, { useMemo, memo, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, useMediaQuery } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";

import Image from "next/image";
import { CompWrapper } from "../CompWrapper/CompWrapper";

import Btn from "components/Layout/Btn/Btn";
import { TrendCarousel } from "./TrendCarousel";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    // height: '100%',
  },
  rowContainer: {
    // boxShadow: "0px -2px 6px rgba(0, 0, 0, .16)",
    // padding: "1.8vh  1rem 0.7vh 1rem",
  },
  botComp: {
    marginTop: "21px",
    marginBottom: "26px",
    "@media (max-width:640px)": {
      margin: 0,
    },
  },
  tabsGrid: {
    flexBasis: "5.6%",
    maxWidth: "5.6%",
    // paddingRight: "3em",
    "@media (max-width:640px)": {
      flexBasis: "100%",
      maxWidth: "100%",
    },
  },
  tabGrid: {
    padding: "33px 1.5em 36px 1.5em",
    borderRadius: "0px 20px 20px 0px",
    "@media (max-width:640px)": {
      padding: "0",
      borderRadius: "15px",
      width: "50PX",
      height: "40px",
      marginRight: "18px",
    },
  },
  img: {
    objectFit: "scale-down",
  },
  carouselContainer: {
    margin: "0 50px 0 50px",
    "@media (max-width:640px)": {
      margin: "16px 0 7px 0",
    },
  },
}));

export const TrendContainer = memo(({ md }) => {
  const classes = useStyles({ md });
  const sm = useMediaQuery("(max-width:640px)");
  const { pastFixtures } = useSelector(({ h2h }) => {
    const {
      headToheadStats: { fixtures: pastFixtures },
    } = h2h;
    return {
      pastFixtures,
    };
  }, shallowEqual);

  return (
    <>
      {pastFixtures?.length ? (
        <Grid container item className={classes.root}>
          <CompWrapper title="Fixture analysis" titleBackgroundColor="#246BFD">
            <Grid
              item
              container
              justifyContent={sm ? "center" : "space-around"}
              className={classes.botComp}
              wrap="nowrap"
              direction={sm ? "column" : "row"}
            >
              <Grid
                item
                container
                justifyContent="space-around"
                // style={{ flexBasis: "94.4%", maxWidth: "94.4%" }}
                className={classes.carouselContainer}
              >
                <TrendCarousel />
              </Grid>
            </Grid>
          </CompWrapper>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
});
