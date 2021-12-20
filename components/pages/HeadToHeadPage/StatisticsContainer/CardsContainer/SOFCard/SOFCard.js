import { memo } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Offsides } from "./Offsides";
import { Misc } from "./Misc";
import { Shots } from "./Shots";

const useStyles = makeStyles((theme) => ({
  shotsGrid: {
    paddingRight: "5em",
    flex: 1,
    "@media (max-width:1280px)": {
      paddingRight: 0,
    },
    "@media (max-width:600px)": {
      paddingRight: "0",
    },
  },
}));
export const SOFCard = memo(() => {
  const md = useMediaQuery("(max-width:1265px)");
  const classes = useStyles();
  return (
    <Grid item container wrap={md ? "wrap" : "nowrap"}>
      <Grid item container md={md ? 12 : 8} className={classes.shotsGrid}>
        <Shots />
      </Grid>

      <Grid item container md={md ? 12 : 4} sx={{ flex: 1 }}>
        <Offsides />
        <Misc />
      </Grid>
    </Grid>
  );
});
