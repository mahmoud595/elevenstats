import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
// import { RadarChart } from "components";

export const RadarContainer = ({ id }) => {
  return (
    <CompWrapper
      title="RADAR"
      titleLetterSpace="1.5px"
      titleBackgroundColor="#022A54"
      gridArea={id === "radar1" ? "leftRadar" : "rightRadar"}
      height="376px"
      flex
    >
      {/* <RadarChart id={id} /> */}
    </CompWrapper>
  );
};
