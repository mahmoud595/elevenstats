import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AdvancedAgeSection } from "./AdvancedAgeSection/AdvancedAgeSection";
import { AdvancedPhysicalSection } from "./AdvancedPhysicalSection/AdvancedPhysicalSection";

import { AdvancedPositionSection } from "./AdvancedPositonSection/AdvancedPositionSection";

const Container = styled(Grid)(({ theme }) => ({
  padding: "0 3.3em",
  borderRight: "1px solid #EAEDF2",
  maxWidth: "34.3%",
  flexBasis: "34.3%",
  "@media (max-width:1200px)": {
    padding: "0 2em",
  },
}));

export const AdvancedPositionsAgePhysicalFilters = () => {
  return (
    <Container item container direction="column">
      <AdvancedPositionSection />
      <AdvancedAgeSection />
      <AdvancedPhysicalSection />
    </Container>
  );
};
