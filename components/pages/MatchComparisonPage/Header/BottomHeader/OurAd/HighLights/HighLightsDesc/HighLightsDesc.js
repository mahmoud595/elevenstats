import { Grid, Typography, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { HighLightsBtn } from "../../../../../../..";

const useStyles = makeStyles((theme) => ({
  highLight: {
    fontSize: "3.5em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    "@media only screen and (max-width:1660px)": {
      fontSize: "2.5em",
      whiteSpace: "nowrap",
    },

    "@media only screen and (max-width:1336px)": {
      fontSize: "2em",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "2.5em",
    },
    "@media only screen and (max-width:1075px)": {
      fontSize: "2em",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "3em",
    },
    "@media only screen and (max-width:692px)": {
      fontSize: "2.2em",
    },
  },
  highLightNews: {
    fontWeight: "600",
    color: "#BF8FBA",
    marginLeft: "0.3em",
  },
  highLightName: {
    fontWeight: "400",
    color: "#EAC23D",
  },
}));

const HighLightsDesc = () => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" justifyContent="center">
      <Grid item>
        <Typography className={`${classes.highLightNews} ${classes.highLight}`}>
          Player of the day
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={`${classes.highLightName} ${classes.highLight}`}>
          Lionel Messi
        </Typography>
      </Grid>
      <HighLightsBtn />
    </Grid>
  );
};

export default HighLightsDesc;
