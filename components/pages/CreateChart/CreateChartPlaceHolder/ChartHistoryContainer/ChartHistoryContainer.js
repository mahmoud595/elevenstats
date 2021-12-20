import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { ChartHistoryHeader } from "./ChartHistoryHeader/ChartHistoryHeader";
import { useState } from "react";
import { ChartHistoryContent } from "./ChartHistoryContent/ChartHistoryContent";

const History = styled(Grid)(({ theme }) => ({
  padding: "19px 18px 19px 18px",
  height: "560px",
}));
const charts = [0, 1, 2, 3];

export const ChartHistoryContainer = ({ setHistory }) => {
  const [historyType, setHistoryType] = useState("initial");
  const [selected, setSelected] = useState(false);
  const [allCharts, setAllCharts] = useState(charts);

  const checkForSelection = (length) => {
    setSelected(length > 0);
  };
  const deleteChart = (i) => {
    const newCharts = [...allCharts].filter((chart) => {
      return chart !== i;
    });
    setAllCharts(newCharts);
  };
  return (
    <History item container direction="column" wrap="nowrap">
      <ChartHistoryHeader
        historyType={historyType}
        setHistory={setHistory}
        setHistoryType={setHistoryType}
        selected={selected}
        deleteChart={deleteChart}
      />
      <ChartHistoryContent
        historyType={historyType}
        checkForSelection={checkForSelection}
        allCharts={allCharts}
        deleteChart={deleteChart}
      />
    </History>
  );
};
