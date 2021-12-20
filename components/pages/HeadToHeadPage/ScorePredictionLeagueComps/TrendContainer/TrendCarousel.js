import React, { useCallback, useMemo } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { TeamNews } from "./TeamNews/TeamNews";
import {
  StatsNews,
  GoodNews,
  BadNews,
  DropDownArrow,
  CarouselArrow,
} from "public";
const useStyles = makeStyles(({ palette }) => ({
  carouselProvider: {
    width: "100%",
    height: "100%",
    position: "relative",
    // maxWidth: "397px",
    "&:focus": {
      outline: "none",
    },
    "& > div": {
      "&:focus": {
        outline: "none",
      },
    },
  },
  slider: {
    // height: '90%',
    "&:focus": {
      outline: "none",
    },
    "& >div.carousel__slider-tray-wrap--horizontal.carousel__slider-tray-wrapper":
      {
        height: "100%",
        "&:focus": {
          outline: "none",
        },
      },
  },
  sliderTray: {
    height: "100%",
    "&:focus": {
      outline: "none",
    },
    padding: "0 70px 0 0",
    // width: "92% !important",

    "@media (max-width:640px)": {
      padding: "0 0 12px 0",
      // width: "359% !important",
    },
  },
  slide: {
    "@media (max-width:640px)": {
      margin: "0 12px",
    },
    "& .focusRing___1airF.carousel__slide-focus-ring ": {
      outline: "none !important",
    },
  },
  newsContainer: {
    padding: "16px 2.6em",
    "@media (max-width:640px)": {
      boxShadow: "0 1px 5px rgb(0 0 0 / 10%)",
      borderRadius: "10px",
      padding: "15px 12px",
    },
  },
  btnNext: {
    // position: "absolute",
    // top: "50%",
    // right: "0",
    // marginRight: "10px",
    top: "30%",
    right: "-30px",
    position: "absolute",
    "@media (max-width:814px)": {
      right: "-15px",
    },
    "@media (max-width:700px)": {
      right: "0px",
    },
  },
  btnBack: {
    // marginLeft: "10px",
    position: "absolute",
    top: "30%",
    left: "-30px",
    transform: "rotate(180deg)",
    "@media (max-width:814px)": {
      left: "-15px",
    },
    "@media (max-width:700px)": {
      left: "0px",
    },
  },
  btn: {
    cursor: "pointer",
    width: "50px",
    height: "50px",
    borderRadius: " 50%",
    border: "none",
    zIndex: 2,
    boxShadow: "18px 10px 100px rgba(2, 42, 84, 0.2)",
    padding: 0,
    "& svg": {
      width: 7,
      height: 14,
    },
    "&:focus": {
      outline: "none",
    },
    background: "#fff",
    color: "#022A54",
    "@media (max-width:814px)": {
      width: "20px",
      height: "20px",
    },
  },

  opacityDiv: {
    position: "absolute",
    height: "100%",
    right: "0",
    top: "0",
    zIndex: "1",
    width: "10%",
    background:
      "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
    "@media (max-width:640px)": {
      background: "transparent",
    },
  },
  dotGroupGrid: {
    "& .carousel__dot": {
      margin: "0 8px",
      borderRadius: "50%",
      border: "0",
      backgroundColor: "#E0EAFE",
      padding: 3,
    },
    "& .carousel__dot--selected": {
      position: "relative",
      backgroundColor: "#246BFD",
    },
    "& .carousel__dot--selected::after": {
      content: "",
      position: "absolute",
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      zIndex: -1,
    },
  },
}));

// data.map(({ icon, text }, i) => (
//       <Grid item container className={classes.newsContainer}>
//         <TeamNews icon={icon()} text={text} />
//       </Grid>
//     ));

export const TrendCarousel = () => {
  const classes = useStyles();
  const sm = useMediaQuery("(max-width:640px)");
  const md = useMediaQuery("(max-width:1200px)");
  const {
    localTeamName,
    localTeamHomePPG,
    visitorTeamName,
    visitorTeamAwayPPG,
    localTeamWins,
    visitorTeamWins,
    draws,
    totalGoalsAverage,
    pastFixtures,
    totalBTTSPercentage,
    leagueName,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localTeamName },
        points: {
          PPG: { home: localTeamHomePPG },
        },
      },
      visitorTeamStats: {
        team: { name: visitorTeamName },
        points: {
          PPG: { away: visitorTeamAwayPPG },
        },
      },
      headToheadStats: {
        records: {
          wins: { home: localTeamWins, away: visitorTeamWins },
          draws: { home: draws },
        },
        goals: {
          goalsAverage: { total: totalGoalsAverage },
        },
        BTTS: {
          BTTSPercentage: { total: totalBTTSPercentage },
        },
        fixtures: pastFixtures,
      },
      fixture: {
        league: { name: leagueName },
      },
    } = h2h;
    return {
      localTeamName,
      localTeamHomePPG,
      visitorTeamName,
      visitorTeamAwayPPG,
      localTeamWins,
      visitorTeamWins,
      draws,
      totalGoalsAverage,
      pastFixtures,
      totalBTTSPercentage,
      leagueName,
    };
  }, shallowEqual);

  const sortedFixtures = useCallback(() => {
    return pastFixtures?.sort((a, b) => {
      return (
        new Date(b?.time?.startingAt?.date) -
        new Date(a?.time?.startingAt?.date)
      );
    });
  }, [pastFixtures]);
  const memoizedSortedFixtures = useMemo(
    () => sortedFixtures(),
    [pastFixtures]
  );
  const data = [
    {
      icon: () => <StatsNews />,
      text: `On ${
        new Date(
          memoizedSortedFixtures[0]?.time?.startingAt?.date
        )?.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }) ?? "-"
      }, ${localTeamName} and ${visitorTeamName} go head to head in the ${leagueName}. The last meeting ended with the following result : ${localTeamName}       ${
        memoizedSortedFixtures[0]?.scores?.localTeamScore ?? "-"
      }-${
        memoizedSortedFixtures[0]?.scores?.visitorTeamScore ?? "-"
      }  ${visitorTeamName}.`,
    },
    {
      icon: () => <StatsNews />,
      text: `Out of ${memoizedSortedFixtures?.length} previous meetings, ${localTeamName}  have won ${localTeamWins} matches while  ${visitorTeamName}  won ${visitorTeamWins}. ${draws}  matches between them have ended in a draw.`,
    },
    {
      icon: () => <StatsNews />,
      text: `Previous matches between ${localTeamName}  and ${visitorTeamName}  have averaged ${totalGoalsAverage} goals while BTTS has happened ${totalBTTSPercentage}% of the time`,
    },
    {
      icon: () => <StatsNews />,
      text: `These 2 teams have met ${memoizedSortedFixtures?.length} in the last several seasons based on the data that we have of them.
    `,
    },
    {
      icon: () => <StatsNews />,
      text: `So far this season in the ${memoizedSortedFixtures?.length} , ${localTeamName} have averaged ${localTeamHomePPG} Points Per Game at home matches and ${visitorTeamName} ${visitorTeamAwayPPG} Points Per Game at away matches`,
    },
  ];
  const slides = useCallback(() => {
    return data.map(({ icon, text }, i) => (
      <Slide
        key={i}
        // style={{ height: "100%" }}
        index={i}
        // value={slide}
        className={classes.slide}
      >
        <Grid
          item
          container
          className={classes.newsContainer}
          style={{ height: "100%", flex: 1 }}
        >
          <TeamNews icon={icon()} text={text} />
        </Grid>
      </Slide>
    ));
  }, [data]);
  const mobileSlides = useCallback(() => {
    return data.map((i) => {
      <Dot slide={i} className={classes.dot} />;
    });
  }, [data]);
  const memoizedSlides = useMemo(() => slides(), [memoizedSortedFixtures]);
  const memoizedMobileSlides = useMemo(
    () => mobileSlides(),
    [memoizedSortedFixtures]
  );
  return (
    <Grid item container>
      <CarouselProvider
        totalSlides={data.length}
        visibleSlides={sm ? 1 : md ? 3 : 4}
        naturalSlideWidth={100}
        className={classes.carouselProvider}
        isIntrinsicHeight
        dragEnabled={false}
        // step={sm ? 1 : md ? 3 : 4} //trends
        step={1}
      >
        {/* <Grid item container direction="column"> */}
        {!sm ? (
          <ButtonBack className={`${classes.btnBack} ${classes.btn}`}>
            <Grid item className={classes.backArrow}>
              <CarouselArrow />
            </Grid>
          </ButtonBack>
        ) : null}

        <Slider className={classes.slider} classNameTray={classes.sliderTray}>
          {memoizedSlides}
        </Slider>
        {!sm ? (
          <ButtonNext className={`${classes.btnNext} ${classes.btn}`}>
            <Grid item className={classes.nextArrow}>
              <CarouselArrow />
            </Grid>
          </ButtonNext>
        ) : null}

        <div className={classes.opacityDiv}></div>
        {sm ? (
          <Grid
            item
            container
            justifyContent="center"
            className={classes.dotGroupGrid}
          >
            <DotGroup>{memoizedMobileSlides}</DotGroup>
          </Grid>
        ) : null}
        {/* </Grid> */}
      </CarouselProvider>
    </Grid>
  );
};
