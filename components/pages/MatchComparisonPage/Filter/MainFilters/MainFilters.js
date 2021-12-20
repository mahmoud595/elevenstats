import { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";

import { Clicked } from "../../../../../public";

const useStyles = makeStyles(({ palette }) => ({
  imageWrapper: {
    width: "0.9em",
    height: "1.2em",
    "@media only screen and (max-width:960px)": {
      height: "2.3em",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btn: {
    borderRadius: "20px",
    padding: "1em 1em",
    minWidth: "16em",
    "@media only screen and (max-width:960px)": {
      minWidth: "27em",
    },
  },
  selected: {
    backgroundColor: "#E8E8E8",
    "&:hover": {
      backgroundColor: "#E8E8E8",
    },
  },
  text: {
    whiteSpace: "nowrap",
    "@media only screen and (max-width:1280px)": {
      fontSize: "1em",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "1em",
    },
  },
  clickedSvg: {
    width: "1em",
    height: "1.4em",
    "@media only screen and (max-width:1280px)": {
      height: "1.2em",
    },
    "@media only screen and (max-width:960px)": {
      height: "5em",
    },
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
}));

const MainFilters = ({ data }) => {
  const [value, setValue] = useState([]);
  const classes = useStyles();
  const clickHandler = (index) => {
    const newValue = [...value];
    newValue.includes(index)
      ? newValue.splice(newValue.indexOf(index), 1)
      : newValue.push(index);

    setValue(newValue);
  };

  return (
    <>
      {data?.map((el, index) => (
        <Grid item key={index}>
          <Button
            fullWidth
            className={`${classes.btn} ${
              value.includes(index) && classes.selected
            }`}
            onClick={() => clickHandler(index)}
          >
            <Grid container alignItems="center">
              <Grid item xs={1} md={2}>
                <Image
                  src="https://cdn.sportmonks.com/images/soccer/teams/8/8.png"
                  width={24}
                  height={24}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="caption" className={classes.text}>
                  {el}
                </Typography>
              </Grid>

              <Grid item xs={1} className={classes.clickedSvg}>
                {value.includes(index) && <Clicked />}
              </Grid>
            </Grid>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default MainFilters;
