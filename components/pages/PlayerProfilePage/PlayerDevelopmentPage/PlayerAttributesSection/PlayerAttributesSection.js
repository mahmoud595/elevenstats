import { PlayerComponentHeader } from "../PlayerComponentHeader/PlayerComponentHeader";
import { PlayerAttributeCategories } from "./PlayerAttributeCategories/PlayerAttributeCategories";

export const PlayerAttributesSection = () => {
  return (
    <>
      <PlayerComponentHeader
        title="ATTRIBUTES"
        seasonText="Season (2021 - 20)"
        margin="40px 0 0 0"
      >
        <PlayerAttributeCategories />
      </PlayerComponentHeader>
    </>
  );
};
