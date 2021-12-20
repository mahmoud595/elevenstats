import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
import { Height, Weight, Goal, Foot } from "public";
import { BioItem } from "./BioItem/BioItem";

const Bio = styled(Grid)(() => ({
  gridArea: "bio",

  padding: "15px 0 0 14px",
  "&>div:nth-of-type(even) ": {
    //   justifyContent: "center",
  },

  "& .bioText": {
    fontSize: "11px ",
    fontWeight: 600,
    color: "#A1B5C9",
  },
  "& .bioTextNum": {
    color: "#fff",
  },
}));

export const BioCard = () => {
  return (
    <CompWrapper
      backgroundColor="#022A54"
      title="Bio"
      titleBackgroundColor="#355576"
      titleLetterSpace="1.5px"
      gridArea="bio"
    >
      <Bio item container justifyContent="space-between" alignItems="center">
        <BioItem icon={<Height />}>
          <Typography className="bioText">
            Height: <span className="bioTextNum">180cm</span>
          </Typography>
        </BioItem>
        <BioItem icon={<Weight />}>
          <Typography className="bioText">
            Weight: <span className="bioTextNum">178 kg</span>
          </Typography>
        </BioItem>
        <BioItem icon={<Goal style={{ fill: "#fff" }} />}>
          <Typography className="bioText">
            <span className="bioTextNum">42</span> caps/
            <span className="bioTextNum">16</span> goals
          </Typography>
        </BioItem>
        <BioItem icon={<Foot />}>
          <Typography className="bioText">
            <span className="bioTextNum">Right Footed</span>
          </Typography>
        </BioItem>
      </Bio>
    </CompWrapper>
  );
};
