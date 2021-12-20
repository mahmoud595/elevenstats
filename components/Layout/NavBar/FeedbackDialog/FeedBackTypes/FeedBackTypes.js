import { memo } from "react";
import {
  Typography,
  Grid,
  Dialog,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextareaAutosize,
  useMediaQuery,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { X, Checked } from "public";

const feedbackTypes = ["Ideas", "Bugs", "Data Accuracy", "Usability"];

const useStyles = makeStyles(({ palette }) => ({
  icon: {
    width: 16,
    height: 16,
    border: "1px solid #A1B5C9",
    borderRadius: "2px",
    position: "relative",
    "&:before": {
      content: "",
      top: 0,
      right: 0,
    },
  },
  checkedIcon: {
    position: "absolute",
    top: "-4px",
    right: "0",
  },
  labelText: {
    fontSize: "2em",
    lineHeight: "12px",
    color: "#022A54",
    "@media (max-width:600px)": {
      fontSize: 12,
    },
  },
  formControl: {
    marginTop: "17px",
    marginLeft: 0,
  },
  formGroup: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  checkBox: {
    padding: "9px 9px 9px 0",
  },
}));
export const FeedBackTypes = memo(({ feedBackType, changeHandler }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    changeHandler(e);
  };
  return (
    <FormGroup className={classes.formGroup}>
      {feedbackTypes.map((type, i) => (
        <FormControlLabel
          classes={{
            label: classes.labelText,
            root: classes.formControl,
          }}
          key={i}
          control={
            <Checkbox
              checked={feedBackType.type}
              onChange={(e) => handleChange(e)}
              name={type}
              classes={{
                root: classes.checkBox,
              }}
              checkedIcon={
                <Grid
                  item
                  className={classes.icon}
                  style={{
                    border: `${feedBackType[type] && "1px solid #246BFD"}`,
                  }}
                >
                  <Grid item className={classes.checkedIcon}>
                    <Checked />
                  </Grid>
                </Grid>
              }
              icon={<span className={classes.icon}></span>}
            />
          }
          label={type}
        />
      ))}
    </FormGroup>
  );
});
