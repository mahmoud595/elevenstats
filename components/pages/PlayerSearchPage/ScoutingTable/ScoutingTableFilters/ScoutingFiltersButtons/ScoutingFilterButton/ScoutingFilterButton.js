import React, { useState, memo, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, ClickAwayListener, Button } from "@mui/material";
import Image from "next/image";

import { FiltersArrow } from "public";

const FilterButton = styled(Grid)(({ theme }) => ({
  position: "relative",

  "& .text": {
    marginRight: "auto",
    fontSize: "12px",
    lineHeight: "10px",
    fontWeight: 600,
    // whiteSpace: "nowrap",
    textTransform: "capitalize",
    "@media (max-width:1144px)": {
      fontSize: "1.6em",
    },
    "@media (max-width:960px)": {
      fontSize: "1.2em",
    },
  },
  "& .img": {
    borderRadius: "50%",
    objectFit: "cover",
  },

  "& .dropDownContainer": {
    position: "absolute",
    width: "auto",
    zIndex: 3,
    "::before": {
      content: '""',
      width: "20px",
      height: "10px",
      background: "#FFF",
      position: "absolute",

      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      borderRadius: "4px",
      // transform: "rotate(-33deg)",
      boxShadow: " 0px 8px 20px rgba(2, 42, 84, 0.1)",
    },
  },

  "& .btn": {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    flexWrap: "nowrap",
    borderRadius: "8px",
    borderColor: "rgba(161, 181, 201, 0.5)",
    border: "1px solid #A1B5C9",
    height: "32px",
    width: "100%",
    fontSize: "1em",
    "@media (max-width:1144px)": {
      padding: "0 1em ",
    },
    "@media (max-width:960px)": {
      height: "24px",
    },
    "@media (max-width:704px)": {
      padding: "0 0.6em",
    },
    minWidth: 32,
  },
  // "& .arrow": {
  //   display: "flex",
  //   justifyContent: "center",
  //   "@media (max-width:960px)": {
  //     "& svg": {
  //       width: 6,
  //       height: 6,
  //     },
  //   },
  // },
  "& .imageContainer": {
    marginRight: "1.3em",
    width: 20,
    height: 20,
    position: "relative",
    "@media (max-width:960px)": {
      width: 10,
      height: 10,
    },
  },
}));

export const ScoutingFilterButton = memo(
  ({
    text,
    img,
    children,
    close,
    setClose,
    color = "#677F98",
    padding = "0 2.3em 0 2em",
    dropDownTop = 40,
    dropDownLeft = 0,
    pointerTop = -9,
    pointerRight = 14,
    width = "100%",
  }) => {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
      setOpen(!open);
      if (setClose) {
        open ? setClose(true) : setClose(false);
      }
    };

    useEffect(() => {
      close && setOpen(false);
    }, [close]);

    return (
      <FilterButton item sx={{ width: width }}>
        <Button className="btn" onClick={clickHandler} sx={{ padding }}>
          {img ? (
            <>
              <Grid item className="imageContainer">
                <Image src={img} className="img" layout="fill" />
              </Grid>

              <Typography
                className="text"
                sx={{
                  color,
                }}
              >
                {text}
              </Typography>
            </>
          ) : (
            <Typography
              className="text"
              sx={{
                color,
              }}
            >
              {text}
            </Typography>
          )}

          <FiltersArrow
            style={{
              transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}`,
              stroke: "#022A54",
            }}
          />
        </Button>
        {open ? (
          <ClickAwayListener onClickAway={clickHandler}>
            <Grid
              item
              container
              className="dropDownContainer"
              sx={{
                top: dropDownTop,
                left: dropDownLeft,
                "::before": {
                  top: pointerTop,
                  right: pointerRight,
                },
              }}
            >
              {children}
            </Grid>
          </ClickAwayListener>
        ) : (
          <></>
        )}
      </FilterButton>
    );
  }
);
