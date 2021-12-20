import { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Button, Grid, Typography } from "@mui/material";

import Btn from "../../Btn/Btn";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    marginTop: "1em",
  },
  buttonText: {
    fontSize: "1.1em",

    color: "#000",
    fontWeight: "600",
  },
  textColor: {
    color: "#fff",
  },
}));
export const Dashboard = ({ typeHandler }) => {
  const [type, setType] = useState("league");

  const clickHandler = (e) => {
    setType(e.target.innerText.toLowerCase());
    typeHandler(e.target.innerText.toLowerCase());
  };
  const classes = useStyles({ type });
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      // spacing={2}
      className={classes.dashboard}
    >
      <Grid item xs={5}>
        <Btn
          fullWidth={true}
          backgroundColor={type === "league" ? "#3896BF" : "transparent"}
          padding="0.8em 2.3em"
          lowSizePadding="0.1em"
          onClick={clickHandler}
          borderRadius="20px"
        >
          <Typography
            className={`${type === "league" && classes.textColor} ${
              classes.buttonText
            }`}
          >
            LEAGUE
          </Typography>
        </Btn>
      </Grid>
      <Grid item xs={5}>
        <Btn
          fullWidth={true}
          backgroundColor={type === "team" ? "#3896BF" : "transparent"}
          padding="0.8em 2.3em"
          lowSizePadding="0"
          borderRadius="20px"
          onClick={clickHandler}
        >
          <Typography
            className={`${type === "team" && classes.textColor} ${
              classes.buttonText
            }`}
          >
            TEAM
          </Typography>
        </Btn>
      </Grid>
    </Grid>
  );
};
