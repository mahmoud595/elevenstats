import { Grid } from "@mui/material";

import { AttributesResult } from "./AttributesResult/AttributesResult";
import { AdvancedStatsResult } from "./AdvancedStatsResult/AdvancedStatsResult";
import { PlayerStatus } from "./PlayerStatus/PlayerStatus";
import { International } from "./International/International";
import { ClubSelection } from "./ClubSelection/ClubSelection";
import { OverAllRating } from "./OverAllRating/OverAllRating";
import { Contract } from "./Contract/Contract";
import { ProsCons } from "./ProsCons/ProsCons";
import { GeneralInfo } from "./GeneralInfo/GeneralInfo";
import { CountrySelection } from "./CountrySelection/CountrySelection";

export const RightSideResult = ({ selected }) => {
  return (
    <Grid
      item
      xs={6}
      sx={{
        paddingLeft: "30px",
        "@media (max-width:950px)": {
          paddingLeft: "5px",
        },
      }}
    >
      {selected === "attributes" ? (
        <AttributesResult />
      ) : selected === "advanced stats" ? (
        <AdvancedStatsResult />
      ) : selected === "playerStatus" ? (
        <PlayerStatus />
      ) : selected === "international" ? (
        <International />
      ) : selected === "Contract" ? (
        <Contract />
      ) : selected === "pros & cons" ? (
        <ProsCons />
      ) : selected === "overall rating" ? (
        <OverAllRating />
      ) : selected === "general info" ? (
        <GeneralInfo />
      ) : ["country", "nationality", "Home-grown Status"].includes(selected) ? (
        <CountrySelection title={selected} />
      ) : selected === "club" ? (
        <ClubSelection title={selected} />
      ) : null}
    </Grid>
  );
};
