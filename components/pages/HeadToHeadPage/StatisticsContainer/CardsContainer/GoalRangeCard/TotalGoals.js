import { memo } from "react";
import { Grid, Typography, Popover, ClickAwayListener } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useState, useCallback, useMemo } from "react";
import { Btn } from "components";
import { ProfileArrow } from "public/";

const useStyles = makeStyles((theme) => ({
  arrow: {
    width: 10,
    height: 5,
    color: "#A1B5C9",

    "@media (max-width: 960px)": {
      width: 6,
      height: 4,
    },
  },
  text: {
    color: "#A1B5C9",
    // color: ,
    textTransform: "capitalize",
    fontWeight: 400,
    // lineHeight: "22px",
    whiteSpace: "nowrap",
    "@media (max-width: 960px)": {
      fontSize: "0.7rem",
    },
  },
  dataContainer: {
    padding: "2.4rem 0 0 0",
    position: "absolute",
    top: 47,
    left: 0,
    background: "#fff",
    zIndex: 1,
    borderRadius: 8,
    boxShadow: " 0px 1px 4px rgba(0, 0, 0, 0.25)",
    "& > div:last-child": {
      margin: "0",
    },
    "@media (max-width: 960px)": {
      top: 30,
    },
  },
  item: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#022A54",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
  itemContainer: {
    margin: "0 0 1.2rem 0",
    padding: "0 2em",
  },
  // paper: {
  //   marginTop: "1rem",
  //   minWidth: "17%",
  //   maxWidth: "17%",
  //   boxShadow: " 0px 1px 4px rgba(0, 0, 0, 0.25",
  //   "@media (max-width: 640px)": {
  //     minWidth: "24%",
  //     maxWidth: "24%",
  //   },
  // },
  itemGrid: {
    borderBottom: "1px solid #F6F7FA",
  },
}));

const tabs = ["total Goals", "scored", "conceded"];
export const TotalGoals = memo(({ totalGoalsHandler }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [nameBtn, setNameBtn] = useState("total Goals");
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickHandler = (name) => {
    totalGoalsHandler(name);
    setNameBtn(name);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const data = useCallback(() => {
    return tabs.map((name, i) => (
      <Grid item key={i} className={classes.itemContainer}>
        <Grid item container className={classes.itemGrid}>
          <Btn
            onClick={() => clickHandler(name)}
            fullWidth={true}
            padding="0px 0 10px 0"
          >
            <Typography
              className={classes.item}
              style={{
                fontWeight: `${
                  name.toLocaleLowerCase() === nameBtn.toLowerCase()
                    ? "600"
                    : "400"
                }`,
              }}
            >
              {name}
            </Typography>
          </Btn>
        </Grid>
      </Grid>
    ));
  }, [anchorEl]);
  const memoizedData = useMemo(() => data(), [anchorEl]);

  return (
    <Grid item style={{ position: "relative" }}>
      <Btn
        ariaDescribedBy={id}
        padding="7px 1.6rem 7px 1.6rem"
        fullWidth={true}
        margin="0"
        borderColor="#A1B5C9"
        hidpiPadding="7px 1rem 7px 1rem"
        lowSizePadding="7px 0.2rem"
        onClick={handleClick}
        backgroundColor="#fff"
      >
        <Grid
          container
          wrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h5" className={classes.text}>
              {nameBtn}
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ProfileArrow className={classes.arrow} />
          </Grid>
        </Grid>
      </Btn>
      {anchorEl ? (
        <ClickAwayListener onClickAway={handleClose}>
          <Grid container className={classes.dataContainer} direction="column">
            {memoizedData}
          </Grid>
        </ClickAwayListener>
      ) : null}
    </Grid>
  );
});
