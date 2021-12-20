import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { ChartCard } from "./ChartCard/ChartCard";
import { useState, useEffect } from "react";

const HistoryContent = styled(Grid)(({ theme }) => ({}));
export const ChartHistoryContent = ({
  historyType,
  checkForSelection,
  allCharts,
  deleteChart,
}) => {
  const [cardsChecked, setCardsChecked] = useState([]);
  useEffect(() => {
    checkForSelection(cardsChecked.length);
  }, [cardsChecked]);
  const deleteSelectedChart = (i) => {
    deleteChart(i);
  };
  return (
    <HistoryContent
      item
      container
      alignItems="center"
      justifyContent="space-between"
    >
      {allCharts.map((val, i) => (
        <ChartCard
          key={i}
          index={val}
          historyType={historyType}
          setCardsChecked={setCardsChecked}
          cardsChecked={cardsChecked}
          deleteChart={deleteSelectedChart}
        />
      ))}
    </HistoryContent>
  );
};
