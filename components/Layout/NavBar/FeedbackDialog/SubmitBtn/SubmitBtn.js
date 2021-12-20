import { memo } from "react";
import {
  Typography,
  Grid,
  Dialog,
  TextareaAutosize,
  useMediaQuery,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Btn from "components/Layout/Btn/Btn";
const useStyles = makeStyles(({ palette }) => ({
  btnSubmitText: {
    fontSize: "2em",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#fff",
    "@media (max-width:600px)": {
      fontSize: "14px",
    },
  },
  submitGrid: {
    marginTop: 24,
  },
}));
export const SubmitBtn = memo(({ submitHandler, error }) => {
  const xs = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  return (
    <Grid
      item
      className={classes.submitGrid}
      container
      alignItems="center"
      wrap="nowrap"
      justifyContent="flex-end"
    >
      <Btn
        padding="7px 2.3em 7px 2.3em"
        backgroundColor={error ? "#A1B5C9" : "#022A54"}
        borderRadius={xs ? "20px" : "16px"}
        onClick={submitHandler}
        lowSizePadding="9px 17px 9px 18px"
      >
        <Typography className={classes.btnSubmitText}>Submit ✨</Typography>
      </Btn>
    </Grid>
  );
});
