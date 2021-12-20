import Box from "@mui/material/Box";

import { Attributes } from "./Attrributes/Attributes";
import { BioCard } from "./BioCard/BioCard";
import { FitnessCard } from "./FitnessCard/FitnessCard";
import { PlayerCard } from "./PlayerCard/PlayerCard";
import { PositionsCard } from "./PositionsCard/PositionsCard";
import { RadarContainer } from "./RadarContainer/RadarContainer";
import { TransferCard } from "./TransferCard/TransferCard";
import { SeasonStats } from "./SeasonStats/SeasonStats";
import { SeasonFormCard } from "./SeasonFormCard/SeasonFormCard";
// import { FormCard } from "./FormCard/FormCard";
import { CardsCard } from "./CardsCard/CardsCard";
import { ReportCard } from "./ReportCard/ReportCard";

export const PlayerProfileOverviewPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        color: "#FFF",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
        gap: "20px",

        marginBottom: 5,
        gridTemplateRows: "auto",
        gridTemplateAreas: {
          xs: `"playerCard playerCard"
          "bio transfer"
          "attributes attributes"
          "positions report"
          "leftRadar leftRadar"
          "rightRadar rightRadar"
          "fitness cards"
          "careerResults careerResults"
          "seasonStats seasonStats"`,
          lg: `"playerCard playerCard bio transfer"
          "positions attributes attributes report"
                "leftRadar leftRadar rightRadar rightRadar"
                "fitness careerResults careerResults cards"
                "seasonStats seasonStats seasonStats seasonStats"`,
        },
        "& > div": {
          borderRadius: "14px",
        },
      }}
    >
      <PlayerCard />

      {/* <Box sx={{ gridArea: "bio", bgcolor: "blue" }}>bio</Box> */}
      <BioCard />
      <TransferCard />
      <PositionsCard />
      <Attributes />
      <ReportCard />
      <RadarContainer id="radar1" />
      <RadarContainer id="radar2" />

      <FitnessCard />
      <SeasonFormCard />

      {/* <FormCard /> */}
      <CardsCard />
      <SeasonStats />
    </Box>
  );
};
