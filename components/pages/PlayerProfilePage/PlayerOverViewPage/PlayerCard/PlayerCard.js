import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PlayerImageCountry } from "./PlayerImageCountry/PlayerImageCountry";
import { PlayerNameDetails } from "./PlayerNameDetails/PlayerNameDetails";
import { PlayerChart } from "./PlayerChart/PlayerChart";

const PlayerCardContainer = styled(Box)(() => ({
  gridArea: "playerCard",
  background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
  padding: "15px 25px",
  display: "flex",
  justifyContent: "space-around",
}));

export const PlayerCard = () => {
  return (
    <PlayerCardContainer>
      <PlayerImageCountry />
      <PlayerNameDetails />
      <PlayerChart />
    </PlayerCardContainer>
  );
};
