import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";

import { EditSection } from "./EditSection/EditSection";
import { History, Download } from "public";
import Btn from "components/Layout/Btn/Btn";
import { ZoomableBubbleChart } from "components/Layout/Charts/ZoomableBubbleChart/ZoomableBubbleChart";
const ChartContainer = styled(Grid)(({ theme }) => ({
  padding: "18px 18px 26px 18px",
  "& .settingsText": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 700,
    color: "#022A54",
  },
  "& .settingsHeader": {
    paddingBottom: "24px",
    borderBottom: "1px solid #EAEDF2",
  },
  "& .chartContainer": {
    height: "500px",
    marginTop: "30px",
    // background: "center no-repeat url('./Eleven Stats Watermark.png')",
    // backgroundSize: "50% 40px",
  },
}));

export const ChartCreated = ({ setHistory }) => {
  const [exportImage, setExportImage] = useState();

  const chartExporting = (chart) => {
    setExportImage(chart);
  };
  const downloadHandler = () => {
    exportImage.exporting.export("png");
  };
  const historyHandler = () => {
    setHistory(true);
  };
  const md = useMediaQuery("(max-width:1142px)");
  return (
    <ChartContainer item container direction="column">
      <Grid
        item
        container
        alignItems="center"
        direction={md ? "column" : "row"}
        wrap={md ? "wrap" : "nowrap"}
        className="settingsHeader"
      >
        <Grid item container alignItems="center" wrap="nowrap">
          <Typography className="settingsText" sx={{ marginRight: "29px" }}>
            SETTINGS
          </Typography>
          {[
            { label: "X-Axis", value: "Shooting" },
            { label: "Y-Axis", value: "Goalkeeping" },
            { label: "Chart", value: "XY Bubble" },
          ].map(({ label, value }, i) => (
            <EditSection key={i} label={label} value={value} />
          ))}
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent={md ? "center" : "flex-end"}
          wrap="nowrap"
          sx={{
            marginTop: md ? "10px" : "0",
          }}
        >
          <Btn
            padding="11px 13px 9px 10px"
            backgroundColor="rgba(161, 181, 201, 0.2)"
            borderRadius="8px"
            onClick={historyHandler}
          >
            <Grid item container alignItems="center" wrap="nowrap">
              <History />
              <Typography className="settingsText" sx={{ marginLeft: "10px" }}>
                History
              </Typography>
            </Grid>
          </Btn>
          <Btn
            padding="11px 13px 9px 10px"
            backgroundColor="rgba(36, 107, 253, 0.08)"
            borderRadius="8px"
            margin={md ? "0 0 0 5px" : "0 0 0 16px"}
            onClick={downloadHandler}
          >
            <Grid item container alignItems="center" wrap="nowrap">
              <Download />
              <Typography
                className="settingsText"
                sx={{
                  marginLeft: "10px",
                  color: "rgba(36, 107, 253, 1) !important",
                }}
              >
                Download Chart
              </Typography>
            </Grid>
          </Btn>
        </Grid>
      </Grid>
      <Grid item container className="chartContainer">
        <ZoomableBubbleChart
          id="bubble1"
          chartExporting={chartExporting}
          mark
        />
      </Grid>
    </ChartContainer>
  );
};
