import { useState } from "react";

import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  ClickAwayListener,
  Divider,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { Btn } from "components";
import { AddToFolder, FiltersArrow } from "public";
const Add = styled(Grid)(({ theme }) => ({
  position: "relative",
  "& .dialog": {
    position: "absolute",
    backgroundColor: "#fff",
    top: "40px",
    right: "0",
    padding: "4px 4px 0 4px",
    width: "219px",
    height: "243px",
    zIndex: 2,
    boxShadow: "8px 8px 100px rgba(2, 42, 84, 0.1)",
    borderRadius: "12px",
  },
  "& .createSection": {
    padding: "8px 12px",
    backgroundColor: "#F6F7FA",
    borderRadius: "12px",
  },
  "& .createText": {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "15px",
    color: "#022A54",
  },
  "& .plus": {
    fontSize: "16px",
    color: "#fff",
  },
  "& .chooseSection": {
    padding: "16px",
  },
  "& .chooseText": {
    fontSize: "8px",
    lineHeight: "10px",
    fontWeight: 600,
    color: "#677F98",
    textTransform: "capitalize",
    letterSpacing: "0.75px",
  },
  "& .label": {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "16px",
  },
  "& .radio": {
    padding: "10px 0 0 10px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  "& .labelRoot": {
    marginBottom: "5px",
  },
  "& .radioRoot": {
    "& svg": {
      fill: "#1BD47B",
    },
  },
}));
const options = [
  "Zoomable Bubble Folder",
  "Radar Charts Folder",
  "Polar Charts Folder",
  "Line Charts Folder",
];
export const AddToFolderBtn = () => {
  const [open, setOpen] = useState(false);
  const [valueSelected, setValueSelected] = useState();
  const addHandler = (bool) => {
    setOpen(bool);
  };
  const changeHandler = (value) => {
    setValueSelected(value);
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={() => addHandler(false)}>
      <Add>
        <Btn
          padding="10px 12px 10px 13px"
          borderRadius="8px"
          backgroundColor="#022A54"
          margin="0 24px 0 0 "
          onClick={() => addHandler(true)}
        >
          <Grid container alignItems="center">
            <AddToFolder />
            <Typography
              className="historyText"
              sx={{ color: "#fff", margin: "0 10px " }}
            >
              Add to folder
            </Typography>
            <FiltersArrow
              style={{
                stroke: "#fff",
                transform: open ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </Grid>
        </Btn>
        {open ? (
          <Grid
            item
            className="dialog"
            container
            direction="column"
            wrap="nowrap"
          >
            <Grid
              item
              container
              className="createSection"
              alignItems="center"
              wrap="nowrap"
              justifyContent="space-between"
            >
              <Typography className="createText">Create New Folder</Typography>
              <Btn
                padding="0px 7px 0 7px"
                borderRadius="6px"
                backgroundColor="#022A54"
              >
                <Typography className="plus">+</Typography>
              </Btn>
            </Grid>
            <Grid item container className="chooseSection" direction="column">
              <Grid
                item
                container
                alignItems="center"
                justifyContent="space-between"
                wrap="nowrap"
              >
                <Typography className="chooseText">
                  {" "}
                  Or Choose from current folders
                </Typography>
                <Divider
                  sx={{
                    background: "#EAEDF2",
                    width: "31px",

                    margin: 0,
                  }}
                />
              </Grid>
              <RadioGroup
                value={valueSelected}
                name="radio-buttons-group"
                classes={{
                  root: "radio",
                }}
              >
                {options.map((option, i) => (
                  <FormControlLabel
                    value={option}
                    control={
                      <Radio
                        classes={{
                          root: "radioRoot",
                        }}
                      />
                    }
                    label={option}
                    key={i}
                    classes={{
                      label: "label",
                      root: "labelRoot",
                    }}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: option === valueSelected ? "#022A54" : "#677F98",
                      },
                    }}
                    onChange={() => changeHandler(option)}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Add>
    </ClickAwayListener>
  );
};
