import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";

import { BecomePremiumBtn } from "../BecomePremiumBtn/BecomePremiumBtn";
import { Lock } from "public/";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
    padding: ({ padding }) => padding,
    borderRadius: "0px 0px 20px 20px",
    color: "#FFF",
    // '@media (max-width: 1620px)': {
    //   padding: '2em 2em !important',
    // },
  },
  svgContainer: {
    height: "100%",
    width: "100%",
    marginRight: "1.5rem",
    "& svg": {
      width: "120%",
      height: "100%",
      fill: "#1BD47B",
    },
  },
  text: {
    fontWeight: 700,
  },
  unlockText: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export const BottomUpgradeContainer = ({ teamCorners, text, padding }) => {
  const classes = useStyles({ padding });
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="space-between"
      direction={teamCorners ? "column" : "row"}
    >
      <Grid item xs={!teamCorners && 6}>
        <Typography variant="h5" className={classes.text}>
          {text}
        </Typography>
      </Grid>
      <Grid
        item
        xs={!teamCorners && 6}
        style={{ width: "100%", paddingTop: teamCorners ? 20 : 0 }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={teamCorners ? 4 : 5}>
            <Grid container alignItems="center" wrap="nowrap">
              <Grid item xs={2} className={classes.svgContainer}>
                <Lock />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h5" className={classes.unlockText}>
                  UNLOCK Data
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={teamCorners ? 8 : 7}>
            <BecomePremiumBtn />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
