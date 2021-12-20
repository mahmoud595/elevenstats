import { useState } from "react";
import { Grid, Typography, ClickAwayListener } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import Btn from "components/Layout/Btn/Btn";
import { DropDown } from "public";

const useStyles = makeStyles(({ palette }) => ({
  seasonPicker: {
    marginLeft: "2.5em",
    marginBottom: "4px",
    alignItems: "flex-end",
    display: "flex",
    position: "relative",
    minHeight: "6em",
  },
  icon: {
    transform: ({ clicked }) => (clicked ? "rotateX(180deg)" : "rotateX(0deg)"),
    display: "flex",
    alignItems: ({ clicked }) => (clicked ? "flex-start" : "center"),

    margin: ({ clicked }) => (clicked ? "5px auto 0 auto" : "0 0 0 7px"),
  },
  season: {
    fontSize: "1.8em",
    fontWeight: "600",
    color: ({ clicked }) => (clicked ? "#022A54" : "rgba(2, 42, 84, 0.5)"),
  },
  dropDown: {
    backgroundColor: "#FFFFFF",
    boxShadow: " 1px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "3px",
    position: "absolute",
    top: "100%",
    left: "0px",
    zIndex: 2,
    "& > div:last-child": {
      borderRadius: "0 0 3px 3px",
      borderBottom: "0px",
    },
  },
  seasonGrid: {
    padding: "10px 3em",
    borderBottom: "0.5px solid #EAEDF2",
    cursor: "pointer",
    "&:hover": {
      background: "#F6F7FA",
    },
  },
  seasonText: {
    fontSize: "1.8em",
    fontWeight: "400",
    // lineHeight: "6px",
    color: "rgba(2, 42, 84, 0.5)",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
    background: "transparent",
  },
}));
const seasons = [
  "2021/22",
  "2020/19",
  "2019/18",
  "2018/17",
  "2017/16",
  "2016/15",
];
export const SeasonPicker = () => {
  const [clicked, setClicked] = useState(false);
  const [season, setSeason] = useState(seasons[0]);
  const classes = useStyles({ clicked });
  const clickHandler = () => {
    setClicked(!clicked);
  };
  const handleClose = () => {
    setClicked(false);
  };
  const chooseSeason = (seasonClicked) => {
    setSeason(seasonClicked);
    setClicked(false);
  };
  return (
    <ClickAwayListener ClickAwayListener onClickAway={handleClose}>
      <Grid item className={classes.seasonPicker}>
        <Btn
          backgroundColor={clicked ? "#F6F7FA" : "rgb(230, 229, 237)"}
          borderRadius={clicked ? "7px 7px 0px 0px" : "7px"}
          padding="5px 0"
          width="13.8em"
          backgroundHover={clicked ? "#F6F7FA" : "rgb(230, 229, 237)"}
          onClick={clickHandler}
        >
          <Grid
            container
            direction={clicked ? "column" : "row"}
            justifyContent="center"
          >
            <Grid item>
              <Typography className={classes.season}>{season}</Typography>
            </Grid>

            <Grid item className={classes.icon}>
              <DropDown />
            </Grid>
          </Grid>
        </Btn>
        {clicked ? (
          <Grid item container direction="column" className={classes.dropDown}>
            {seasons.map((num, i) => (
              <Grid
                item
                key={i}
                className={classes.seasonGrid}
                onClick={() => chooseSeason(num)}
              >
                <Typography className={classes.seasonText}>{num}</Typography>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </ClickAwayListener>
  );
};
