import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { DropDownSelect } from "components";
import Btn from "components/Layout/Btn/Btn";
import { ArrowLeft, ArrowRight } from "public";
const useStyles = makeStyles(({ palette }) => ({
  btnText: {
    color: "#6B7281",
    fontWeight: "400",
  },
  text: {
    letterSpacing: "0.25em",
  },
}));

const myOptions = [
  { value: "Season 2020-2021", label: "Season 2020-2021" },
  { value: "Season 2020-2021", label: "Season 2020-2021" },
  { value: "Season 2020-2021", label: "Season 2020-2021" },
  { value: "Season 2020-2021", label: "Season 2020-2021" },
  { value: "Season 2020-2021", label: "Season 2020-2021" },
  { value: "Season 2020-2021", label: "Season 2020-2021" },
  { value: "Season 2020-2021", label: "Season 2020-2021" },
];

export const SeasonButton = () => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <DropDownSelect
        target={
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid item>
              <Typography variant="caption" className={classes.text}>
                Season
              </Typography>
            </Grid>
            <Grid item>
              <Btn
                fullWidth
                backgroundColor="#fff"
                padding="1em"
                lowSizePadding="0.3em "
                startIcon={<ArrowLeft />}
                endIcon={<ArrowRight />}
              >
                <Typography variant="caption" className={classes.btnText}>
                  Season 2020-2021
                </Typography>
              </Btn>
            </Grid>
          </Grid>
        }
        options={myOptions}
      />
    </Grid>
  );
};
