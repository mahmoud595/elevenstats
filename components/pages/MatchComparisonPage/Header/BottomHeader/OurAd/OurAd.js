import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { HighLights, Summary } from "../../../../..";

const useStyles = makeStyles((theme) => ({
  ourAd: {
    backgroundColor: "#43093C",
    borderRadius: "1.5em",
  },
}));

const OurAd = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.ourAd} container xs={9}>
      <HighLights />

      <Summary />
    </Grid>
  );
};

export default OurAd;
