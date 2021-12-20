import { styled } from "@mui/material/styles";
import { Grid, Typography, Checkbox } from "@mui/material";

import { ZoomableBubbleChart } from "components/Layout/Charts/ZoomableBubbleChart/ZoomableBubbleChart";
import { Btn } from "components";
import { EditPencil, Download, Share, Delete, CloseToolTip } from "public";
import { useState } from "react";
import { ShareDialog } from "./ShareDialog/ShareDialog";
import { DeleteDialog } from "./DeleteDialog/DeleteDialog";

const Card = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginTop: "24px",
  "& .chartGrid": {
    height: "190px",
  },
  "& .detailsContainer": {
    marginTop: "-10px",
  },
  "& .btnsContainer": {
    marginRight: "10px",
  },
  "& .chartName": {
    fontSize: "12px",
    lineHeight: "15px",
    fontWeight: 700,
  },
  "& .checkbox": {
    position: "absolute",
    top: "8px",
    right: "8px",
    "& >svg": {
      width: "28px",
      height: "28px",
    },
  },
  "& .tooltip": {
    position: "absolute",
    top: "-40px",
    right: "-50%",
    backgroundColor: "#246BFD",
    boxShadow: "13px 7px 80px rgba(134, 134, 134, 0.2)",
    borderRadius: "8px",
    width: "100%",
    padding: "11px 17px 17px 12px",
    flex: 2,
    "::before": {
      content: '""',
      width: "20px",
      height: "10px",
      background: "#246BFD",
      position: "absolute",

      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      transform: "rotate(180deg)",
      borderRadius: "4px",
      bottom: "-7px",
      right: "55%",
      boxShadow: "13px 7px 80px rgba(134, 134, 134, 0.2)",
    },
  },
}));

const btns = [
  { icon: <Download />, bgColor: "rgba(36, 107, 253, 0.08)" },
  { icon: <Share />, bgColor: "rgba(27, 212, 123, 0.08)" },
  { icon: <Delete />, bgColor: "rgba(251, 82, 102, 0.18)" },
];
export const ChartCard = ({
  index,
  historyType,
  setCardsChecked,
  cardsChecked,
  deleteChart,
}) => {
  const [exportImage, setExportImage] = useState();
  const [shareDialog, setShareDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const [checked, setChecked] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const chartExporting = (chart) => {
    setExportImage(chart);
  };
  console.log(index);
  const clickHandler = (i) => {
    if (i === 0) {
      exportImage.exporting.export("png");
    } else if (i === 1) {
      setShareDialog(!shareDialog);
    } else {
      setDeleteDialog(true);
    }
  };
  const changeHandler = () => {
    setChecked(!checked);

    if (!checked) {
      setCardsChecked([...cardsChecked, index]);
    } else {
      const newCards = [...cardsChecked].filter((card) => {
        return card !== index;
      });
      setCardsChecked(newCards);
    }
  };

  const tooltipHandler = () => {
    setTooltip(false);
  };
  return (
    <Card item xs={4} container direction="column" wrap="nowrap">
      {historyType === "organize" ? (
        <>
          <Checkbox
            classes={{ root: "checkbox" }}
            onChange={changeHandler}
            checked={checked}
          />
          {index === 0 && tooltip ? (
            <Grid
              item
              container
              alignItems="center"
              className="tooltip"
              justifyContent="space-between"
              wrap="nowrap"
            >
              <Typography className="chartName" sx={{ color: "#fff" }}>
                Select multiple charts and make a folder
              </Typography>
              <Btn padding="0" onClick={tooltipHandler}>
                <CloseToolTip />
              </Btn>
            </Grid>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <Grid item className="chartGrid">
        <ZoomableBubbleChart
          id={`bubble${index}`}
          history
          chartExporting={chartExporting}
        />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        wrap="nowrap"
        className="detailsContainer"
      >
        <Grid
          item
          container
          alignItems="center"
          wrap="nowrap"
          justifyContent="center"
        >
          <Typography className="chartName" sx={{ color: "#022A54" }}>
            Zoomable Bubble Chart
          </Typography>

          <Btn padding="0" margin="0 0 0 10px">
            <EditPencil />
          </Btn>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          wrap="nowrap"
          justifyContent="flex-end"
          className="btnsContainer"
        >
          {btns.map(({ icon, bgColor }, i) => (
            <Grid
              item
              key={i}
              sx={{
                position: "relative",
                "& svg": {
                  stroke: i === 2 ? "#FB5266" : i === 1 ? "#1BD47B" : "inherit",
                },
              }}
            >
              <Btn
                padding="6px"
                backgroundColor={bgColor}
                borderRadius="6px"
                margin={i !== 0 ? "0 0 0 14px" : "0"}
                key={i}
                onClick={() => clickHandler(i)}
              >
                {icon}
              </Btn>
              {i === 1 && shareDialog ? (
                <ShareDialog
                  shareDialog={shareDialog}
                  setShareDialog={setShareDialog}
                />
              ) : (
                <>
                  {i === 2 && deleteDialog ? (
                    <DeleteDialog
                      deleteChart={deleteChart}
                      deleteDialog={deleteDialog}
                      setDeleteDialog={setDeleteDialog}
                      index={index}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};
