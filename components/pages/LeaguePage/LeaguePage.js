import { Grid } from "@mui/material";

import { TabsFilters } from "./TabsFilters/TabsFilters";
import { LeagueFilters } from "./LeagueFilters/LeagueFilters";

export const LeaguePage = ({ children }) => {
  return (
    <Grid item container direction="column">
      <LeagueFilters />
      <TabsFilters />
      {children}
    </Grid>
  );
};
