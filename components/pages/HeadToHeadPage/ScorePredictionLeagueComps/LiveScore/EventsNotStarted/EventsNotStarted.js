import makeStyles from '@mui/styles/makeStyles';
import { useCallback, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import { MatchTime } from "./MatchTime/MatchTime";
const useStyles = makeStyles(({ palette }) => ({
  container: {
    marginTop: "4.4em",
    "@media (max-width: 1600px)": {
      marginTop: "3em",
    },
    padding: "0 0 2.3em 0 ",
  },
  img: {
    objectFit: "cover",
  },
  hr: {
    width: 9,
    "@media (max-width: 1100px)": {
      width: 7,
    },
    transform: "rotate(90deg)",
    backgroundColor: "#D1D5DB",
    color: "#D1D5DB",
    borderColor: "#D1D5DB",
    borderStyle: "solid",
    marginBottom: "1.4em",
    "@media (max-width: 1600px)": {
      marginBottom: "2.1em",
    },
  },
  startPoint: {
    width: 16,
    height: 16,
    backgroundColor: "#FB5266",
    borderRadius: "50%",
  },
  imgContainer: {
    position: "relative",
    width: "5.8em",
    height: "5.8em",
  },
}));
export const EventsNotStarted = ({ minutes, seconds, hours }) => {
  const classes = useStyles();
  const borders = useCallback(() => {
    return [0, 1, 2, 3, 4].map((val, i) => (
      <hr key={i} className={classes.hr} />
    ));
  }, []);
  const memoBorders = useMemo(() => borders(), []);
  return (
    <Grid
      container
      direction="column"
      className={classes.container}
      justifyContent="center"
      alignItems="center"
    >
      {/* <Grid item className={classes.imgContainer}>
        <Image src="/soccer.png" layout="fill" className={classes.img} />
      </Grid>
      {memoBorders} */}
      <Grid item>
        <MatchTime minutes={minutes} seconds={seconds} hours={hours} />
      </Grid>
      {/* {memoBorders}
      <Grid item className={classes.startPoint}></Grid> */}
    </Grid>
  );
};
