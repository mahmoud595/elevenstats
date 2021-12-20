import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";
// import { LineChart } from "components";
import { YearSelectionComp } from "./YearSelectionComp/YearSelectionComp";

const LineChartSectionContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  "& .titleContainer": {
    padding: "10px 11px",
    background: "rgba(36, 107, 253, .12)",
    borderRadius: "8px",
    marginRight: "auto",
  },
  "& .title": {
    fontSize: "12px",
    fontWeight: 600,
    color: "#246BFD",
  },
  "& .headerContainer": {
    "& >div:nth-of-type(2)": {
      width: "260px",
      marginRight: "18px",
      "@media (max-width: 900px)": {
        width: "160px",
      },
    },
    "& >div:nth-of-type(3)": {
      width: "232px",
      "@media (max-width: 900px)": {
        width: "150px",
      },
    },
  },
  "& .chartContainer": {
    height: "370px",
    border: "1px solid #A1B5C9",
    borderRadius: "12px",
    padding: "20px 0px 0px 0px",
    marginTop: "27px",
  },
}));

export const PlayerLineChartSection = () => {
  return (
    <LineChartSectionContainer>
      <Grid
        item
        container
        className="headerContainer"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item className="titleContainer">
          <Typography className="title">Development</Typography>
        </Grid>
        {/* <ScoutingFilterButton text="Compare attributes change since" /> */}

        <YearSelectionComp />

        <ScoutingFilterButton text="Center Forward (58%)" />
      </Grid>

      <Grid container className="chartContainer">
        {/* <LineChart /> */}
      </Grid>
    </LineChartSectionContainer>
  );
};
