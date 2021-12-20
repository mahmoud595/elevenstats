import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AgeCounterFrom } from "./AgeCounterFrom/AgeCounterFrom";
import { AgeCounterTo } from "./AgeCounterTo/AgeCounterTo";

const AgeSection = styled(Grid)(({ theme }) => ({
  margin: "20px 0 24px 0",
  "& .header": {
    marginBottom: "12px",
  },
  "& .headerTitle": {
    fontSize: "1.8em",
    lineHeight: "30px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "rgba(2, 42, 84, 0.6)",
    "@media (max-width:960px)": {
      fontSize: "1.3em",
    },
  },
  "& .toText": {
    fontSize: "2em",
    lineHeight: "12px",
    margin: "0 2em",
    fontWeight: 600,
    color: "#022A54",
    "@media (max-width:960px)": {
      fontSize: "1.2em",
      margin: "0 1em",
    },
  },
}));

export const AdvancedAgeSection = () => {
  return (
    <AgeSection item container direction="column">
      <Grid item className="header">
        <Typography variant="h2" className="headerTitle">
          Age
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
      >
        <AgeCounterFrom />
        <Grid item>
          <Typography variant="h2" className="toText">
            to
          </Typography>
        </Grid>
        <AgeCounterTo />
      </Grid>
    </AgeSection>
  );
};
