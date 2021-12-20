import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

import { KickHalfFullTime } from "../KickHalfFullTime/KickHalfFullTime";

const useStyles = makeStyles(({ palette }) => ({
  minute: {
    fontSize: 11,
    fontWeight: 500,

    color: "rgba(2, 42, 84, 0.5)",
    lineHeight: "10px",
  },
  minutesContainer: {
    // backgroundColor: "#246BFD",
    border: "1px solid #D1D5DB",
    position: "relative",
    height: 24,
    width: 24,
    "@media (max-width: 1100px)": {
      height: 28,
      width: 28,
    },
    borderRadius: "50%",
  },
  hr: {
    width: 10,
    "@media (max-width: 1100px)": {
      width: 7,
    },
    transform: "rotate(90deg)",
    backgroundColor: "#D1D5DB",
    color: "#D1D5DB",
    borderColor: "#D1D5DB",
    borderStyle: "solid",
  },
  extraMinute: {
    fontSize: 7,
    fontWeight: 600,
    color: "#FC7D58",
  },
  extraMinutesContainer: {
    position: "absolute",
    top: -4,
    right: -1,
    borderRadius: "50%",
    background: "#FFF",
  },
}));

export const EventMinute = ({ minute, extraMinute, nextMinute }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item container xs={2} justifyContent="center" alignItems="center">
        <Grid
          item
          className={classes.minutesContainer}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.minute}>{`${minute}`}</Typography>
          {extraMinute && [45, 90, 105, 120].includes(minute) && (
            <Grid item className={classes.extraMinutesContainer}>
              <Typography
                className={classes.extraMinute}
              >{`+${extraMinute}`}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
      {(minute === 45 || minute < 45) && nextMinute > 45 ? (
        <Grid container direction="column">
          <hr className={classes.hr} />
          <hr className={classes.hr} />
          <KickHalfFullTime
            title="Half Time"
            // fontColor="#1BD47B"
            backgroundColor="#FC7D58"
          />
        </Grid>
      ) : null}
    </>
  );
};
