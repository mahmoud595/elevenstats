import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";

import { Whistle } from "public";
const useStyles = makeStyles(({ palette }) => ({
  ftCircle: {
    height: 12,
    width: 12,

    "@media (max-width: 1100px)": {
      height: 28,
      width: 28,
    },
    borderRadius: "50%",
    // background: "#FB5266",
  },
  ftTitle: {
    color: "#022A54",
    fontSize: 11,
    fontWeight: 600,
    lineHeight: "9px",
  },
  ftContainer: {
    padding: "5px 0",
  },
  ftTitleGrid: {
    marginLeft: 6,
  },
}));

export const KickHalfFullTime = ({ title, fontColor, backgroundColor }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row-reverse"
      className={classes.ftContainer}
    >
      <Grid item xs={5} container alignItems="center" container>
        <Grid item>
          <Whistle />
        </Grid>
        <Grid item className={classes.ftTitleGrid}>
          <Typography className={classes.ftTitle}>{title}</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={2} justifyContent="center" alignItems="center">
        <Grid
          item
          className={classes.ftCircle}
          style={{ background: backgroundColor }}
        ></Grid>
      </Grid>
    </Grid>
  );
};
