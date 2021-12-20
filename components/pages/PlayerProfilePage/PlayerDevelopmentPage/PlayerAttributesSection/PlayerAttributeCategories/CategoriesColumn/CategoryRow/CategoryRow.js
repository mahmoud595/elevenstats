import { memo, useState } from "react";
import { Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Category = styled(Grid)(() => ({
  margin: "4px 0 4px 0",
  padding: "0px 16px 0px 10px",
  borderRadius: "8px",
  "& .rowText": {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#022A54",
  },
  "& .rowValue": {
    marginLeft: "60px",
    "@media (max-width:960px)": {
      marginLeft: "30px",
    },
  },
  "& .rowForm": {
    // flex: 1,
    margin: 0,
    width: "100%",
  },
}));

export const CategoryRow = memo(({ name, value, color }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Category
      item
      container
      alignItems="center"
      //   justifyContent="space-between"
      wrap="nowrap"
    >
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={name}
        className="rowForm"
        defaultValue="false"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "12px",
            lineHeight: "16px",
            color: checked ? color : "#022A54",
          },
          "& .Mui-checked": {
            color,
          },
          "& .MuiSvgIcon-root": {
            width: "14px",
            height: "14px",
          },
        }}
      />
      <Grid
        item
        sx={{
          color,
          fontSize: 14,
        }}
      >
        &#11165;
      </Grid>
      <Typography className="rowValue rowText">{value}</Typography>
    </Category>
  );
});
