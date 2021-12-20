import { Grid } from "@mui/material";

import { SingleRowData } from "./SingleRowData/SingleRowData";

export const SeasonStatsTableData = ({ leaguesCount }) => {
  return (
    <Grid>
      {[1, 2, 3, 4, 5, , 6].map((i) => (
        <SingleRowData
          color={i > 4 ? "#FDC7B7" : i > 2 ? "#FC7D58" : "#1BD47B"}
          leaguesCount={leaguesCount}
        />
      ))}
    </Grid>
  );
};
