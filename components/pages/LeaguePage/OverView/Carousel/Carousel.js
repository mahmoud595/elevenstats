import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// import { MatchCard } from "../MatchCard/MatchCard";
import Btn from "components/Layout/Btn/Btn";
import { CarouselArrow, CarrouselArrow } from "public";
const useStyles = makeStyles(({ palette }) => ({
  carouselProvider: {
    width: "100%",
    // height: "100%",
    position: "relative",
    // maxWidth: "397px",
    paddingTop: 20,
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
  display: "flex",
  justifyContent: "space-between",
  //   width: "100%",
  sliderTray: {
    height: ({ sliderHeight }) => sliderHeight,
    alignItems: "center !important",
    "&:focus": {
      outline: "none",
    },
    "&> li": {
      "& .focusRing___1airF.carousel__slide-focus-ring ": {
        outline: "none !important",
      },

      padding: "0 3.3em",
      transition: "all 0.1s linear",
      "@media(min-width:1600px)": {
        // padding: "0 7em",
      },
      "@media(max-width:1074px)": {
        padding: "0 1.5em",
      },
      opacity: ({ hover }) => (hover ? "0.6" : "1"),
      transform: "scale(1)",
      "&:focus": {
        outline: "none !important",
      },

      "&:focus-visible": {
        outline: "none !important",
      },
    },

    "&:not(:hover)": {
      "&>li": {
        opacity: "1 !important",
      },
    },
    "&>li:hover": {
      opacity: 1,
      transform: ({ hover }) => (hover ? "scale(1.1)" : "scale(1)"),
      padding: ({ hover }) => hover && "0 4em",
    },
    // width: "92% !important",
    "& .carousel__slide--focused": {
      outline: "none !important",
    },

    "& .carousel__slide--visible:last-of-type": {
      paddingRight: "0",
    },
  },
  slide: {
    "&:hover": {
      transform: "translateZ(15px)",
    },
  },
  next: {
    position: "absolute",
    left: 200,
    top: -25,
  },
  back: {
    position: "absolute",
    left: 150,
    top: -25,
    transform: "rotate(180deg)",
  },
  icon: {
    border: "none",
    borderRadius: "50%",
    padding: "5px 8px",
    background: "linear-gradient(0deg, #EAEDF2, #EAEDF2)",
    "&:focus": {
      outline: "none",
    },
  },
}));

export const Carousel = ({
  data = new Array(8).fill(null),
  visibleSlides,
  step,
  children,
  sliderHeight,
  hover,
}) => {
  const classes = useStyles({ sliderHeight, hover });
  const lg = useMediaQuery("(min-width:1600px)");
  return (
    <CarouselProvider
      totalSlides={data.length}
      visibleSlides={visibleSlides}
      naturalSlideWidth={100}
      className={classes.carouselProvider}
      isIntrinsicHeight
      dragEnabled={false}
      step={step}
    >
      <ButtonBack className={`${classes.icon} ${classes.back}`}>
        <CarouselArrow />
      </ButtonBack>
      <ButtonNext className={`${classes.icon} ${classes.next}`}>
        <CarouselArrow />
      </ButtonNext>

      <Slider className={classes.slider} classNameTray={classes.sliderTray}>
        {data.map((num, i) => (
          <React.Fragment key={i}>
            <Slide
              key={i}
              // style={{ height: "100%" }}
              index={i}
              // value={slide}
              className={classes.slide}
            >
              {/* <Link href="/league">
                <MatchCard />
              </Link> */}

              {children}
            </Slide>
          </React.Fragment>
        ))}
      </Slider>
    </CarouselProvider>
  );
};
