import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { HighLightsImage, HighLightsDesc } from "../../../../../..";

const useStyles = makeStyles((theme) => ({
  highLights: {
    backgroundColor: "#43093C",
    borderTopLeftRadius: "1.5em",
    borderBottomLeftRadius: "1.5em",
    padding: "0 4em",
    // alignSelf: "stretch",

    "@media only screen and (max-width:1660px)": {
      padding: "0 3em",
    },

    "@media only screen and (max-width:1336px)": {
      padding: "0 2em",
    },
    "@media only screen and (max-width:1280px)": {
      padding: "0 2em",
    },
  },
}));

const HighLights = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      // xs={6}
      xs={7}
      className={classes.highLights}
      wrap="nowrap"
      justifyContent="space-around"
      alignItems="center"
    >
      <HighLightsImage />
      <HighLightsDesc />
    </Grid>
  );
};
export default HighLights;
