import { Grid } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";

import { OverViewCardsHeader } from "../OverViewCardsHeader/OverViewCardsHeader";
import { Carousel } from "../Carousel/Carousel";
import { LeagueTable } from "../../LeageTable/LeageTable";

export const LeagueGroups = () => {
  return (
    <Grid container direction="column">
      <OverViewCardsHeader title="GRP. A" linkText="tables" />
      <Carousel visibleSlides={1} step={1} sliderHeight="fit-content">
        <LeagueTable />
      </Carousel>
    </Grid>
  );
};
