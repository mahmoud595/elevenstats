import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { GoogleAd, OurAd } from "../../../..";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
  },
}));
const BottomHeader = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
      style={{ marginBottom: "1em" }}
    >
      <OurAd />
      <GoogleAd />
    </Grid>
  );
};

export default BottomHeader;
