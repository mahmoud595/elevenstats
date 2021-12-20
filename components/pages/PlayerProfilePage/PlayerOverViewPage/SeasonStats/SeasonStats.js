// import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { PlayerSeasonStats } from "public";
import { PlayerCardWrapper } from "../PlayerCardWrapper/PlayerCardWrapper";
import { GroupTabs } from "./GroupTabs/GroupTabs";
import { PlayerSeasonStatsTable } from "./PlayerSeasonStatsTable/PlayerSeasonStatsTable";
import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";

const SeasonStatsContainer = styled(Grid)(() => ({
  marginTop: "20px",
  borderTop: "1px solid #EAEDF2",
  display: "flex",
  flexDirection: "column",
  "& .seasonText": {
    fontSize: "11px",
    fontWight: 600,
  },
}));
export const SeasonStats = ({ gridArea, title, icon, children }) => {
  return (
    <PlayerCardWrapper
      gridArea="seasonStats"
      title="Season stats"
      icon={<PlayerSeasonStats />}
      svgbgColor="rgba(36, 107, 253, 0.08)"
    >
      <SeasonStatsContainer>
        <Grid container alignItems="center">
          <GroupTabs />
          <Grid
            sx={{
              display: "flex",

              alignItems: "center",
              paddingTop: "20px",
              marginLeft: "auto",
            }}
          >
            <Typography
              className="seasonText"
              color="secondary"
              marginRight="16px"
            >
              season
            </Typography>
            <ScoutingFilterButton text="2019/2020" width="117px" />
          </Grid>
        </Grid>

        <PlayerSeasonStatsTable />
      </SeasonStatsContainer>
    </PlayerCardWrapper>
  );
};
