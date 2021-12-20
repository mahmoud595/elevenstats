import { Grid } from "@mui/material";

import { OverViewCardsHeader } from "../OverViewCardsHeader/OverViewCardsHeader";
import { LatestMatchesBottomComp } from "./LatestMatchesBottomComp/LatestMatchesBottomComp";

export const LatestMatchesContainer = () => {
  return (
    <Grid item container direction="column">
      <OverViewCardsHeader title="latest matches" linkText="matches" />
      <LatestMatchesBottomComp />
    </Grid>
  );
};
