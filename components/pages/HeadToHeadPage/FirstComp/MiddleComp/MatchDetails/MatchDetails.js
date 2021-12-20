import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import { PastH2h } from "./PastH2h/PastH2h";
import { StadiumDateScore } from "./StadiumDateScore/StadiumDateScore";

const MatchDetailsComp = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "#FFFFFF",

  "& .matchDetailsCountryContainer": {
    borderLeft: "1px solid #FFF",
    marginLeft: "2em",
    paddingLeft: "2em",
  },

  "& .matchDetailsSortBy": {
    width: 128,
    background: "#022A54",
    borderRadius: 6,
    height: 26,
    padding: "0px 1em ",
    marginTop: 22,

    "@media (max-width: 600px)": {
      padding: 0,
      marginBottom: 0,
      marginTop: 8,
      maxWidth: "80px",
      height: 18,
    },
  },
}));

export const MatchDetails = ({ league }) => {
  return (
    <MatchDetailsComp
      item
      direction="column"
      alignItems="center"
      justifyContent="space-around"
      wrap="nowrap"
      xs={3}
    >
      <Grid item>
        <StadiumDateScore league={league} />
      </Grid>

      <Grid item className="matchDetailsSortBy">
        <PastH2h />
      </Grid>
    </MatchDetailsComp>
  );
};
