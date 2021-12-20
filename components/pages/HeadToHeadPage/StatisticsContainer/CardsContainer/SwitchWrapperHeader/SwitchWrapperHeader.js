import React, { useState, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { SwitchComp } from "components/";
const useStyles = makeStyles(({ palette }) => ({
  switchText: {
    textTransform: "capitalize",
    color: palette.primary.main,
    fontSize: 11,
    fontWeight: 600,
    "@media only screen and (max-width:1660px)": {
      fontSize: 9,
    },
  },
  switch: {
    margin: "0 5px",
  },
}));
export const SwitchWrapperHeader = ({
  label1,
  label2,
  labelChecked,
  spacing,
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const classes = useStyles();

  const checkHandler = () => {
    setIsChecked(!isChecked);
    labelChecked(!isChecked);
  };
  const Header = useMemo(
    () => (
      <>
        <Grid
          item
          container
          justifyContent={spacing || "space-between"}
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Typography className={classes.switchText}>{label1}</Typography>
          </Grid>
          <Grid item className={classes.switch}>
            <SwitchComp
              rootHeight={20}
              thumbHeight={15}
              thumbWidth={15}
              width={46}
              translate={21}
              checkHandler={checkHandler}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.switchText}>{label2}</Typography>
          </Grid>
        </Grid>
      </>
    ),
    [isChecked]
  );
  return <>{Header}</>;
};
