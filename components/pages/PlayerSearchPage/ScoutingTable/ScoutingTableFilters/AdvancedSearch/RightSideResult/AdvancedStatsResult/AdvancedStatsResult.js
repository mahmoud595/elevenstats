import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { GroupTabs } from "../../../../../../PlayerProfilePage/PlayerOverViewPage/SeasonStats/GroupTabs/GroupTabs";
import { AttributesColumn } from "../AttributesResult/AttributesColumn/AttributesColumn";

import { ResultWrapper } from "../ResultWrapper/ResultWrapper";

const StatsContainer = styled(Grid)(({ theme }) => ({
  marginTop: "20px",
}));

const leftSideAtrributes = [
  "crossing",
  "dribbling",
  "finishing",
  "Off the ball movement",
  "Build up passing",
  "Final third passing",
  "Passing efficiency",
  "Penalites",
];
const rightSideAtrributes = [
  "Aerial ability",
  "Defensive intensity",
  "Recovery",
  "Box defending",
  "Foul winning",
  "Set pieces",
  "Offensive duels",
  "Defensive duels",
];

export const AdvancedStatsResult = () => {
  return (
    <ResultWrapper title="Advanced Stats">
      <GroupTabs
        btnWidth="85px"
        paddingTop="25px"
        height="32px"
        containerWidth="100%"
      />
      <StatsContainer container justifyContent="space-around">
        <AttributesColumn attributes={leftSideAtrributes} />
        <AttributesColumn attributes={rightSideAtrributes} />
      </StatsContainer>
    </ResultWrapper>
  );
};
