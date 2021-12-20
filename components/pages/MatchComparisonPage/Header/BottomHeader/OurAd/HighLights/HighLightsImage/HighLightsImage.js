import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  playerImage: {
    width: "30em",
    height: "22em",
    "@media only screen and (max-width:1660px)": {
      width: "27em",
    },
    // "@media only screen and (max-width:1336px)": {
    //   width: "15em",
    //   height: "15em",
    // },

    "@media only screen and (max-width:1280px)": {
      width: "20em",
    },
    "@media only screen and (max-width:960px)": {
      width: "50em",
    },
    "@media only screen and (max-width:776px)": {
      width: "38em",
    },
    "@media only screen and (max-width:692px)": {},
  },
  player: {
    width: "95%",
    height: "100%",
  },
}));

const HighLightsImage = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Image
        src="https://cdn.sportmonks.com/images/soccer/players/8/8.png"
        width={210}
        height={228}
      />
    </Grid>
  );
};

export default HighLightsImage;
