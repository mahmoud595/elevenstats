import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PlayerSearchHeader } from "components/pages/PlayerSearchPage/PlayerSearchHeader/PlayerSearchHeader";

const PlayerProfile = styled(Grid)(() => ({}));

const tabs = [
  { text: "Overview", link: "/playerProfile" },
  { text: "Development", link: "/playerProfile/development" },
  { text: "Reports", link: "#" },
  { text: "Comparison", link: "#" },
  { text: "History", link: "#" },
  { text: "Injuries", link: "#" },
];
export const PlayerProfilePage = ({ children }) => {
  return (
    <PlayerProfile item container direction="column">
      <PlayerSearchHeader tabs={tabs} />
      {children}
    </PlayerProfile>
  );
};
