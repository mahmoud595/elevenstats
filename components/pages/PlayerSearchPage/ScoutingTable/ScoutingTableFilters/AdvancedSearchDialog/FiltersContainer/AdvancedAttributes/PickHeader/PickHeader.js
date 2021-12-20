import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";

const PickContainer = styled(Grid)(({ theme }) => ({
  padding: "12px 4.3em 18px 0",
  "& .pick": {
    maxWidth: "42.9%",
    flexBasis: "42.9%",
  },
  "& .filtersNumberGrid": {
    maxWidth: "21.1%",
    flexBasis: "21.1%",
    padding: "11px 2.3em ",
    borderRadius: "8px",
    backgroundColor: "#F6F7FA",
  },
  "& .filtersNumber": {
    fontSize: "2em",
    lineHeight: "10px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    color: "#022A54",
    "@media (max-width:1144px)": {
      fontSize: "1.6em",
    },
    "@media (max-width:960px)": {
      fontSize: "1.2em",
    },
  },
}));
export const PickHeader = memo(({ matchedDataLength, fullDataLength }) => {
  return (
    <PickContainer
      item
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item className="pick">
        <ScoutingFilterButton text="Pick" type="attributesPick" />
      </Grid>
      <Grid item className="filtersNumberGrid">
        <Typography className="filtersNumber">
          Match {matchedDataLength} / {fullDataLength}
        </Typography>
      </Grid>
    </PickContainer>
  );
});
