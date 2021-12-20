import { PlayerCardWrapper } from "../PlayerCardWrapper/PlayerCardWrapper";
import { PlayerSeasonStats } from "public";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CareerStatsFormWrapper } from "../CareerStatsFormWrapper/CareerStatsFormWrapper";

const FitnessCardsContainer = styled(Grid)(() => ({
  marginTop: "16px",
  color: "rgba(2, 42, 84, 0.6)",
  "& p": {
    display: "inline-block",
    fontSize: "11px",
    fontWight: 600,
  },
  "& .fitnessTable": {
    marginTop: "14px",
  },
}));
const header = ["Date Injured", "Type Of Injury", "Severity"];
const data = [
  {
    0: "5 / 12 / 2018",
    1: "Groin Strain",
    2: { text: "Moderate", color: "#FC7D58" },
  },
];

export const FitnessCard = () => {
  return (
    <PlayerCardWrapper
      gridArea="fitness"
      title="fitness"
      icon={<PlayerSeasonStats />}
      svgbgColor="rgba(27, 212, 123, 0.08)"
      color="#1BD47B"
    >
      <FitnessCardsContainer item container direction="column">
        <Grid item>
          <Typography>Status: </Typography>
          {"  "} {"  "}
          <Typography sx={{ color: "red", paddingLeft: "8px" }}>
            {" "}
            Injured
          </Typography>
        </Grid>
        <Grid item container className="fitnessTable">
          <CareerStatsFormWrapper header={header} data={data} fitness />
        </Grid>
      </FitnessCardsContainer>
    </PlayerCardWrapper>
  );
};
