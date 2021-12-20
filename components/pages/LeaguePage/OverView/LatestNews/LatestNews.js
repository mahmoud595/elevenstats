import { Grid } from "@mui/material";

import { LatestNewsBottomComp } from "./LatestNewsBottomComp/LatestNewsBottomComp";
import { OverViewCardsHeader } from "../OverViewCardsHeader/OverViewCardsHeader";

export const LatestNews = () => {
  return (
    <Grid item container direction="column">
      <OverViewCardsHeader title="latest news" linkText="news" />
      <LatestNewsBottomComp />
    </Grid>
  );
};
