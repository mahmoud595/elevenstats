import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
import { ReportCardColumn } from "./ReportCardColumn/ReportCardColumn";

const Report = styled(Grid)(() => ({
  marginTop: "3px",
  padding: "0 17px 0 14px",
  height: "389px",
  overflowY: "auto",
}));
const pros = [
  "World Class",
  "Finishing",
  "Versatility",
  "Fitness",
  "International Experience",
  "Uses both feet",
  "Set Piece Specialist",
  "Versatility",
  "Fitness",
  "International Experience",
  "Uses both feet",
  "Set Piece Specialist",
  "International Experience",
  "Uses both feet",
  "Set Piece Specialist",
  "Versatility",
  "Fitness",
  "International Experience",
  "Uses both feet",
  "Set Piece Specialist",
  "International Experience",
  "Uses both feet",
  "Set Piece Specialist",
];
const cons = [
  "Injury Prone",
  "Inconsistent",
  "Poor Big Match Performance",
  "Gets a lot of cards",
];

export const ReportCard = () => {
  return (
    <CompWrapper
      title="report"
      titleLetterspace="1.5px"
      backgroundColor="#fff"
      titleBackgroundColor="#022A54"
      gridArea="report"
    >
      <Report item container wrap="nowrap">
        <ReportCardColumn data={pros} pros />
        <ReportCardColumn data={cons} />
      </Report>
    </CompWrapper>
  );
};
