import React from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { CalenderArrowLeft, CalenderArrowRight, DropDownArrow } from "public";
import { Btn } from "components";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    marginBottom: "10px",
  },
  btnText: {
    color: "#fff",
  },
  view: {
    letterSpacing: "0.25em",
    fontWeight: "400",
  },
  day: {
    letterSpacing: "0.25em",
    fontWeight: "600",
  },
}));

export const CalenderHeader = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid item xs={1}>
        <Btn
          backgroundColor="#AD60A4"
          borderRadius="6px"
          fullWidth
          padding="1em 0"
        >
          <Typography variant="h5" className={classes.btnText}>
            Today
          </Typography>
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <CalenderArrowLeft />
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.day}>
              February, 2021
            </Typography>
          </Grid>
          <Grid item>
            <CalenderArrowRight />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item>
            <Typography variant="caption" className={classes.view}>
              VIEW BY
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Btn
              backgroundColor="#FFFFFF"
              borderRadius="6"
              fullWidth
              padding="1.1em 1.4em"
              lowSizePadding="0.5em 0.5em"
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={10} container>
                  <Typography variant="caption" style={{ textAlign: "left" }}>
                    Month
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <DropDownArrow />
                </Grid>
              </Grid>
            </Btn>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
