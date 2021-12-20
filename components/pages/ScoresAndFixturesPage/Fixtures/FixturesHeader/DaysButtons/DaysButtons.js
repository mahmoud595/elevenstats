import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Btn } from "components";
const useStyles = makeStyles(({ palette }) => ({}));
const buttons = ["Yesterday", "Today", "Tomorrow"];

export const DaysButtons = () => {
  const classes = useStyles();
  const [clickedButton, setClickedButton] = useState(1);

  const clickHandler = (i) => {
    setClickedButton(i);
  };

  return (
    <Grid item xs={4}>
      <Grid container spacing={2}>
        {buttons.map((btn, i) => (
          <Grid item xs={4} key={i}>
            <Btn
              backgroundColor={clickedButton === i ? "#FFE281" : "#6B2262"}
              onClick={() => clickHandler(i)}
              color={clickedButton === i ? "#42083B" : "#fff"}
              borderRadius="21px"
              fullWidth
              padding="1em 0"
              lowSizePadding="0.3em 0"
            >
              <Typography variant="caption">{btn}</Typography>
            </Btn>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
