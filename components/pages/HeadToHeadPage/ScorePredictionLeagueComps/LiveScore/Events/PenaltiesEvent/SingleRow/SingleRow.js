import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
  leftSide: {
    paddingRight: 31,
  },
  rightSide: {
    paddingLeft: 31,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: "50%",
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
}));

export const SingleRow = ({
  localTeamId,
  teamId,
  playerName = "Unknown Player",
  nextPlayerName = "Unknown Player",
  currentType,
  nextTeamId,
  nextType,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justifyContent="center"

      // direction={localTeamId === teamId ? 'row' : 'row-reverse'}
    >
      <Grid
        item
        container
        xs={6}
        justifyContent="flex-end"
        alignItems="center"
        className={classes.leftSide}
        wrap="nowrap"
      >
        <Typography className={classes.playerName}>
          {localTeamId === teamId
            ? playerName
            : !nextType
            ? ""
            : nextPlayerName}
        </Typography>
        <span
          className={classes.circle}
          style={{
            marginLeft: 10,
            background:
              localTeamId === teamId
                ? currentType === "pen_shootout_goal"
                  ? "#1BD47B"
                  : currentType === "pen_shootout_miss"
                  ? "#FB5266"
                  : "#A1B5C9"
                : localTeamId === nextTeamId
                ? nextType === "pen_shootout_goal"
                  ? "#1BD47B"
                  : nextType === "pen_shootout_miss"
                  ? "#FB5266"
                  : "#A1B5C9"
                : "#A1B5C9",
          }}
        ></span>
      </Grid>
      <Grid
        item
        container
        xs={6}
        className={classes.rightSide}
        alignItems="center"
        wrap="nowrap"
      >
        <span
          className={classes.circle}
          style={{
            marginRight: 10,
            background:
              localTeamId !== teamId
                ? currentType === "pen_shootout_goal"
                  ? "#1BD47B"
                  : currentType === "pen_shootout_miss"
                  ? "#FB5266"
                  : "#A1B5C9"
                : localTeamId !== nextTeamId
                ? nextType === "pen_shootout_goal"
                  ? "#1BD47B"
                  : nextType === "pen_shootout_miss"
                  ? "#FB5266"
                  : "#A1B5C9"
                : "#A1B5C9",
          }}
        ></span>
        <Typography className={classes.playerName}>
          {localTeamId !== teamId
            ? playerName
            : !nextType
            ? ""
            : nextPlayerName}
        </Typography>
      </Grid>
    </Grid>
  );
};
