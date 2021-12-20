import { Grid } from "@mui/material";

import { TopPlayersCard } from "./TopPlayersCard/TopPlayersCard";
import { OverViewCardsHeader } from "../OverViewCardsHeader/OverViewCardsHeader";
import { Carousel } from "../Carousel/Carousel";

export const TopPlayersContainer = () => {
  return (
    <Grid item container direction="column">
      <Grid item>
        <OverViewCardsHeader
          title="Top Players"
          linkText="players"
          linkUrl="/league/asd/topPlayers"
        />
      </Grid>
      <Grid item container>
        <Carousel step={3} sliderHeight="fit-content" visibleSlides={3}>
          <TopPlayersCard />
        </Carousel>
      </Grid>
    </Grid>
  );
};
