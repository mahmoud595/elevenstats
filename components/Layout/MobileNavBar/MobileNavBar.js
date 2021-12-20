import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { HomeMobile, CalenderMobile, FixturesMobile } from "public";
import Btn from "components/Layout/Btn/Btn";
const useStyles = makeStyles(({ palette }) => ({
  mobileNavBarContainer: {
    background: "#fff",
    borderRadius: "12px",
    padding: "7px 25px 4px 30px",
  },
  text: {
    fontSize: "9px",
    lineHeight: "12px",
  },
  hr: {
    width: "6px",
    height: "2px",
    background: "#246BFD",
    position: "absolute",
    top: "-10px",
    borderRadius: "0px 0px 12px 12px",
  },
}));
const links = [
  { text: "Home", icon: <HomeMobile /> },
  { text: "Calender", icon: <CalenderMobile /> },
  { text: "Fixtures", icon: <FixturesMobile /> },
  { text: "Standings", icon: <FixturesMobile /> },
];
export const MobileNavBar = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(0);
  const clickHandler = (i) => {
    setClicked(i);
  };
  return (
    <Grid
      container
      item
      className={classes.mobileNavBarContainer}
      alignItems="center"
      justifyContent="space-between"
    >
      {links.map(({ text, icon }, i) => (
        <Grid key={i} item container xs={2}>
          <Btn onClick={() => clickHandler(i)} key={i}>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              style={{ position: "relative" }}
            >
              {i === clicked ? <Grid item className={classes.hr}></Grid> : null}

              <Grid
                item
                className={classes.icon}
                style={{ stroke: `${i === clicked ? "#246BFD" : "#A1B5C9"}` }}
              >
                {icon}
              </Grid>
              <Grid item>
                <Typography
                  className={classes.text}
                  style={{ color: `${i === clicked ? "#246BFD" : "#A1B5C9"}` }}
                >
                  {text}
                </Typography>
              </Grid>
            </Grid>
          </Btn>
        </Grid>
      ))}
    </Grid>
  );
};
