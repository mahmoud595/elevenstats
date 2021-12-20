import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import Btn from "components/Layout/Btn/Btn";
const FeedbackDialog = dynamic(
  import("./FeedbackDialog/FeedbackDialog").then((mod) => mod.FeedbackDialog)
);

const useStyles = makeStyles(({ palette }) => ({
  text: {
    fontSize: "1.6em",
    lineHeight: "10px",
    fontWeight: 600,
    color: "#fff",
  },
}));
export const FeedBackBtn = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid item>
        <Btn
          backgroundColor="#022A54"
          boxShadow="0px 4px 10px rgba(2, 42, 84, 0.18)"
          borderRadius="35px"
          padding="10px 2.3em 11px 2.3em"
          lowSizePadding="5px 1.5em"
          onClick={clickHandler}
        >
          <Typography className={classes.text}>Feedback</Typography>
        </Btn>
      </Grid>
      <FeedbackDialog open={open} setOpen={setOpen} />
    </>
  );
};
