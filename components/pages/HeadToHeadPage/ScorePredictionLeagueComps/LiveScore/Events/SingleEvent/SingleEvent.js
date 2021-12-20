import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { MissedPenalty } from "public";

const useStyles = makeStyles(({ palette }) => ({
  imageContainer: {
    // margin: "0px 8px",
    width: 20,
    height: 30,
  },
  // teamContainer: {
  //   padding: '0px 15px',
  // },
  rightArrow: {
    margin: "0px 8px",
    fontSize: 17,
    color: "red",
  },
  leftArrow: {
    margin: "0px 8px",
    fontSize: 17,
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
    width: 10,
    height: 14,

    transform: "scale3d(1, 1, 1) rotateX(0deg) rotateY(44deg)",
  },
}));

export const SingleEvent = ({
  playerName = "Unknown Player",
  type,
  direction,
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
      direction={direction}
      style={
        {
          // padding: direction === "row" ? "0px 13px 0px 0px" : "0px 0px 0px 13px",
        }
      }
      // className={classes.teamContainer}
    >
      <Grid item className={classes.playerNameGrid}>
        <Typography variant="h5" className={classes.playerName}>
          {playerName}
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.imageContainer}
        container
        justifyContent="center"
        alignItems="center"
      >
        {type === "goal" || type === "penalty" || type === "own-goal" ? (
          <Image
            src="/football.jpg"
            width={12}
            height={12}
            layout="fixed"
            alt="football image"
          />
        ) : type === "missed_penalty" ? (
          <MissedPenalty />
        ) : (
          <span
            className={classes.card}
            style={{
              background:
                type === "yellowcard"
                  ? " linear-gradient(180deg, #FFE067 0%, #ECB200 100%)"
                  : "linear-gradient(180deg, #FF8B99 0%, #EA2C42 100%)",
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};
