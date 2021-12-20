import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import { SeasonStatsTableData } from "./SeasonStatsTableData/SeasonStatsTableData";
import { SeasonStatsTableHeader } from "./SeasonStatsTableHeader/SeasonStatsTableHeader";

const PlayerSeasonStatsTableContainer = styled(Grid)(() => ({
  marginTop: "24px",
  overflowX: "auto",
}));

const leaguesCount = 14;
export const PlayerSeasonStatsTable = () => {
  return (
    <PlayerSeasonStatsTableContainer>
      <SeasonStatsTableHeader leaguesCount={leaguesCount} />
      <SeasonStatsTableData leaguesCount={leaguesCount} />
    </PlayerSeasonStatsTableContainer>
  );
};
