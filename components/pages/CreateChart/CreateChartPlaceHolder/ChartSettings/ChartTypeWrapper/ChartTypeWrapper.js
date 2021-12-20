import { memo } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const ChartWrapper = styled(Grid)(({ theme }) => ({
  marginTop: "24px",
  "& .chartTypeTitle": {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 700,
    color: "#022A54",
    textTransform: "uppercase",
  },
}));

export const ChartTypeWrapper = memo(({ title, children }) => {
  return (
    <ChartWrapper item container direction="column">
      <Typography className="chartTypeTitle">{title}</Typography>
      {children}
    </ChartWrapper>
  );
});
