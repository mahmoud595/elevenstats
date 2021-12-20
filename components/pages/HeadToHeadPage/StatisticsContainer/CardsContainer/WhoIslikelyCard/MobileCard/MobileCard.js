import makeStyles from '@mui/styles/makeStyles';
import { Grid, Hidden, Typography } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles(({ palette }) => ({
  teamContainer: {
    "&>div": {
      marginTop: 10,
    },
  },
  text: {
    textAlign: "center",
    fontSize: 8,
    fontWeight: 700,
    lineHeight: "10px",
    color: "#204367",
  },
  precentageText: {
    color: ({ percentageColor }) => percentageColor,
  },
  homeAwayGrid: {
    padding: "4px 5px",
    backgroundColor: ({ bgColor }) => bgColor,
    color: ({ color }) => color,
    borderRadius: 10,
  },
  homeAway: {
    fontSize: 8,
    fontWeight: 600,
    lineHeight: "8px",
  },
}));
export const MobileCard = ({
  team,
  data,
  type = "home",
  dataType = "Scored",
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <Grid
      item
      container
      xs={3}
      direction="column"
      alignItems="center"
      className={classes.teamContainer}
    >
      <Grid item>
        <Typography className={classes.text}>{team?.name}</Typography>
      </Grid>
      <Grid item>
        <Image width={48} height={48} src={team?.logoPath} alt={team?.name} />
      </Grid>
      <Grid item>
        <Typography className={classes.text}>
          {dataType} in <span className={classes.precentageText}>{data}%</span>{" "}
          of matches
        </Typography>
      </Grid>
      <Grid item className={classes.homeAwayGrid}>
        <Typography className={classes.homeAway}>{type}</Typography>
      </Grid>
    </Grid>
  );
};
