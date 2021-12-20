import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowDown } from "@mui/icons-material";

import { Btn } from "components/";
import { DropDownArrow } from "public";

const useStyles = makeStyles(({ palette }) => ({
  leftTabsContainer: {
    // backgroundColor: "#EFF1F5",
    borderRadius: 100,
    padding: 3,
    border: "1px solid #F6F7FA",
    width: "77em",
    "@media (max-width: 900px)": {
      width: "67em",
    },
    "@media (max-width: 700px)": {
      width: "60em",
    },
  },

  item: {
    cursor: "pointer",
  },
  navText: {
    color: "rgba(2, 42, 84, 0.5)",
    // fontWeight: 600,
    fontSize: "11px",
    whiteSpace: "nowrap",
    "@media (min-width:1600px)": {
      fontSize: 13,
    },
  },
  svg: {
    height: 28,
    transition: "transform .2s ease-in-out",
  },
  svgContainer: {
    display: "flex",
  },
}));

const leagues = [
  { name: "popular" },
  { name: "international" },
  { name: "all leagues" },
  { name: "comparison" },
];

export const LeftTabsComp = ({ setSelectedLeague, selectedLeague }) => {
  const classes = useStyles();
  // const [selectedLeague, setSelectedLeague] = useState("popular");

  return (
    <Grid item className={classes.leftTabsContainer}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        {leagues.map(({ name }, i) => (
          <Grid key={i} item className={classes.item}>
            <Btn
              onClick={() => setSelectedLeague(name)}
              backgroundColor={name === selectedLeague && "#F6F7FA"}
              // height="28px"
              width="100%"
              borderRadius={"100px"}
              padding={"0 2.2em"}
              lowSizePadding={"0 1.2em"}
              // borderRadius={link === pathName && "100px"}
              // lowSizePadding={link === pathName && "1.5rem 4rem"}
            >
              <Grid container alignItems="center" wrap="nowrap">
                <Grid item>
                  <Typography
                    variant="h4"
                    className={classes.navText}
                    style={{
                      color:
                        name === selectedLeague
                          ? "#022A54"
                          : "rgba(2, 42, 84, 0.5)",
                      fontWeight: name === selectedLeague ? 600 : 400,
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
                <Grid item className={classes.svgContainer}>
                  <KeyboardArrowUpIcon
                    size="large"
                    className={classes.svg}
                    style={{
                      fill:
                        name === selectedLeague
                          ? "#022A54"
                          : "rgba(2, 42, 84, 0.5)",
                      transform:
                        name === selectedLeague ? "none" : "rotate(180deg)",
                    }}
                  />
                </Grid>
              </Grid>
            </Btn>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
