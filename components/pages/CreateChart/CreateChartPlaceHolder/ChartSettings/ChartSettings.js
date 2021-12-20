import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { ChartType } from "./ChartType/ChartType";
import { AxisSelections } from "./AxisSelection/AxisSelections";
import { StatsSelection } from "./StatsSelection/StatsSelection";
import { ChartPlayer } from "./ChartPlayer/ChartPlayer";
import { useState } from "react";
import { SettingsButtons } from "./SettingsButtons/SettingsButtons";

const Settings = styled(Grid)(({ theme }) => ({
  padding: "0 24px 24px 24px",
  "& >div:not(:last-of-type)": {
    paddingBottom: "24px",
    borderBottom: " 1px solid #EAEDF2",
  },
}));

const data = [
  "Standard",
  "Shooting",
  "Passing",
  "Accuracy",
  "Duels ",
  "Duels %",
  "Defending",
  "Goalkeeping",
];
export const ChartSettings = ({ setCreated, setCreateChart }) => {
  const [selectedChart, setSelectedChart] = useState("");

  const chartSelection = (chart) => {
    setSelectedChart(chart);
  };

  return (
    <Settings item container direction="column">
      <ChartType chartSelection={chartSelection} />
      <ChartPlayer />
      <AxisSelections data={data} chart={selectedChart} />
      <StatsSelection data={data} />
      <SettingsButtons
        setCreated={setCreated}
        setCreateChart={setCreateChart}
      />
    </Settings>
  );
};
