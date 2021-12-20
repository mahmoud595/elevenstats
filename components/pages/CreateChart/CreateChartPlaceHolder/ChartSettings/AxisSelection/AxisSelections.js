import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { ChartTypeWrapper } from "../ChartTypeWrapper/ChartTypeWrapper";
import { ChartSelectionWrapper } from "../ChartSelectionWrapper/ChartSelectionWrapper";

const Axis = styled(Grid)(({ theme }) => ({
  margin: "16px 0 0 0",
  padding: "17px 0",
  background: "rgba(161, 181, 201, 0.08)",
  borderRadius: "14px",
  padding: "0 14px",
  "& >div:not(:last-of-type)": {
    borderBottom: "1px solid rgba(161, 181, 201, 0.3)",
    paddingBottom: "16px",
  },

  "& >div": {
    padding: "16px 0",
  },
}));
const defaultAxis = ["X-Axis", "Y-Axis"];
const radarAxis = [
  "Stat 1",
  "Stat 2",
  "Stat 3",
  "Stat 4",
  "Stat 5",
  "Stat 6",
  "Stat 7",
  "Stat 8",
];

export const AxisSelections = ({ data, chart }) => {
  return (
    <ChartTypeWrapper title="Select Stats">
      <Axis item container direction="column">
        {(chart === "Radar" ? radarAxis : defaultAxis).map((val, i) => (
          <ChartSelectionWrapper
            data={data}
            axis={val}
            key={i}
            radioColor="#1BD47B"
            justify="space-between"
          />
        ))}
      </Axis>
    </ChartTypeWrapper>
  );
};
