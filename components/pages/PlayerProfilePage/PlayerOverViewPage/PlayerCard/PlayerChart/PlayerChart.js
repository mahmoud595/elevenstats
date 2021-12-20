import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// import { SolidGaugeChart } from "components/";

const PlayerChartContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  "& div p": {
    display: "inline-block",
  },
  "& .contractText": {
    fontSize: "12px",
  },
  "& .dateText": {
    fontSize: "11px",
    color: "#A1B5C9",
  },
  "& .chartContainer": {
    width: "103px",
    height: "103px",
    "& > div": {
      width: "150px",
      transform: "translate(-45px,-32px)",
    },
  },
}));

export const PlayerChart = () => {
  return (
    <PlayerChartContainer>
      <Grid item className="chartContainer">
        {/* <SolidGaugeChart id="fhewlfhwiofhlhwdlkchcoiw" /> */}
      </Grid>
      <Grid item>
        <Typography className="contractText">Contracted till </Typography>
        {"  "} {"  "}
        <Typography className="dateText">30 Jun 2024</Typography>
      </Grid>
    </PlayerChartContainer>
  );
};
