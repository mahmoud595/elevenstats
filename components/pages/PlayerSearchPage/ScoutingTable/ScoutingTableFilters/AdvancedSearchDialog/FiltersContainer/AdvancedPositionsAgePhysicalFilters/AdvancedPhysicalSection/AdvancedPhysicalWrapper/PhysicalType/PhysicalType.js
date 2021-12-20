import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";

const Physical = styled(Grid)(({ theme }) => ({
  maxWidth: "32.1%",
  flexBasis: "32.1%",
}));
export const PhysicalType = memo(() => {
  return (
    <Physical>
      <ScoutingFilterButton
        text="is at least"
        type="physicalType"
        color="   rgba(2, 42, 84, 0.6)"
      />
    </Physical>
  );
});
