import { Grid, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { shallowEqual, useSelector } from "react-redux";

import { ScoutingFilterButton } from "../ScoutingFilterButton/ScoutingFilterButton";

const useStyles = makeStyles((theme) => ({
  dropDown: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "8px 8px 100px rgba(2, 42, 84, 0.1)",
    padding: "28px 4.6em",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    width: "67.6em",
    flexDirection: "row",
  },
  attribute: {
    flexBasis: "44.5%",
    maxWidth: "44.5%",
  },
  radio: {
    color: "#246BFD !important",
  },
  attributeText: {
    fontSize: "2em",
    lineHeight: "12px",
    color: "#022A54",
    textTransform: "capitalize",
  },
}));
const attributes = [
  "Crossing",
  "Aerial ability",
  "Dribbling",
  "Defensive intensity",
  "Finshing",
  "Recovery",
  "Off the ball movement",
  "Box defending",
  "Build up passing",
  "Foul winning",
  "Final third passing",
  "Set pieces",
  "Passing efficiency",
  "Offensive duels",
  "Penalites",
  "Defensive duels",
];
export const AttributesFilter = () => {
  const classes = useStyles();
  const [value, setValue] = useState("Crossing");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const attributes = useSelector(({ playerSearch }) => {
    const { playersAttributes } = playerSearch;
    return playersAttributes;
  }, shallowEqual);
  return (
    <ScoutingFilterButton
      text="Attributes"
      type="Attributes"
      pointerRight="295px"
      dropDownTop="45px"
    >
      <RadioGroup
        aria-label="attributes"
        name="radio-buttons-group"
        className={classes.dropDown}
        onChange={handleChange}
      >
        {attributes?.length ? (
          attributes?.map(({ name }, i) => (
            <FormControlLabel
              key={i}
              value={name}
              checked={name === value}
              control={
                <Radio
                  classes={{
                    colorSecondary: classes.radio,
                  }}
                />
              }
              label={name}
              className={classes.attribute}
              classes={{
                label: classes.attributeText,
              }}
            />
          ))
        ) : (
          <>No Attributes</>
        )}
      </RadioGroup>

      <Grid item className={classes.attribute}></Grid>
    </ScoutingFilterButton>
  );
};
