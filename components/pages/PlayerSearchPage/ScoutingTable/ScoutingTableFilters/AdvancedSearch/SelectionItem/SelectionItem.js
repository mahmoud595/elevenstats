import { memo, useState } from "react";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";

import { FiltersArrow } from "public";

const SelectionItemContainer = styled(Grid)(() => ({
  height: "45px",
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  "& .rowForm": {
    // flex: 1,
    margin: 0,
    // width: '100%',
  },
  "& .arrowContainer": {
    height: "19px",
    width: "19px",
    borderRadius: "50%",
  },
}));

export const SelectionItem = ({ item, noArrow, image }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <SelectionItemContainer>
      <FormControlLabel
        control={
          <>
            <Checkbox checked={checked} onChange={handleChange} />
            {image ? (
              <Grid
                sx={{
                  width: "24px",
                  height: "24px",
                  background: "#1BD47B",
                  borderRadius: "50%",
                  margin: "0px 10px",
                }}
              ></Grid>
            ) : null}
          </>
        }
        label={item}
        className="rowForm"
        defaultValue="false"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: 500,
            textTransform: "capitalize",
            color: checked ? "#022A54" : "#677F98",
          },
          "& .Mui-checked": {
            color: "#246BFD",
          },
          "& .MuiSvgIcon-root": {
            width: "14px",
            height: "14px",
          },
        }}
      />
      {!noArrow ? (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className="arrowContainer"
          sx={{ background: checked ? "#246BFD" : "transparent" }}
        >
          <FiltersArrow
            style={{
              transform: "rotate(-90deg)",
              stroke: checked ? "#FFF" : "#022A54",
            }}
          />
        </Grid>
      ) : null}
    </SelectionItemContainer>
  );
};
