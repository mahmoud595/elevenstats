import { memo, useState } from "react";
import { Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { FiltersArrow } from "public";

const SelectionItemContainer = styled(Grid)(() => ({
  //   margin: '4px 0 4px 0',
  //   padding: '0px 16px 0px 10px',
  //   borderRadius: '8px',
  //   '& .rowText': {
  //     fontSize: '12px',
  //     lineHeight: '16px',
  //     color: '#022A54',
  //   },
  //   '& .rowValue': {
  //     marginLeft: '60px',
  //     '@media (max-width:960px)': {
  //       marginLeft: '30px',
  //     },
  //   },

  height: "45px",
  "& .rowForm": {
    flex: 1,
    margin: 0,
  },
  "& .arrowContainer": {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
  },
}));

export const SelectionItem = ({ item, setSelected, selected }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setSelected(item);
  };
  return (
    <SelectionItemContainer item container alignItems="center" wrap="nowrap">
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
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
      <Grid
        item
        className="arrowContainer"
        sx={{
          background: selected === item ? "#246BFD" : "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FiltersArrow
          style={{
            transform: "rotate(-90deg)",
            stroke: selected === item ? "#FFF" : "#022A54",
          }}
        />
      </Grid>
    </SelectionItemContainer>
  );
};
