import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PlayerComponentHeader } from "../../PlayerComponentHeader/PlayerComponentHeader";
import { RadarChart } from "components/Layout/Charts/RadarChart/RadarChart";

const RadarContainer = styled(Grid)(() => ({
  height: "300px",
  "@media(max-width:1280px)": {
    flexWrap: "wrap !important",
    height: "500px",
  },
  "@media(min-width:1400px)": {
    height: "380px",
  },
  "& > div": {
    // width: "500px !important",
    width: "50% !important",
    height: "100% !important",
    "@media(max-width:1280px)": {
      width: "100% !important",
      height: "50% !important",
    },
  },
  "& >div:nth-of-type(2)": {
    "@media(max-width:1280px)": {
      marginTop: "20px",
    },
    // marginLeft: "10px",
  },
  marginTop: "8px",
}));
export const PlayerAttributeRadars = () => {
  return (
    <>
      <PlayerComponentHeader
        title="Player attributes on radar chart"
        seasonText="Season (2021 - 20)"
        margin="45px 0 0 0"
      >
        <RadarContainer
          item
          container
          justifyContent="space-between"
          wrap="nowrap"
        >
          {/* <RadarChart id="playerAttributeRadar1" />
          <RadarChart id="playerAttributeRadar2" /> */}
        </RadarContainer>
      </PlayerComponentHeader>
    </>
  );
};
