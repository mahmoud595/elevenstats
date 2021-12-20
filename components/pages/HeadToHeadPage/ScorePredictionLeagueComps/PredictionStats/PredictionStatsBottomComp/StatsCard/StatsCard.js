import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles(({ palette }) => ({
  statsCard: {
    backgroundImage: ({ gradColor }) =>
      `linear-gradient(0.27deg, #FFFFFF 50.11%, ${gradColor} 180.41%)`,

    borderRadius: 20,
    height: "142px",
    // marginRight: '2em',

    padding: "2em 0 2em 0",
    // height: '100%',
    maxWidth: "172px",

    "@media (max-width: 960px)": {
      padding: "0",
      height: "90px",
    },
    "@media (max-width: 600px)": {
      borderRadius: 14,
      padding: "3em 1.3em 1.5em 1.3em",
      margin: "1.5em 0",
      maxWidth: "96px",
      height: "fit-content",
    },
    "@media (max-width: 281px)": {
      margin: "1.5em 5px",
    },
  },
  percentage: {
    color: ({ color }) => color,
    fontWeight: "600",
    // fontSize: ({ h2h }) => (h2h ? '3.9rem' : '5rem'),
    // '@media (max-width: 1680px)': {
    //   fontSize: ({ h2h }) => (h2h ? '3rem' : '4rem'),
    // },
    fontSize: ({ h2h }) => (h2h ? "2rem" : "3rem"),

    // '@media (max-width: 1680px)': {
    //   fontSize: ({ h2h }) => (h2h ? '2rem' : '3rem'),
    // },
    "@media (max-width: 960px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width: 740px)": {
      fontSize: "1.7rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem !important",
    },
  },

  average: {
    color: "#43093C",
    lineHeight: ({ h2h }) => !h2h && "16px",

    fontSize: ({ h2h }) => (h2h ? "1.5rem" : "1.5rem"),

    "@media (max-width: 1493px)": {
      fontSize: ({ h2h }) => (h2h ? "1rem" : "1.4rem"),
    },
    "@media (max-width: 1154px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 740px)": {
      fontSize: "0.7rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
  },

  leagueAverage: {
    textAlign: "center",
    color: "#707070",
    fontWeight: "700",
    "@media (max-width: 1680px)": {
      fontSize: ({ h2h }) => h2h && "1.1rem",
    },
    "@media (max-width: 1600px)": {
      fontSize: ({ h2h }) => (h2h ? "0.9rem" : "1.1rem"),
    },
    "@media (max-width: 1154px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.6rem !important",
    },

    "@media (max-width: 600px)": {
      fontSize: "0.8rem !important",
    },
  },
  leagueGrid: {
    // minHeight: '36px',
    // marginTop: '1rem',
    // '@media (max-width: 1680px)': {
    //   marginTop: '2rem',
    // },
    "@media (max-width: 1680px)": {
      minHeight: "0 !important",
      marginTop: "0 !important",
    },
    // "@media (max-width: 1154px)": {
    //   minHeight: "20px",
    //   marginTop: "10px !important",
    // },
    "@media (max-width: 960px)": {
      minHeight: "15px !important",
      marginTop: "0px !important",
      marginBottom: "10px",
    },
  },
  averageGrid: {
    marginBottom: "2em",
    "@media (max-width: 960px)": {
      marginBottom: 0,
    },
    "@media (max-width: 600px)": {
      margin: "19px 0 10px 0",
    },
  },
}));

export const StatsCard = React.memo(
  ({ perc, color, gradColor, type, avg, h2h }) => {
    const classes = useStyles({ color, gradColor, h2h });
    return (
      <Grid
        xs={2}
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        className={classes.statsCard}
      >
        <Grid item>
          <Typography className={classes.percentage}>{perc}</Typography>
        </Grid>
        <Grid item className={classes.averageGrid}>
          <Typography className={classes.average}>{avg}</Typography>
        </Grid>
        <Grid
          item
          className={classes.leagueGrid}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            className={classes.leagueAverage}
            variant={h2h ? "caption" : "h5"}
          >
            {type}
          </Typography>
        </Grid>
      </Grid>
    );
  }
);
