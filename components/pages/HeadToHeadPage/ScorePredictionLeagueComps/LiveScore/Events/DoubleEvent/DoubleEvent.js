import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles(({ palette }) => ({
  imageContainer: {
    width: 20,
    // height: 30,
  },
  rightArrow: {
    fontSize: 12,
    color: "red",
  },
  leftArrow: {
    fontSize: 12,
    color: "#25D982",
    transform: "rotateY(180deg)",
  },
  playerName: {
    whiteSpace: "nowrap",
    fontSize: 11,
    fontWeight: 600,
    lineHeight: "9px",
    color: "#022A54",
    "@media (max-width: 1100px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 850px)": {
      fontSize: "0.7rem",
    },
  },
  playerNameGrid: {
    margin: ({ direction }) =>
      direction === "row" ? "0 4px 0 0" : "0 0 0 4px",
  },
  card: {
    width: 17,
    height: 17,
    transform: "scale3d(1, 1, 1) rotateX(0deg) rotateY(44deg)",
  },
  // teamContainer: {
  //   padding: '0px 15px',
  // },
}));

export const DoubleEvent = ({
  type,
  direction,
  relatedPlayerName = "unknown player",
  playerName = "unknown player",
}) => {
  const classes = useStyles({ direction });
  return (
    <Grid
      container
      item
      xs={5}
      wrap="nowrap"
      alignItems="center"
      justifyContent="flex-end"
      direction="column"
      // className={classes.teamContainer}
      style={
        {
          // padding: direction === "row" ? "0px 13px 0px 0px" : "0px 0px 0px 13px",
        }
      }
    >
      <Grid
        item
        container
        justifyContent="flex-end"
        alignItems="center"
        // direction={team === "liver" ? "row" : "row-reverse"}
        direction={direction}
        wrap="nowrap"
      >
        <Grid item className={classes.playerNameGrid}>
          <Typography variant="h5" className={classes.playerName}>
            {relatedPlayerName}
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className={classes.imageContainer}
        >
          {type === "substitution" ? (
            <Grid item className={classes.rightArrow}>
              &#10148;
            </Grid>
          ) : type === "card" ? (
            <span className={classes.card} style={{ background: "red" }} />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="flex-end"
        // direction={team === "liver" ? "row" : "row-reverse"}
        direction={direction}
        wrap="nowrap"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" className={classes.playerName}>
            {playerName}
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className={classes.imageContainer}
        >
          {type === "substitution" ? (
            <Grid item className={classes.leftArrow}>
              &#10148;
            </Grid>
          ) : type === "card" ? (
            <span className={classes.card} style={{ background: "yellow" }} />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
