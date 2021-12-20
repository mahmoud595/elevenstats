import React from "react";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

import { MatchCard } from "../MatchCard/MatchCard";
import { Carousel } from "../../../Carousel/Carousel";

export const LatestMatchesCarrousel = () => {
  const lg = useMediaQuery("(min-width:1600px)");
  return (
    <Carousel
      visibleSlides={lg ? 5 : 4}
      step={lg ? 5 : 4}
      hover
      sliderHeight="140px"
    >
      <Link href="/league">
        <MatchCard />
      </Link>
    </Carousel>
  );
};
