import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  googleAd: {
    alignSelf: "stretch",
  },

  ad: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
}));

const GoogleAd = () => {
  const classes = useStyles();

  return (
    <Grid item xs={2}>
      <Image
        src="https://cdn.sportmonks.com/images/soccer/players/8/8.png"
        width={300}
        height={250}
      />
    </Grid>
  );
};

export default GoogleAd;
