import { styled } from "@mui/system";

import { PlayerDetails } from "./PlayerDetails/PlayerDetails";
import { Inf } from "./INF/INF";
import { PlayerPosition } from "./PlayerPosition/PlayerPosition";
import { PlayerNation } from "./PlayerNation/PlayerNation";
import { RemainingPlayerData } from "./RemainingPlayerData/RemainingPlayerData";
import { OverAll } from "./OverAll/OverAll";

const PREFIX = "player";

const classes = {
  headerText: `${PREFIX}-headerText`,
};

const PlayerContainer = styled("div")(({}) => ({
  height: 72,
  borderRadius: 12,
  // paddingLeft: 5,
  flexWrap: "nowrap",
  display: "flex",
  [`& .${classes.headerText}`]: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

export const Player = ({ player, tableHeader }) => {
  return (
    <PlayerContainer>
      {tableHeader.map(({ name, data }, i) => {
        return name === "name" ? (
          <PlayerDetails
            key={i}
            playerName={player?.bio?.shortName}
            PlayerImageUrl={player?.bio?.playerImage}
            teamName={player?.wyTeam?.officialName}
            teamImageUrl={player?.wyTeam?.imageDataURL}
          />
        ) : name === "position" ? (
          <PlayerPosition key={i} />
        ) : (
          //  : name === "nation" ? (
          //   <PlayerNation
          //     countryName={player?.playerCountry?.name}
          //     countryImage={player?.playerCountry?.flag}
          //   />
          // )
          <RemainingPlayerData
            key={i}
            name={name}
            text={
              name === "age"
                ? player?.bio?.age ?? "-"
                : name === "contract"
                ? `Ends: ${new Date(
                    player?.bio?.contractExpirationDate || "-"
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "numeric",
                  })}`
                : (player?.attributes && player?.attributes[data]) ?? "-"
            }
          />
        );
      })}

      <OverAll />
    </PlayerContainer>
  );
};
