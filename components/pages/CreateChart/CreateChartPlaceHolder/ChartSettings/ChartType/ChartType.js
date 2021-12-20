import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { ChartTypeWrapper } from "../ChartTypeWrapper/ChartTypeWrapper";
import { ChartSelectionWrapper } from "../ChartSelectionWrapper/ChartSelectionWrapper";

const SelectChart = styled(Grid)(({ theme }) => ({
  margin: "16px 0 0 0",
  padding: "17px 0",
  background: "rgba(161, 181, 201, 0.08)",
  borderRadius: "14px",
}));

const data = ["Zoomable Bubble", "XY Bubble", "Line", "Bar", "Radar"];

export const ChartType = ({ chartSelection }) => {
  return (
    <ChartTypeWrapper title="Chart type">
      <SelectChart item container justifyContent="center">
        <ChartSelectionWrapper
          data={data}
          title="Select Chart"
          chartSelection={chartSelection}
          justify="center"
        />
      </SelectChart>
    </ChartTypeWrapper>
  );
};
