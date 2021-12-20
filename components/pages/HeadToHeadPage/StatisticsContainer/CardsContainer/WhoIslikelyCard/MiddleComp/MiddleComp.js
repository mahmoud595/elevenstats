import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, useMediaQuery } from "@mui/material";

import { LinearDeterminate } from "components/";

const useStyles = makeStyles(({ palette }) => ({
  text: {
    whiteSpace: "break-spaces",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 400,
    "@media only screen and (max-width:1680px)": {
      fontSize: "1.4rem",
    },
    "@media only screen and (max-width:1440px)": {
      fontSize: "1.2rem",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:723px)": {
      fontSize: "0.8rem",
    },
    "@media only screen and (max-width:640px)": {
      lineHeight: "12px",
      fontSize: 8,
      fontWeight: 600,
    },
  },
  textGrid: {
    "@media only screen and (max-width:640px)": {
      marginBottom: "15px",
    },
  },
  root: {
    padding: "1.8vh 0 1.2rem 0",
    height: "100%",
    "@media only screen and (max-width:1566px)": {
      padding: "2rem 2rem 1.1vh 2rem",
    },
    "@media only screen and (max-width:960px)": {
      padding: "0.7rem 2rem 0.4rem 2rem",
    },
    "@media only screen and (max-width:640px)": {
      padding: "0 25px 14px 25px",
    },
  },
  inlineText: {
    display: "inline",
    fontSize: "inherit",
  },
}));

export const MiddleComp = ({ value, teamName, chance }) => {
  const classes = useStyles();
  const sm = useMediaQuery("(max-width:640px)");

  // console.log(value);
  return (
    <Grid
      container
      direction="column"
      justifyContent={sm ? "center" : "space-between"}
      className={classes.root}
    >
      <Grid item className={classes.textGrid}>
        <Typography className={classes.text}>
          There is a <span className={classes.inlineText}>{chance}</span> that{" "}
          {teamName} will score a goal based on our data.
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <LinearDeterminate
          value={value}
          height={sm ? "7px" : "20px"}
          borderRadius={sm ? "4px" : "100px"}
          colorPrimary="#1BD47B"
          colorSecondary="#FB5266"
          width="80%"
        />
      </Grid>
    </Grid>
  );
};
