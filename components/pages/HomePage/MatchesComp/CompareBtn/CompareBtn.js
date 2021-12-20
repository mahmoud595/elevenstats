import { Grid, Typography, Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Link from "next/link";

import { BettingOdds } from "public/";
const useStyles = makeStyles((theme) => ({
  oddsBtn: {
    backgroundColor: ({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#2B5198",
    color: "white",
    fill: "white",
    width: "85%",
    padding: ({ small }) => (small ? 5 : "10px 5px"),
    "@media (max-width: 960px)": {
      padding: "3px 1px",
    },
    borderRadius: 6,
    "&:hover": {
      backgroundColor: ({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "#2B5198",
    },
  },
  svgContainer: {
    margin: "auto 0",
    "& > svg": {
      width: "50%",
      height: "50%",
    },
  },
}));

export const CompareBtn = ({ backgroundColor, title, small, slug }) => {
  const classes = useStyles({ backgroundColor, small });
  return (
    <a href={`h2h/${encodeURI(slug)}`}>
      <Button className={classes.oddsBtn}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={9}>
            <Typography variant="caption" className={classes.typography}>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            className={classes.svgContainer}
            container
            alignItems="center"
            justifyContent="center"
          >
            <BettingOdds />
          </Grid>
        </Grid>
      </Button>
    </a>
  );
};
