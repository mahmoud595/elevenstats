import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PlayerAttributeRadars } from "./PlayerAttributesSection/PlayerAttributeRadars/PlayerAttributeRadars";
import { PlayerAttributesSection } from "./PlayerAttributesSection/PlayerAttributesSection";

import { PlayerLineChartSection } from "./PlayerLineChartSection/PlayerLineChartSection";
const MainPageContainer = styled(Grid)(() => ({
  backgroundColor: "#FFF",
  padding: "24px",
  borderRadius: "12px",
  marginBottom: 50,
}));

export const PlayerDevelopmentPage = () => {
  return (
    <MainPageContainer container direction="column">
      <PlayerLineChartSection />
      <PlayerAttributesSection />
      <PlayerAttributeRadars />
    </MainPageContainer>
  );
};
