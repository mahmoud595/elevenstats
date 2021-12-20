import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { PlaceHolder } from "./PlaceHolder/PlaceHolder";
import { ChartSettings } from "./ChartSettings/ChartSettings";
import { ChartCreated } from "./ChartCreated/ChartCreated";
import { ChartHistoryContainer } from "./ChartHistoryContainer/ChartHistoryContainer";
import { LimitDialog } from "./LimitDialog/LimitDialog";

const Wrapper = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  borderRadius: "12px",

  marginBottom: "20px",
}));
export const CreateChartPlaceHolder = () => {
  const [createChart, setCreateChart] = useState(false);
  const [created, setCreated] = useState(false);
  const [history, setHistory] = useState(false);
  const [limitDialog, setLimitDialog] = useState(false);
  console.log(createChart);
  return (
    <Wrapper
      item
      container
      sx={{ height: !createChart ? "680px" : "fit-content" }}
    >
      {createChart ? (
        <>
          {created ? (
            <>
              {history ? (
                <ChartHistoryContainer setHistory={setHistory} />
              ) : (
                <ChartCreated setHistory={setHistory} />
              )}
            </>
          ) : (
            <>
              {limitDialog ? (
                <LimitDialog
                  limitDialog={limitDialog}
                  setLimitDialog={setLimitDialog}
                />
              ) : (
                <ChartSettings
                  setCreated={setCreated}
                  setCreateChart={setCreateChart}
                />
              )}
            </>
          )}
        </>
      ) : (
        <PlaceHolder setCreateChart={setCreateChart} />
      )}
    </Wrapper>
  );
};
