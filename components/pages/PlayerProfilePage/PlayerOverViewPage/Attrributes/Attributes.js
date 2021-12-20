import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
import { AttributesRow } from "./AttributeRow/AttributesRow";

const AttributesCard = styled(Grid)(() => ({
  marginTop: "7px",
  padding: "0 16px ",
  "&>div": {
    height: "50px",
  },
  "&>div:nth-of-type(even)": {
    paddingLeft: "20px",
  },
  "&>div:nth-of-type(odd)": {
    paddingRight: "24px",
    borderRight: "1px solid  #EAEDF2",
  },
}));
const attributes = [
  {
    text: "Crossing",
    color: "#1BD47B",
    score: "90",
    backgroundColor: "#E8FBF2",
  },
  {
    text: "Crossing",
    color: "#1BD47B",
    score: "90",
    backgroundColor: "#E8FBF2",
  },
  {
    text: "Dribbling",
    color: "#FC7D58",
    score: "56",
    backgroundColor: "rgba(252, 125, 88, 0.14)",
  },
  {
    text: "Dribbling",
    color: "#FC7D58",
    score: "56",
    backgroundColor: "rgba(252, 125, 88, 0.14)",
  },
  {
    text: "Finishing",
    color: "rgba(0, 162, 73, 1)",
    score: "67",
    backgroundColor: "rgba(0, 162, 73, .14)",
  },
  {
    text: "Finishing",
    color: "rgba(0, 162, 73, 1)",
    score: "67",
    backgroundColor: "rgba(0, 162, 73, .14)",
  },
  {
    text: "Off the ball movement",
    color: "rgba(215, 163, 0, 1)",
    score: "45",
    backgroundColor: "rgba(215, 163, 0, .14)",
  },
  {
    text: "Off the ball movement",
    color: "rgba(215, 163, 0, 1)",
    score: "45",
    backgroundColor: "rgba(215, 163, 0, .14)",
  },
  {
    text: "Build up passing",
    color: "rgba(2, 42, 84, 0.6)",
    score: "20",
    backgroundColor: "#EFF1F5",
  },
  {
    text: "Build up passing",
    color: "rgba(2, 42, 84, 0.6)",
    score: "20",
    backgroundColor: "#EFF1F5",
  },
  {
    text: "Final third passing",
    color: "rgba(252, 125, 88, 1)",
    score: "55",
    backgroundColor: "rgba(252, 125, 88, 0.14)",
  },
  {
    text: "Final third passing",
    color: "rgba(252, 125, 88, 1)",
    score: "55",
    backgroundColor: "rgba(252, 125, 88, 0.14)",
  },
  {
    text: "Passing efficiency",
    color: "#1BD47B",
    score: "100",
    backgroundColor: "#E8FBF2",
  },
  {
    text: "Passing efficiency",
    color: "#1BD47B",
    score: "100",
    backgroundColor: "#E8FBF2",
  },
  {
    text: "Penalties ",
    color: "rgba(2, 42, 84, 0.6)",
    score: "24",
    backgroundColor: "#EFF1F5",
  },
  {
    text: "Penalties ",
    color: "rgba(2, 42, 84, 0.6)",
    score: "24",
    backgroundColor: "#EFF1F5",
  },
];
export const Attributes = () => {
  return (
    <CompWrapper
      backgroundColor="#fff"
      title="Attributes"
      titleBackgroundColor="#022A54"
      titleLetterSpace="1.5px"
      gridArea="attributes"
    >
      <AttributesCard item container alignItems="center">
        {attributes.map(({ text, color, score, backgroundColor }, i) => (
          <AttributesRow
            text={text}
            color={color}
            score={score}
            backgroundColor={backgroundColor}
            key={i}
          />
        ))}
      </AttributesCard>
    </CompWrapper>
  );
};
