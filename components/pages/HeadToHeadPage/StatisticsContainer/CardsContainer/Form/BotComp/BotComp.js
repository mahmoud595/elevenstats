import React, { useCallback, useMemo, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Prev, Next } from "public/";
import Btn from "components/Layout/Btn/Btn";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "100%",

    // backgroundColor: "red",
    padding: "0 2em",
    "@media (max-width:1366px)": {
      padding: "0 1rem",
    },

    // boxShadow: "3px 0px 5px rgba(0, 0, 0, .16)",
  },
  teamName: {
    // color: "#6B2262",
    // fontWeight: "800",
    lineHeight: "16px",
    // textAlign: "center",
    textTransform: "capitalize",
    color: "rgba(2, 42, 84, 1)",
    "@media (max-width:640px)": {
      lineHeight: "9px",
    },
  },
  score: {
    color: "#fff",
    lineHeight: 0,
    // padding: "0.5rem",
  },
  scoreGrid: {
    // backgroundColor: "#F0F0F0",
    // height: "100%",
    width: "5em",
    height: "3em",

    borderRadius: "20px",
    "@media (max-width:1920px)": {
      width: "6em",
      height: "4em",
    },
    "@media (max-width:1540px)": {
      width: "8em",
      height: "4em",
    },
    "@media (max-width:600px)": {
      width: 32,
      height: 16,
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
    "&> li": {
      "& .focusRing___1airF.carousel__slide-focus-ring ": {
        outline: "none !important",
      },
    },
    height: "100%",
    "&:focus": {
      outline: "none",
    },
  },
  slide: {
    height: "6em",
    width: "100%",
  },
  carouselProvider: {
    width: "100%",
    height: "100%",
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
  icon: {
    border: "none",
    borderRadius: "50%",
    padding: 0,
    background: "linear-gradient(0deg, #EAEDF2, #EAEDF2)",
    "&:focus": {
      outline: "none",
    },
    "@media (max-width:600px)": {
      width: 24,
      height: 24,
    },
  },
  pastNext: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#707070",
    textTransform: "uppercase",
  },
  slideNumber: {
    fontSize: "1rem",
    color: "#A1B5C9",
  },
  headerGrid: {
    backgroundColor: "#985690",
    color: "#fff",
    borderRadius: "15px",

    padding: "2px 6px",
  },
  labelBtn: {
    borderRadius: 20,
    border: "none",
    padding: "2px 20px",
    "@media (max-width:600px)": {
      padding: "0px 5px",
    },
  },
  slideNumberGrid: {
    "@media (max-width:600px)": {
      margin: "0 35px",
    },
  },
}));
const header = ["OVERALL", "HOME", "AWAY"];

export const BotComp = ({ teams, team, home }) => {
  const classes = useStyles();
  // const [slide, setSlide] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFixtures, setSelectedFixtures] = useState(teams);
  const [selectedBtn, setSelectedBtn] = useState("OVERALL");
  const md = useMediaQuery("(max-width:1280px)");
  const headerclickHandler = (label) => {
    setSelectedBtn(label);
    const fixtures = [];
    for (let fixture of teams) {
      if (label === "HOME") {
        if (team._id === fixture.localTeam) {
          fixtures.push(fixture);
        }
      } else if (label === "AWAY") {
        if (team._id === fixture.visitorTeam) {
          fixtures.push(fixture);
        }
      } else {
        fixtures.push(fixture);
      }
    }
    setPageNumber(1);
    setSelectedFixtures(fixtures);
  };

  const renderHeader = useCallback(() => {
    return header.map((label, i) => (
      <Grid
        item
        container
        alignItems="center"
        key={i}
        xs={3}
        justifyContent="center"
      >
        <ButtonFirst
          onClick={() => headerclickHandler(label)}
          style={{
            background: selectedBtn === label ? "#266BFC" : "#F1F4F6",
            color: selectedBtn === label ? "#F1F4F6" : "#8295AA",
          }}
          className={classes.labelBtn}
        >
          <Btn
            // fullWidth
            backgroundColor={selectedBtn === label ? "#266BFC" : "#F1F4F6"}
            color={selectedBtn === label ? "#F1F4F6" : "#8295AA"}
            // // borderRadius="20px"
            // textPadding="3px 8px"
            padding={0}
            onClick={() => headerclickHandler(label)}
          >
            <Typography variant="h5" className={classes.label}>
              {label}
            </Typography>
          </Btn>
        </ButtonFirst>
      </Grid>
    ));
  }, [selectedBtn]);
  const memoizedHeader = useMemo(() => renderHeader(), [header, selectedBtn]);

  const clickHandler = (flag) => {
    flag === "next"
      ? setPageNumber((prev) => prev + 1)
      : setPageNumber((prev) => prev - 1);
  };

  return (
    <Grid item xs={6} className={classes.root}>
      <Grid container direction="column" justifyContent="space-around">
        <Grid item container style={{ flex: 1 }}>
          <CarouselProvider
            totalSlides={Math.ceil(selectedFixtures.length / 5)}
            visibleSlides={1}
            naturalSlideWidth={100}
            // naturalSlideWidth={100}
            isIntrinsicHeight
            className={classes.carouselProvider}
            dragEnabled={false}
          >
            <Grid
              item
              container
              className={classes.header}
              justifyContent="space-around"
            >
              {memoizedHeader}
            </Grid>
            <Slider
              className={classes.slider}
              classNameTray={classes.sliderTray}
            >
              {new Array(Math.ceil(selectedFixtures.length / 5))
                .fill(0)
                .map((el, index) => (
                  <Slide
                    key={index}
                    style={{ height: "100%", marginTop: "1rem" }}
                    index={index}
                    // value={slide}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{ height: "100%", flex: 1 }}
                    >
                      {selectedFixtures
                        ?.slice(index * 5, 5 * (index + 1))
                        .map(
                          (
                            {
                              homeTeam,
                              awayTeam,
                              homeScore,
                              awayScore,
                              localTeam,
                              visitorTeam,
                              scores,
                            },
                            i
                          ) => (
                            <Grid
                              item
                              container
                              justifyContent="space-between"
                              alignItems="center"
                              key={i}
                              className={classes.slide}
                            >
                              <Grid item xs={4} md={4}>
                                <Typography
                                  variant="h4"
                                  color="primary"
                                  className={classes.teamName}
                                  style={{
                                    fontWeight:
                                      team._id == localTeam ? 600 : 400,
                                    textAlign: `${md ? "center" : "end"}`,
                                  }}
                                >
                                  {homeTeam}
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                className={classes.scoreGrid}
                                // xs={3}
                                container
                                justifyContent="center"
                                alignItems="center"
                                style={{
                                  backgroundColor:
                                    scores.localTeamScore ==
                                    scores.visitorTeamScore
                                      ? "#FF9941"
                                      : team._id == localTeam &&
                                        scores.localTeamScore >
                                          scores.visitorTeamScore
                                      ? "#25D982"
                                      : team._id == visitorTeam &&
                                        scores.localTeamScore <
                                          scores.visitorTeamScore
                                      ? "#25D982"
                                      : "#D6435C",
                                }}
                              >
                                <Typography
                                  variant="h4"
                                  className={classes.score}
                                >
                                  {homeScore} - {awayScore}
                                </Typography>
                              </Grid>
                              <Grid item xs={4} md={4}>
                                <Typography
                                  variant="h4"
                                  color="primary"
                                  className={classes.teamName}
                                  style={{
                                    fontWeight:
                                      team._id == visitorTeam ? 600 : 400,
                                    textAlign: `${md ? "center" : "start"}`,
                                  }}
                                >
                                  {awayTeam}
                                </Typography>
                              </Grid>
                            </Grid>
                          )
                        )}
                    </Grid>
                  </Slide>
                ))}
            </Slider>
            <Grid item container justifyContent="center">
              <Grid
                item
                container
                justifyContent="space-around"
                alignItems="center"
                xs={6}
                wrap="nowrap"
                style={{ marginTop: "10px" }}
              >
                <Grid item>
                  <ButtonBack
                    className={classes.slideBtn}
                    className={classes.icon}
                    onClick={() => clickHandler("prev")}
                  >
                    <Prev />
                  </ButtonBack>
                </Grid>
                {/* <Grid item>
                  <Typography
                    style={{ color: '#A1B5C9' }}
                    className={classes.pastNext}
                  >
                    PAST
                  </Typography>
                </Grid> */}
                <Grid item className={classes.slideNumberGrid}>
                  <Typography className={classes.slideNumber}>
                    {pageNumber}
                  </Typography>
                </Grid>
                {/* <Grid item>
                  <Typography
                    className={classes.pastNext}
                    style={{ color: '#246BFD' }}
                  >
                    Next
                  </Typography>
                </Grid> */}
                <Grid item>
                  <ButtonNext
                    className={classes.slideBtn}
                    className={classes.icon}
                    onClick={() => clickHandler("next")}
                  >
                    <Next />
                  </ButtonNext>
                </Grid>
              </Grid>
            </Grid>
          </CarouselProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};
