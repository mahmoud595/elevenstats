import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, useMediaQuery, Hidden } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: "#FFFF",
    // boxShadow: '0px 3px 16px rgba(0, 0, 0, .16)',
    fontSize: 10,
    fontWeight: 600,
    maxWidth: "276px",
  },
  topComp: {
    padding: "1.5vh 1.2rem 1.5vh 2rem",
    background: "#fff",
    borderRadius: "20px 20px 0px 0px",
    "@media only screen and (max-width:1680px)": {
      padding: "1.5vh 1.2rem 1.5vh 1.6rem",
    },
    "@media only screen and (max-width:960px)": {
      padding: "1.1vh 1rem 0.9vh 1.4rem",
    },
    "@media only screen and (max-width:723px)": {
      padding: "0.9vh 0.7rem 0.7vh 1rem",
    },
    "@media (max-width:640px)": {
      borderRadius: "7px 7px 0px 0px",
      padding: "8px",
    },
  },
  imgContainer: {
    // marginRight: "1em",
  },
  bottomComp: {
    color: "#6B7281",
    textAlign: "center",
    backgroundColor: "#F4F7FD",
    padding: "0.9vh 0",
    borderRadius: "0px 0px 20px 20px",
    "@media only screen and (max-width:640px)": {
      borderRadius: "0px 0px 7px 7px",
    },
  },
  precentageText: {
    color: ({ percentageColor }) => percentageColor,
    display: "inline",
    fontWeight: 700,
    fontSize: "inherit",
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    "@media only screen and (min-width:1260px) and (max-width:1590px)": {
      fontSize: 11,
    },
    "@media only screen and (max-width:960px)": {
      fontSize: 8,
    },
    "@media only screen and (max-width:640px)": {
      fontWeight: 600,
    },
  },
  img: {
    objectFit: "scale-down",
  },
  teamName: {
    whiteSpace: "break-spaces",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#022A54",

    // paddingLeft: "0.7rem",
    "@media only screen and (max-width:1680px)": {
      fontSize: "1.2rem",
      paddingLeft: "0.4rem",
    },
    "@media only screen and (max-width:1440px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: 8,
    },
    "@media only screen and (max-width:723px)": {
      fontSize: "0.7rem",
    },
  },
  teamGrid: {
    lineHeight: "15px",
  },
  homeAway: {
    color: ({ color }) => color,
    fontSize: "1.3rem",
    fontWeight: "600",
    lineHeight: "14px",
    textTransform: "uppercase",
    "@media only screen and (max-width:1440px)": {
      fontSize: "1.1rem",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "0.9rem",
    },
    "@media only screen and (max-width:723px)": {
      fontSize: "0.7rem",
    },
  },
  homeAwayGrid: {
    background: ({ bgColor }) => bgColor,
    padding: "0.7vh 1.5rem",
    borderRadius: 50,
    "@media only screen and (max-width:1680px)": {
      padding: "0.6vh 1.2rem",
    },
    "@media only screen and (max-width:960px)": {
      padding: "0.5vh 0.8rem",
    },
    "@media only screen and (max-width:800px)": {
      padding: "0.1vh",
    },
  },
}));

export const Card = ({
  team,
  data,
  type = "home",
  dataType = "Scored",
  ...props
}) => {
  const classes = useStyles(props);
  const sm = useMediaQuery("(max-width:640px)");

  return (
    <Grid item container direction="column" className={classes.root}>
      <Grid
        item
        container
        wrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
        className={classes.topComp}
      >
        <Grid item sm={8}>
          <Grid container alignItems="center" wrap="nowrap">
            <Grid item className={classes.imgContainer} xs={3}>
              <Image
                src={team?.logoPath}
                width={29}
                height={38}
                className={classes.img}
                alt={team?.name}
              />
            </Grid>
            <Grid item xs={8} className={classes.teamGrid}>
              <Typography variant="h3" className={classes.teamName}>
                {team?.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.homeAwayGrid}>
            <Typography className={classes.homeAway}>{type}</Typography>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item className={classes.bottomComp}>
        <Typography className={classes.text}>
          {dataType} in <span className={classes.precentageText}>{data}%</span>{" "}
          of matches
        </Typography>
      </Grid>
    </Grid>
  );
};
