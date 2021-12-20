import { useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";
import { components } from "react-select";
import Image from "next/image";

import { Clicked } from "public";
import NewsPaperIcon from "../NewsPaperIcon/NewsPaperIcon";

const useStyles = makeStyles((theme) => ({
  options: {
    backgroundColor: "transparent",
    color: "#6B7281",

    cursor: "pointer",
    // textAlign: "center",
    padding: "0.8em 1em",
    fill: "#6B7281",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
}));

export const Option = (props, valueArr, dashboard) => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const clickHandler = (e) => {
    const filteredValues = valueArr.filter((value) => {
      return value.label === props.children;
    });
    setSelected(filteredValues);
  };

  return (
    <Grid
      container
      alignItems="center"
      className={`${classes.options} `}
      value={props.children}
      onClick={clickHandler}
    >
      <Grid item xs={2}>
        {dashboard ? (
          <Image
            src="https://cdn.sportmonks.com/images//soccer/teams/8/8.png"
            width={23}
            height={31}
          />
        ) : (
          <NewsPaperIcon />
        )}
      </Grid>
      <Grid item xs={8}>
        <Typography variant="caption">
          <components.Option {...props} />
        </Typography>
      </Grid>
      <Grid item xs={2}>
        {dashboard && <Clicked />}
      </Grid>
    </Grid>
  );
};
