import { memo } from "react";

import makeStyles from '@mui/styles/makeStyles';
import { TextField, Grid, InputAdornment } from "@mui/material/";

import { Mail } from "public";
const useStyles = makeStyles(({ palette }) => ({
  inputGrid: {
    marginTop: 24,
  },
  inputRoot: {
    borderRadius: 10,
  },
  inputFocused: {
    outline: "none !important",
  },
  textField: {
    width: "100%",
  },
  input: {
    fontSize: 12,
    lineHeight: 20,
    color: "rgba(2, 42, 84, 1)",
  },
}));

export const EmailInput = memo(({ emailHandler }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.inputGrid}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="email"
        InputProps={{
          classes: {
            root: classes.inputRoot,
            focused: classes.inputFocused,
            input: classes.input,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Mail />
            </InputAdornment>
          ),
        }}
        placeholder="Your Email (optional)"
        classes={{
          root: classes.textField,
        }}
        onChange={(e) => emailHandler(e)}
      />
    </Grid>
  );
});
