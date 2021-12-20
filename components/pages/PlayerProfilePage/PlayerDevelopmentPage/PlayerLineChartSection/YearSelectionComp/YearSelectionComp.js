import { useState } from "react";
import { styled } from "@mui/material/styles";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";

const FormControlContainer = styled(FormControl)(() => ({
  backgroundColor: "#FFF",
  zIndex: 2,
  padding: 20,
  borderRadius: "12px",
  boxShadow: " 0px 8px 20px rgba(2, 42, 84, 0.1)",
  "& .formControl": {
    height: "40px",
    "& .radiochecked": {
      color: "#1BD47B",
    },
  },
}));

export const YearSelectionComp = () => {
  const [selected, setSelected] = useState("2021");
  const onselect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <ScoutingFilterButton
      text="Compare attributes change since"
      dropDownLeft={158}
      dropDownTop={38}
    >
      <FormControlContainer component="fieldset">
        <RadioGroup
          aria-label="yearSelect"
          defaultValue="2021"
          name="radio-buttons-group"
        >
          {["2021", "2020", "2019"].map((year) => (
            <FormControlLabel
              active={selected == year}
              key={year}
              value={year}
              sx={{
                "& .label": {
                  color:
                    selected == year
                      ? "rgba(2, 42, 84, 1)"
                      : "rgba(2, 42, 84, 0.6)",
                  fontWeight: selected == year ? 600 : 400,
                  fontSize: "12px",
                },
              }}
              classes={{ label: "label", root: "formControl" }}
              control={
                <Radio
                  classes={{ checked: "radiochecked" }}
                  onChange={(e) => onselect(e)}
                />
              }
              label={year}
            />
          ))}
        </RadioGroup>
      </FormControlContainer>
    </ScoutingFilterButton>
  );
};
