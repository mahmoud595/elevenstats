import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";

import { Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Btn } from "components";
import { EditPencil } from "public";
import { ColorBtn } from "./ColorBtn/ColorBtn";
const SelectionWrapper = styled(Grid)(({ theme }) => ({
  "& .wrapperTitle": {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "16px",
    color: "#022A54",
    marginRight: "24px",
    textTransform: "uppercase",
  },

  "& .selectionLabel": {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    color: "#022A54",
    whiteSpace: "nowrap",
  },

  "& .selectionLabelRoot": {
    margin: "0 20px 0 0",
  },
  "& .selectionLabelCheckbox": {
    margin: "0 20px 0 0",
  },
}));
export const ChartSelectionWrapper = ({
  data,
  checkbox,
  axis,
  title,
  radioColor = "#246BFD",
  chartSelection,
  justify,
}) => {
  const [selectedRadio, setSelectedRadio] = useState(data[0]);
  const [selectedCheckBox, setSelectedCheckBox] = useState([data[0]]);

  const [axisSelected, setAxisSelected] = useState(axis);
  const changeHandler = (val) => {
    if (checkbox) {
      setSelectedCheckBox([...selectedCheckBox, val]);
    } else {
      setSelectedRadio(val);
      chartSelection && chartSelection(val);
    }
  };
  const axisHandler = (axis) => {
    setAxisSelected(axis);
  };

  return (
    <SelectionWrapper
      item
      container
      alignItems="center"
      justifyContent={justify}
      // wrap="nowrap"
      // wrap="nowrap"
    >
      {axis ? (
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={<Checkbox />}
            label={axis}
            classes={{
              label: "selectionLabel",
            }}
            value={axisSelected}
            onChange={() => axisHandler(axis)}
          />
          <Btn
            padding="5px"
            borderColor="#A1B5C9"
            borderRadius="6px"
            margin="0 0 0 10px"
          >
            <EditPencil />
          </Btn>
          <ColorBtn />
        </Grid>
      ) : (
        <></>
      )}

      <>
        <Typography className="wrapperTitle">{title}</Typography>
        {data.map((val, i) => (
          <>
            {checkbox ? (
              <FormControlLabel
                control={<Checkbox />}
                label={val}
                classes={{
                  label: "selectionLabel",
                  root: "selectionLabelCheckbox",
                }}
                value={val}
              />
            ) : (
              <RadioGroup
                name="radio-buttons-group"
                key={i}
                classes={{
                  root: "radioGroup",
                }}
                value={selectedRadio}
                onChange={() => changeHandler(val)}
                sx={{
                  "& .MuiRadio-root": {
                    color: `${radioColor} !important`,
                    padding: "7px",
                  },
                  "& .MuiFormControlLabel-label": {
                    color:
                      selectedCheckBox === val
                        ? "#022A54 !important"
                        : "rgba(2, 42, 84, 0.6) !important",
                  },
                }}
              >
                <FormControlLabel
                  value={val}
                  control={<Radio />}
                  label={val}
                  classes={{
                    label: "selectionLabel",
                    root: "selectionLabelRoot",
                  }}
                />
              </RadioGroup>
            )}
          </>
        ))}
        {axis && (
          <Btn padding="5px" backgroundColor="#FB5266" borderRadius="50%">
            <hr
              style={{
                color: "#fff",
                width: "8px",
              }}
            />
          </Btn>
        )}
      </>
    </SelectionWrapper>
  );
};
